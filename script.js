// Ques--2--Use the rest countries'API URL =>(The link given in class) and
//  display all the country flags in the console.

// Ques--3--Use the same rest countries and print all countries names,regions,sub-regions and populations.


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(var i=0;i<result.length;i++){
        console.log(result[i].name);
        console.log(result[i].flag);
        console.log(result[i].population);
        console.log(result[i].region);
        console.log(result[i].subregion);

    }
    
}