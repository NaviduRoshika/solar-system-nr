 const earthYear =  15;

 export const planetData = [
    {
        name:'mercury',
        radius:600,
        planetRadius:2400,    //2400
        eRadiusX:550000,
        eRadiusY:29600,
        speed:0.25*earthYear,
        x:600,
        z:600,
        rotation:-0.15,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'venus',
        radius:900,
        planetRadius:6050,          //6050
        eRadiusX:750000,
        eRadiusY:48000,
        speed:0.65*earthYear,
        x:800,
        z:800,
        rotation:-0.25,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'earth',
        radius:1500,
        planetRadius:6350,           //6350
        eRadiusX:950000,
        eRadiusY:59000,
        speed:earthYear,
        x:1200,
        z:800,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'mars',
        radius:1800,
        planetRadius:3350,            //3350
        eRadiusX:1400000,
        eRadiusY:77000,
        speed:1.9*earthYear,
        x:1400,
        z:1400,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'jupitar',
        radius:2100,
        planetRadius:12600,           //66854
        eRadiusX:1850000,
        eRadiusY:89000,
        speed:11.86 * earthYear,
        x:1600,
        z:1600,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'saturn',
        radius:2300,
        planetRadius:10435,      //54350
        eRadiusX:2300000,
        eRadiusY:109000,
        speed:(29.5-15) * earthYear,
        x:1800,
        z:1800,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'urenus',
        radius:2500,
        planetRadius:8800,           //25000
        eRadiusX:2600000,
        eRadiusY:140000,
        speed:8.42 * earthYear,
        x:2000,
        z:2000,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    },
    {
        name:'neptune',
        radius:12900,
        planetRadius:7000,
        eRadiusX:2800000,
        eRadiusY:162000,
        speed:16.4 * earthYear,
        x:12200,
        z:2200,
        rotation:0.05,
        start:1000,
        stretchFactor:0.1
    }
];



