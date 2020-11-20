const earthBandGeometry = new THREE.RingGeometry(600, 590, 30,30,6,6.3 );
const earthBandMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
const earthBand = new THREE.Mesh( earthBandGeometry, earthBandMaterial );
scene.add( earthBand );
earthBand.rotation.x = 1.5;
