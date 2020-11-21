import { planetMeshArray  } from "./js/data/planetMesh.js";
import { planetData } from "./js/data/planetData.js"
import { rotatePlanets } from "./js/lib/RotatePlanets.js";
import { createPlanets } from "./js/lib/CreatePlanet.js";
import { createSun } from "./js/stars/sun.js";
import { rotateElipse } from "./js/lib/RotateElipse.js";
import { createPlanetBelt } from "./js/lib/CreatePlanetBelt.js";

    for (let index = 0; index < planetData.length; index++) {
        const element = planetData[index];
        console.log(element);
    }

    const planetMeshes = createPlanets();
    const sun = createSun();
    createPlanetBelt();
    

    function animate() {

      rotatePlanets(planetData,planetMeshes);
      sun.rotation.y += 0.01;
    //   earth.rotation.y += 0.01;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();


  let angle = 10000;
  let radius = 600;

  let update = function () {
      rotateElipse(planetData,planetMeshes,angle);
    //    earth.position.z  = radius * Math.cos(angle * (Math.PI/180)*5) * 2;
    //    earth.position.x  = radius * Math.sin(angle * (Math.PI/180)*5) * 2;

    //    mercury.position.z  = radius * Math.cos(angle * (Math.PI/180)*2) * 1;
    //    mercury.position.x  = radius * Math.sin(angle * (Math.PI/180)*2) * 1;
    
    angle++;
  };

  var render = function () {
    renderer.render(scene, camera);
  };

  var GameLoop = function () {
    requestAnimationFrame(GameLoop);
    update();
    render();
  };

  GameLoop();
     
    for (let p = 0; p < planetData.length; p++) {
        var duration = planetData[p].speed; // seconds
        var start = planetData[p].start;
        var stretchFactor = planetData[p].stretchFactor;

       function step(timestamp) {
        var progress, x, y;
        if (planetData[p].start === null) {
          planetData[p].start = timestamp;
        //   stretchFactor = 1 + (Math.random() * 3);
        }
        // console.log(start);
        progress = ((timestamp -planetData[p].start) / planetData[p].speed) / 1000; // percent
        console.log("spped",planetData[p].speed);
        x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
        y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
        // console.log("xy",x,y,stretchFactor,progress,duration);
        // ball.style.left = maxX/2 + (gridSize * x) + "px";
        // ball.style.bottom = maxY/2 + (gridSize * y) + "px";
        planetMeshes[p].position.x = x * planetData[p].eRadiusX;
        planetMeshes[p].position.z = y * planetData[p].eRadiusY;
        // console.log(x,y);
        // console.log(timestamp, x, y);

        if (progress >= 1) planetData[p].start = null; // reset to start position
        requestAnimationFrame(step);
        
      }
         step(); 
      }
      // const planetStarts = [];

      // var durationMercury = planetData[0].speed; // seconds
      // var startMercury = 1000;//null;
      // var stretchFactorMercury = 0.1;

      // function ellipseMercury(timestamp) {
      //   var progress, x, y;

      //   console.log("start",startMercury);
      //   if (startMercury === null) {
      //     startMercury = timestamp;
      //   //   stretchFactor = 1 + (Math.random() * 3);
      //   }
      //   // console.log(start);
      //   progress = (timestamp - startMercury) / durationMercury / 1000; // percent
        
      //   x = stretchFactorMercury * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
      //   y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
      //   // console.log("xy",x,y,stretchFactor,progress,duration);
      //   // ball.style.left = maxX/2 + (gridSize * x) + "px";
      //   // ball.style.bottom = maxY/2 + (gridSize * y) + "px";
      //   planetMeshes[0].position.x = x * planetData[0].eRadiusX;
      //   planetMeshes[0].position.z = y * planetData[0].eRadiusY;
      //   // console.log(x,y);
      //   // console.log(timestamp, x, y);

      //   if (progress >= 1) startMercury = null; // reset to start position
      //   requestAnimationFrame(ellipseMercury);
        
      // }
      // ellipseMercury();
       

      // var duration = planetData[0].speed; // seconds
      // var start = planetData[0].start;//null;
      // var stretchFactor = planetData[0].stretchFactor;

      // function ellipseMercury(timestamp) {
      //   var progress, x, y;

      //   // console.log("start",startMercury);
      //   if (start === null) {
      //     start = timestamp;
      //   //   stretchFactor = 1 + (Math.random() * 3);
      //   }
      //   // console.log(start);
      //   progress = (timestamp - start) / duration / 1000; // percent
        
      //   x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
      //   y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
      //   // console.log("xy",x,y,stretchFactor,progress,duration);
      //   // ball.style.left = maxX/2 + (gridSize * x) + "px";
      //   // ball.style.bottom = maxY/2 + (gridSize * y) + "px";
      //   planetMeshes[0].position.x = x * planetData[0].eRadiusX;
      //   planetMeshes[0].position.z = y * planetData[0].eRadiusY;
      //   // console.log(x,y);
      //   // console.log(timestamp, x, y);

      //   if (progress >= 1) start = null; // reset to start position
      //   requestAnimationFrame(ellipseMercury);
        
      // }
      // ellipseMercury();