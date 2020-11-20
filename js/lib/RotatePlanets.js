export const rotatePlanets = (planetData,planets)=>{
    console.log("pd",planetData,planets);
    for (let i = 0; i < planetData.length; i++) {
        
        const planet = planetData[i];

        const planetMesh = planets.find( p => {
        console.log(planet['name'],p.geometry.name);
          return planet['name'] === p.geometry.name;
        });;
        planetMesh.rotation.y += planet['rotation'];
        console.log(planetMesh);

        
    }
}