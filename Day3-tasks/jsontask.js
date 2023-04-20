let jsonData = `{
    "name":"Samarasam",
    "age":"34",
    "qualification":"B.E",
    "skills":["html","css", 
    "javascript","reactJS", 
    "nodeJS","Mongo DB","AWS","SQL","TypeScript"],
    "location":"Pondicherry",
    "area of interests":[
        "FSD","Front-end","Back-end"
    ]
}`




let resume = JSON.parse(jsonData);

//for in

for(let key in resume) {
    console.log(key, `  `, resume[key]);
}

//for of

for(let value of resume) {
    console.log(value);
}
