


export const rotateElipse = (planetData,planetMeshData,angle)=>{
   
    for (let i = 0; i < planetData.length; i++) {
        
        const planet = planetData[i];

        const planetMesh = planetMeshData.find( p => {
        // console.log(planet['name'],p.geometry.name);
          return planet['name'] === p.geometry.name;
        });;
        planetMesh.position.z  = planet.radius * Math.cos(angle * (Math.PI/180)* planet.speed);
        planetMesh.position.x  = planet.radius * Math.sin(angle * (Math.PI/180)* planet.speed);
        
    }
}