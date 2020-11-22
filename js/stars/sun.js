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
    return sun;
}

