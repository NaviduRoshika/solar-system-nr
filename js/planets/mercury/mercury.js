const mercuryGeometry = new THREE.SphereGeometry( 150, 32, 32 );
mercuryGeometry.name = "mercury";
const mercuryMaterial = new THREE.MeshBasicMaterial({map:new THREE.TextureLoader().load('js/planets/mercury/mercury2.jpg'),overdraw:0.5});

const mercury = new THREE.Mesh(mercuryGeometry,mercuryMaterial);

scene.add(mercury)

mercury.position.x = 500;
