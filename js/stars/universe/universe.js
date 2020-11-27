export let createUniverse = ()=>{
    var uniGeometry = new THREE.SphereGeometry( 2200000, 32, 32 );
    var uniMaterial = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader(LOADING_MANAGER).load('js/stars/universe/universe.jpg'),side:THREE.DoubleSide} );
    var uni = new THREE.Mesh( uniGeometry, uniMaterial );
    scene.add(uni);
    return uni;
}