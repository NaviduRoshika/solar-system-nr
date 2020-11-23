

 const rotate = (planetMesh)=>{
  var duration = 4; // seconds
  var start = 1000;
  var stretchFactor = 1.5;
  console.log("rtate ran");
 const step = (timestamp)=> {
  var progress, x, y;
  if (start === null) {
    start = timestamp;
  //   stretchFactor = 1 + (Math.random() * 3);
  }
  // console.log(start);
  progress = ((timestamp - start) / duration) / 1000; // percent

  x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
  y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
  // console.log("xy",x,y,stretchFactor,progress,duration);
  // ball.style.left = maxX/2 + (gridSize * x) + "px";
  // ball.style.bottom = maxY/2 + (gridSize * y) + "px";
  planetMesh.position.x = x * 1600;
  planetMesh.position.z = y * 1600;
  // console.log(timestamp, x, y);

  if (progress >= 1) start = null; // reset to start position
  requestAnimationFrame(step);
  
}
step();
}

export const rotateElipse = (planetData,planetMeshData,angle)=>{
   
    for (let i = 0; i < planetData.length; i++) {
        
        const planet = planetData[i];
        
        // const planetMesh = planetMeshData.children[0].find( p => {
        //   return planet['name'] === p.geometry.name;
        // });;

        // planetMesh.position.z  = planet.radius * Math.cos(angle * (Math.PI/180)* planet.speed);
        // planetMesh.position.x  = planet.radius * Math.sin(angle * (Math.PI/180)* planet.speed);
        
        // rotate(planetMesh);

      //   var duration = 4; // seconds
      //   var start = 1000;
      //   var stretchFactor = 1.5;

      //  function step(timestamp) {
      //   var progress, x, y;
      //   if (start === null) {
      //     start = timestamp;
      //   //   stretchFactor = 1 + (Math.random() * 3);
      //   }
      //   // console.log(start);
      //   progress = ((timestamp - start) / duration) / 1000; // percent

      //   x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
      //   y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
      //   // console.log("xy",x,y,stretchFactor,progress,duration);
      //   // ball.style.left = maxX/2 + (gridSize * x) + "px";
      //   // ball.style.bottom = maxY/2 + (gridSize * y) + "px";
      //   planetMesh.position.x = x * 600;
      //   planetMesh.position.z = y * 600;
      //   // console.log(timestamp, x, y);

      //   if (progress >= 1) start = null; // reset to start position
      //   requestAnimationFrame(step);
        
      // }
      // step();


        
    }


   
}


      