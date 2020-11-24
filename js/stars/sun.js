// const sunGeometry = new THREE.SphereGeometry(5,32,32);
// const sunMaterial = new THREE.MeshBasicMaterial({color:0xffff00});
// const sun = new THREE.Mesh(sunGeometry,sunMaterial);
// scene.add(sun);

// const geometry = new THREE.SphereGeometry( 5, 32, 32 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );

export let createSun = ()=>{
    var sunGeometry = new THREE.SphereGeometry( 22000, 32, 32 );
    var sunMaterial = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader().load('js/stars/sun.jpg'),side:THREE.DoubleSide} );
    var sun = new THREE.Mesh( sunGeometry, sunMaterial );
    scene.add( sun);
    createSunLight();
    return sun;
}


const createSunLight = ()=>{
    
    const dimensions = [
        [0,0,10000],
        [0,0,-10000],
        // [10000,0,0],
        // [-10000,0,0]
    ];

    for (let i = 0; i < dimensions.length; i++) {
        const xyz = dimensions[i];
        
        const spotLight = new THREE.SpotLight( 0xffffff,1.2,1000000,Math.PI/2);
        spotLight.position.set( 0, 0, 0); 
        scene.add( spotLight );
        const spotLightHelper = new THREE.SpotLightHelper( spotLight );
        // scene.add( spotLightHelper );
        const targetObject = new THREE.Object3D();
        scene.add(targetObject);
        spotLight.target = targetObject;
        targetObject.position.set(xyz[0],xyz[1],xyz[2]);
        
    }
    
}



