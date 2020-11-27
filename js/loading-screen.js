let loadingScreen = {
    scene : new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000),
    moon:new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 32, 32 ),
        new THREE.MeshBasicMaterial({color:0x00c5e8})
    ),
    planet:new THREE.Mesh(
        new THREE.SphereGeometry(0.6, 32, 32 ),
        new THREE.MeshBasicMaterial({color:0xf2f218})
    ),
    orbit:new THREE.Mesh(
        new THREE.RingGeometry( 1.96, 1.99, 32 ),
        new THREE.MeshBasicMaterial({color:0xdb1212, side: THREE.DoubleSide})
    )
};

let RESOURCES_LOAD = false;

loadingScreen.moon.position.set(0,0,10);
loadingScreen.planet.position.set(0,0,10);
loadingScreen.orbit.position.set(0,0,10);

loadingScreen.camera.lookAt(loadingScreen.planet.position);

loadingScreen.orbit.rotation.x = 0.1;

loadingScreen.scene.add(loadingScreen.moon);
loadingScreen.scene.add(loadingScreen.planet);
loadingScreen.scene.add(loadingScreen.orbit);

console.log('I came',loadingScreen.planet);

let LOADING_MANAGER = THREE.LoadingManager();



