import { planetMeshArray  } from "./js/data/planetMesh.js";
import { planetData ,earthYear} from "./js/data/planetData.js"
import { rotatePlanets } from "./js/lib/RotatePlanets.js";
import { createPlanets } from "./js/lib/CreatePlanet.js";
import { Sun} from "./js/stars/sun.js";
import { rotateElipse } from "./js/lib/RotateElipse.js";
import { createPlanetBelt } from "./js/lib/CreatePlanetBelt.js";
import { createSaturnRing } from "./js/planets/saturn/saturnRing.js";
import { createUniverse } from "./js/stars/universe/universe.js";

let loadingNames = ["Mercury","Venus","Earth","Mars","Jupitar","Saturn","Urenus","Neptune","Sun","Sun","Universe"]
    // for (let index = 0; index < planetData.length; index++) {
    //     const element = planetData[index];
    //     // console.log(element);
    // }

  
    const sunInstance = new Sun();
    const createPlanetsResult = createPlanets();
    const planetMeshes = createPlanetsResult[0];
    const planetsTextGroup = createPlanetsResult[1];

    let requestAnimationFrameArray = [];
   
    const sun = sunInstance.createSun();
    sunInstance.createSunLight();

    createPlanetBelt();
    createUniverse();
    const saturnRing = createSaturnRing();
    
    THREE.DefaultLoadingManager.onLoad = function ( ) {
      setInterval(() => {
        document.getElementById("parent").style.display = 'none';
        RESOURCES_LOAD = true;
      }, 2000);
      
      console.log( 'Loading Complete!');
    };

    THREE.DefaultLoadingManager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
      console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
      document.getElementById("child").innerHTML = "Loading " + loadingNames[itemsLoaded - 1] + " ...🚀";
    };
    
    // function animate() {
    //   if(RESOURCES_LOAD == false){
    //     requestAnimationFrame(animate);
    //     console.log(" I called");
    //     renderer.render(loadingScreen.scene,loadingScreen.camera);
    //     return;
    //   }
    //   rotatePlanets(planetData,planetMeshes);
    //   sun.rotation.y += 0.01;
    // //   earth.rotation.y += 0.01;
    //   requestAnimationFrame(animate);
    //   // renderer.render(scene, camera);
    // }

    // animate();

  let radius = 1;
  let angle = 1;

  let update = function () {
    
    if(RESOURCES_LOAD){
      rotatePlanets(planetData,planetMeshes);
      sun.rotation.y += 0.01;
    }else{
        //  loadingScreen.orbit.rotation.x += 0.3;
        //  loadingScreen.orbit.rotation.x += 0.3;
         loadingScreen.moon.position.y  = radius * Math.cos(angle * (Math.PI/180)*5) * 2;
         loadingScreen.moon.position.x  = radius * Math.sin(angle * (Math.PI/180)*5) * 2;
         angle++;
    }
   
   
  };

  var render = function () {
    if(RESOURCES_LOAD){
      renderer.render(scene, camera);
    }else{
      renderer.render(loadingScreen.scene,loadingScreen.camera);
    }
  };

  var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
  };

  GameLoop();

  const rotatePlanetsEllipse = ()=>{
    requestAnimationFrameArray = [];  
    for (let p = 0; p < planetData.length; p++) {
      var duration = planetData[p].speed; // seconds
      var start = planetData[p].start;
      var stretchFactor = planetData[p].stretchFactor;

     function step(timestamp) {
      var progress, x, y;
      if (planetData[p].start === null) {
        planetData[p].start = timestamp;
      }
  
      progress = ((timestamp - planetData[p].start) / planetData[p].speed) / 1000; // percent
      x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
      y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
    

      planetsTextGroup[p].position.x = x * planetData[p].eRadiusX;
      planetsTextGroup[p].position.z = y * planetData[p].eRadiusY;
  
      if (progress >= 1) planetData[p].start = null; // reset to start position
      let animation =  requestAnimationFrame(step);
      requestAnimationFrameArray.push(animation);
      
    }
       step(); 
    }

    // Saturn Ring

      var ringDuration = planetData[5].speed; // seconds
      var ringStart =  planetData[5].start;
      var ringStretchFactor =  planetData[5].stretchFactor;

     function ringEllispe(timestamp) {
      var progress, x, y;
      if (ringStart === null) {
        ringStart = timestamp;
      }

      progress = ((timestamp - ringStart ) / ringDuration) / 1000; // percent
      x = ringStretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
      y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
  
      saturnRing.position.x = x * planetData[5].eRadiusX;
      saturnRing.position.z = y * planetData[5].eRadiusY;
    

      if (progress >= 1)  ringStart = null; // reset to start position
      let animation = requestAnimationFrame(ringEllispe);
      requestAnimationFrameArray.push(animation);

      
    }
      ringEllispe(); 

  }

  rotatePlanetsEllipse();
     
    



      //EVENT LISTNERS
      //Menu
      const menuClicked =()=>{
        console.log(" i called ");
        var x = document.getElementById("button-div");
           if (x.style.display === "none") {
           x.style.display = "block";
        } else {
           x.style.display = "none";
         }
        
        }
      
      const menuButton = document.getElementById("menu-button");
      menuButton.addEventListener('click',menuClicked);
      
      // ..LIGHT
      let isLightOn = true;
      const onLightSwitch = ()=>{
        if(isLightOn){
          sunInstance.sunlightAmbientOff();
          isLightOn = false;
        }else{
          sunInstance.sunlightAmbientOn();
          isLightOn = true;
        }
      }
      const lightSwitchButton = document.getElementById("light-button");
      lightSwitchButton.addEventListener('click',onLightSwitch);


        //STOP
      let isPlanetsStopped = false;
      const onPlanetStop = ()=>{
        if(isPlanetsStopped){
          rotatePlanetsEllipse();
          requestAnimationFrameArray = [];
          isPlanetsStopped = false;
        }else{
          for (let i = 0; i < requestAnimationFrameArray.length; i++) {
            const animation = requestAnimationFrameArray[i];
            cancelAnimationFrame(animation);
          }
          isPlanetsStopped = true;
          requestAnimationFrameArray = [];
        }
        
      }

      const planetStopButton = document.getElementById("stop-button");
      planetStopButton.addEventListener('click',onPlanetStop);




    //    earth.position.z  = radius * Math.cos(angle * (Math.PI/180)*5) * 2;
    //    earth.position.x  = radius * Math.sin(angle * (Math.PI/180)*5) * 2;