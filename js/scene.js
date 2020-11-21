let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(100,window.innerWidth/window.innerHeight,1,10000000);
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

camera.position.z = 500;



