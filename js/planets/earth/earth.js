const earthGeometry = new THREE.SphereGeometry( 150, 32, 32 );
earthGeometry.name = "earth";
const earthMaterial = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('js/planets/earth/earth.jpg'),overdraw:0.5});

const earth = new THREE.Mesh(earthGeometry,earthMaterial);

scene.add(earth)

earth.position.x = 1000;
