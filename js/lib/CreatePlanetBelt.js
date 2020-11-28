import { planetBeltData } from "../data/planetBelt.js";

export const createPlanetBelt = ()=>{
    for (let i = 0; i < planetBeltData.length; i++) {
        const belt = planetBeltData[i];
       
        const curve = new THREE.EllipseCurve(
            belt.aX,  belt.aY,            // ax, aY
            belt.xRadius,belt.yRadius,           // xRadius, yRadius
            0,  2 * Math.PI,  // aStartAngle, aEndAngle
            false,            // aClockwise
            belt.aRotation           // aRotation
        );
        
        const points = curve.getPoints( 5000 );
        const geometry = new THREE.BufferGeometry().setFromPoints( points );
        
        const material = new THREE.LineBasicMaterial( { color :belt.color , linewidth:2} );
        
        // Create the final object to add to the scene
        const ellipse = new THREE.Line( geometry, material );
        scene.add(ellipse)
        ellipse.rotation.x = belt.xRotation;  
    }
}