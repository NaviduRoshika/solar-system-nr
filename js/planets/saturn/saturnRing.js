
export const createSaturnRing = ()=>{
    const geometry = new THREE.RingGeometry( 18000.9, 12000, 30,14);
    const material = new THREE.MeshLambertMaterial( { color: 0xC6A90D , side: THREE.DoubleSide } );
    const mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.x = -0.9;
    scene.add( mesh );
    console.log("satRing",mesh);
    return mesh;
   
}