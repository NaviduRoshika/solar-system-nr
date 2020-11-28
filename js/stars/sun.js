// const sunGeometry = new THREE.SphereGeometry(5,32,32);
// const sunMaterial = new THREE.MeshBasicMaterial({color:0xffff00});
// const sun = new THREE.Mesh(sunGeometry,sunMaterial);
// scene.add(sun);

// const geometry = new THREE.SphereGeometry( 5, 32, 32 );
// const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
// const sphere = new THREE.Mesh( geometry, material );
// scene.add( sphere );

const fontLoader = new THREE.FontLoader();

const createTempText = (font,temp) =>{
    const geometry = new THREE.TextGeometry(temp, {
        font: font,
        size: 3000,
        height: 500,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5
    } );
    const material = new THREE.MeshBasicMaterial({color:0xffffff});
    const nameTextMesh = new THREE.Mesh(geometry,material);
    nameTextMesh.position.x = -6000; 
    return nameTextMesh;
}

export class Sun{
    constructor(){
        this.sun = null;
        this.spotLights = [];
        this.ambientLight = null;
    }

    createSun =()=>{
        var sunGeometry = new THREE.SphereGeometry( 22000, 32, 32 );
        var sunMaterial = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader(LOADING_MANAGER).load('js/stars/sun.jpg'),side:THREE.DoubleSide} );
        this.sun = new THREE.Mesh( sunGeometry, sunMaterial );
        scene.add( this.sun);
        
        const temperature = '27M Celsius';

        fontLoader.load( 'js/fonts/helvetiker_regular.typeface.json', function ( font ) {
           const  nameTextMesh = createTempText(font,temperature);
            scene.add(nameTextMesh);
         } );
        // createSunLight();
        return this.sun;
    }

    createSunLight = ()=>{
        const dimensions = [
            [0,0,10000],
            [0,0,-10000],
            // [10000,0,0],
            // [-10000,0,0]
        ];
    
        for (let i = 0; i < dimensions.length; i++) {
            const xyz = dimensions[i];
            
            const spotLight = new THREE.SpotLight( 0xffffff,1.4,10000000,Math.PI/2);
            spotLight.position.set( 0, 0, 0); 
            
            scene.add( spotLight );
            spotLight.visible = false;
            this.spotLights.push(spotLight);
            
            const spotLightHelper = new THREE.SpotLightHelper( spotLight );
            // scene.add( spotLightHelper );
            
            const targetObject = new THREE.Object3D();
            scene.add(targetObject);
            spotLight.target = targetObject;
            targetObject.position.set(xyz[0],xyz[1],xyz[2]);
            
        }

        const lightAmbient = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
        scene.add( lightAmbient );
        this.ambientLight = lightAmbient;
        lightAmbient.visible = true;
        
    }

    // createSunLightAmbient = ()=>{
    //     const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
    //     scene.add( light );
    //     this.ambientLight = light;
    //     light.visible = true;
    // }

    sunlightAmbientOff = ()=>{
        for (let i = 0; i < this.spotLights.length; i++) {
            const spotlight = this.spotLights[i];
            spotlight.visible = true;
            
        }
        this.ambientLight.visible = false;
    }

    sunlightAmbientOn = ()=>{
        for (let i = 0; i < this.spotLights.length; i++) {
            const spotlight = this.spotLights[i];
            spotlight.visible = false;
        }
        this.ambientLight.visible = true;
    }



}



// export let createSun = ()=>{
//     var sunGeometry = new THREE.SphereGeometry( 22000, 32, 32 );
//     var sunMaterial = new THREE.MeshBasicMaterial( { map:new THREE.TextureLoader().load('js/stars/sun.jpg'),side:THREE.DoubleSide} );
//     var sun = new THREE.Mesh( sunGeometry, sunMaterial );
//     scene.add( sun);
//     createSunLight();
//     return sun;
// }


// const createSunLight = ()=>{
    
//     const dimensions = [
//         [0,0,10000],
//         [0,0,-10000],
//         // [10000,0,0],
//         // [-10000,0,0]
//     ];

//     for (let i = 0; i < dimensions.length; i++) {
//         const xyz = dimensions[i];
        
//         const spotLight = new THREE.SpotLight( 0xffffff,1.4,1000000,Math.PI/2);
//         spotLight.position.set( 0, 0, 0); 
//         scene.add( spotLight );
//         const spotLightHelper = new THREE.SpotLightHelper( spotLight );
//         // scene.add( spotLightHelper );
//         const targetObject = new THREE.Object3D();
//         scene.add(targetObject);
//         spotLight.target = targetObject;
//         targetObject.position.set(xyz[0],xyz[1],xyz[2]);
        
//     }
    
// }

// const createSunLightAmbient = ()=>{
//     const light = new THREE.AmbientLight( 0xFFFFFF ); // soft white light
//     scene.add( light );
//     // light.visible = false;
// }




