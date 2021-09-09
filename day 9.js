//a) Get all the countries from Asia continent /region using Filter function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var asianCountries=data.filter(element=>element.region==="Asia");
    console.log(asianCountries);
}


// b)Get all the countries with a population of less than 2 lakhs using Filter function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var population_LessThan_2Lakhs=data.filter(element=>element.population<200000);
    console.log(population_LessThan_2Lakhs);
}



// c)Print the following details name, capital, flag using forEach function

var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    data.forEach((element) => {
        console.log({"name":element.name,"capital":element.capital,"flag":element.flag})   
    });
}


// d)Print the total population of countries using reduce function
var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    //console.log(data);
    var totalPopulation=data.reduce((a,b)=>a+b.population,0);
    console.log(totalPopulation);
}

//output
//7349137231

// e)Print the country which uses US Dollars as currency


var xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.eu/rest/v2/all',true);
xhr.send();
xhr.onload=function(){
    var data=JSON.parse(this.response);
    var usd_countries=data.filter(element=>{
        for(let i of element.currencies)
            if(i.code ==='USD') return true;})
        .map((element)=>element.name);
    console.log(usd_countries);
}

