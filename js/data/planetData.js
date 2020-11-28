 export const earthYear =  [8];
 const scale = 1;
 export const planetData = [
    {
        name:'mercury',
        radius:600,
        planetRadius:2400*scale,    //2400
        eRadiusX:550000*scale,
        eRadiusY:29600*scale,
        speed:0.25*earthYear[0],
        x:600,
        z:600,
        rotation:-0.15,
        start:1000,
        stretchFactor:0.1,
        textY:4000
    },
    {
        name:'venus',
        radius:900,
        planetRadius:6050*scale,          //6050
        eRadiusX:750000*scale,
        eRadiusY:48000*scale,
        speed:0.65*earthYear[0],
        x:800,
        z:800,
        rotation:-0.25,
        start:1000,
        stretchFactor:0.1,
        textY:8000
    },
    {
        name:'earth',
        radius:1500,
        planetRadius:6350*scale,           //6350
        eRadiusX:980000*scale,
        eRadiusY:62000*scale,
        speed:earthYear,
        x:1200,
        z:800,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:8000
    },
    {
        name:'mars',
        radius:1800,
        planetRadius:3350*scale,            //3350
        eRadiusX:1400000*scale,
        eRadiusY:85000*scale,
        speed:1.9*earthYear[0],
        x:1400,
        z:1400,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:4000
    },
    {
        name:'jupitar',
        radius:2100,
        planetRadius:12600*scale,           //66854
        eRadiusX:2000000*scale,
        eRadiusY:105000*scale,
        speed:11.86 * earthYear[0],
        x:1600,
        z:1600,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:13800
    },
    {
        name:'saturn',
        radius:2300,
        planetRadius:10435*scale,      //54350
        eRadiusX:2600000*scale,
        eRadiusY:140000*scale,
        speed:(29.5-15) * earthYear[0],
        x:1800,
        z:1800,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:12000
    },
    {
        name:'urenus',
        radius:2500,
        planetRadius:8800*scale,           //25000
        eRadiusX:2880000*scale,
        eRadiusY:164000*scale,
        speed:8.42 * earthYear[0],
        x:2000,
        z:2000,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:10000
    },
    {
        name:'neptune',
        radius:2500,
        planetRadius:7000*scale,
        eRadiusX:3300000*scale,
        eRadiusY:194000*scale,
        speed:16.4 * earthYear[0],
        x:2200,
        z:2200,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1,
        textY:8000
    }
];



