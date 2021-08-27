//1.How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

console.log(obj1.name===obj2.name);       //true
console.log(obj1.age===obj2.age);         //true


//2.Display all the country flags in console

var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    for(let i of t){
        console.log(i.flag);
    }
  } else {
    console.log(xhr.responseText); 
  }
};
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();

//3.print all countries name, region, sub region and population

var xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    for(let i of t){
        let output={};
        output.name=i.name;
        output.region=i.region;
        output.subregion=i.subregion;
        output.population=i.population;
        console.log(output);
    }
  } else {
    console.log(xhr.responseText); 
  }
};
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();

