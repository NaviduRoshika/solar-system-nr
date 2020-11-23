let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize',function(){
    var width  = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});

controls = new THREE.OrbitControls(camera,renderer.domElement);
const helper = new THREE.CameraHelper( camera );
scene.add( helper );


camera.position.x = 0;
camera.position.y = 100000;
camera.position.z = 800000;


// const loader = new THREE.FontLoader();

// loader.load( 'js/fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	const geometry = new THREE.TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 180000,
// 		height: 50000,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelOffset: 0,
// 		bevelSegments: 5
//     } );
//     const material = new THREE.MeshBasicMaterial({color:0xffffff});
//     const textMesh = new THREE.Mesh(geometry,material);
//     scene.add(textMesh);
// } );



