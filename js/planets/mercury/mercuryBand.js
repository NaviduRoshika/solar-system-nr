// const earthBandGeometry = new THREE.RingGeometry(600, 590, 30,30,6,6.3 );
// const earthBandMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.DoubleSide } );
// const earthBand = new THREE.Mesh( earthBandGeometry, earthBandMaterial );
// scene.add( earthBand );
// earthBand.rotation.x = 1.5;


const curve = new THREE.EllipseCurve(
	0,  0,            // ax, aY
	400, 400,           // xRadius, yRadius
	0,  2 * Math.PI,  // aStartAngle, aEndAngle
	false,            // aClockwise
	-2              // aRotation
);

const points = curve.getPoints( 50 );
const geometry = new THREE.BufferGeometry().setFromPoints( points );

const material = new THREE.LineBasicMaterial( { color : 0xff0000 } );

// Create the final object to add to the scene
const ellipse = new THREE.Line( geometry, material );
scene.add(ellipse)
ellipse.rotation.x = 1.5;