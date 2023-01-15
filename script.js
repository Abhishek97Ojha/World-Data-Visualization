let detail = document.getElementById("detail");
let number = document.getElementById("number");
number.innerText = countries_data.length;
let middle = document.getElementById("middle");
let sortData = countries_data.sort((a, b) => {
    return b.population - a.population;
});
let countryName = [];
let populationOf = [];
let totalPopulation = 0;
sortData.map((ele) => {
    countryName.push(ele.name);
    populationOf.push(ele.population);
    totalPopulation += ele.population;
});


function population() {
    console.log("population");
    middle.innerText = "10 Most populated countries in the World";
    detail.innerHTML = "";
    detail.innerHTML =
        ` <div id="data">
             <div class="name">World</div>
             <div class="bar">
                 <div class="color"style="width: ;"></div>
             </div>
             <div class="total" ></div>
         </div>`
    let totalPopulationWorld = document.getElementsByClassName("total");
    totalPopulationWorld[0].innerText = totalPopulation;
    for (i = 0; i < 10; i++) {
        let percent = ((populationOf[i] / totalPopulation) * 100).toFixed(2);
        detail.innerHTML +=
            `<div id="data">
             <div class="name">${countryName[i]}</div>
             <div class="bar">
                 <div class="color" id="color" style="width:${percent}% ;"></div>
             </div>
             <div class="total" >${populationOf[i]}</div>
         </div>`
    }

}
function language() {
    console.log("language");
    middle.innerText = "10 Most Spoken languages in the World";
    detail.innerHTML = ""
}