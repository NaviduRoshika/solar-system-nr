import {planetData} from "../data/planetData.js";
// import {THREE} from "../lib/three.module.js"
// import {  } from "../scene.js";


const planetMeshArray = [];

export let createPlanets =()=>{
    for (let i = 0; i < planetData.length; i++) {
        const planet = planetData[i];
        const planetGeometry = new THREE.SphereGeometry(planet.planetRadius, 32, 32 );
        planetGeometry.name = planet.name;
        const materialPath = 'js/planets/' + planet.name +'/'+ planet.name +  '.jpg'; //'js/planets/earth/earth.jpg'
        const planetMaterial = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load(materialPath),overdraw:0.5});
    
        const planetMesh = new THREE.Mesh(planetGeometry,planetMaterial);
    
        scene.add(planetMesh)
        // console.log(planetMeshArray);
        planetMeshArray.push(planetMesh);
        planetMesh.position.x = planet.x; 
    }
    return planetMeshArray;
}

