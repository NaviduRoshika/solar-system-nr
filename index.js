import { planetMeshArray  } from "./js/data/planetMesh.js";
import { planetData } from "./js/data/planetData.js"
import { rotatePlanets } from "./js/lib/RotatePlanets.js";
import { createPlanets } from "./js/lib/CreatePlanet.js";
import { createSun } from "./js/stars/sun.js";
import { rotateElipse } from "./js/lib/RotateElipse.js";

    for (let index = 0; index < planetData.length; index++) {
        const element = planetData[index];
        console.log(element);
    }

    const planetMeshes = createPlanets();
    const sun = createSun();

    console.log("cp",planetMeshes);
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
