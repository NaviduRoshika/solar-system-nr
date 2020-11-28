import {planetData} from "../data/planetData.js";
// import {THREE} from "../lib/three.module.js"
// import {  } from "../scene.js";


const planetMeshArray = [];
const planetLights = [];
const planetTextGroupArray = [];
const loader = new THREE.FontLoader();

export let createPlanets = ()=>{
    for (let i = 0; i < planetData.length; i++) {
        const planet = planetData[i];
        const planetGeometry = new THREE.SphereGeometry(planet.planetRadius, 32, 32 );
        planetGeometry.name = planet.name;
        const materialPath = 'js/planets/' + planet.name +'/'+ planet.name +  '.jpg'; //'js/planets/earth/earth.jpg'
        const planetMaterial = new THREE.MeshLambertMaterial({map:new THREE.TextureLoader(LOADING_MANAGER).load(materialPath),side:THREE.DoubleSide});
        const planetMesh = new THREE.Mesh(planetGeometry,planetMaterial);

        // const spotLight = new THREE.SpotLight( 0xffffff,2.3,0,Math.PI / 3 );
        // spotLight.position.set( 0, 0, 0);
        // spotLight.target = planetMesh;
        // scene.add(spotLight);
        // const spotLightHelper = new THREE.SpotLightHelper( spotLight );
        // scene.add( spotLightHelper );
        // planetLights.push(spotLight);
        // spotLightHelper.scale.set(1000,1000,1000);
    
        var nameTextMesh ;
        let group = new THREE.Group();
        const planetNameText = loader.load( 'js/fonts/helvetiker_regular.typeface.json', function ( font ) {
           nameTextMesh = createPlanetName(font,planet.name.toUpperCase(),planet.textY);
        //    console.log("x1",nameTextMesh);
           scene.add(nameTextMesh)
           group.add(nameTextMesh);
        } );
        
        group.add(planetMesh);
        scene.add(group);

        // scene.add(planetMesh);
        // console.log("x2",nameTextMesh);
        planetMeshArray.push(planetMesh);
        planetTextGroupArray.push(group);
        // console.log(group);
        planetMesh.position.x = planet.x; 
    }
    console.log(planetLights);
    return [planetMeshArray,planetTextGroupArray];
}




const createPlanetName = (font,name,y) =>{
    const geometry = new THREE.TextGeometry( name, {
        font: font,
        size: 3000,
        height: 500,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    } );
    const material = new THREE.MeshBasicMaterial({color:0xffffff});
    const nameTextMesh = new THREE.Mesh(geometry,material);
    nameTextMesh.position.y = y; 
    return nameTextMesh;
}

