const countries = [
    {
        id: 1,
        name: 'Արագածոտն',
    }, {
        id: 2,
        name: 'Արարատ',
    }, {
        id: 3,
        name: 'Արմավիր',
    }, {
        id: 4,
        name: 'Գեղարքունիք',
    }, {
        id: 5,
        name: 'Կոտայք',
    }, {
        id: 6,
        name: 'Լոռի',
    }, {
        id: 7,
        name: 'Շիրակ',
    }, {
        id: 8,
        name: 'Սյունիք',
    }, {
        id: 9,
        name: 'Տավուշ',
    }, {
        id: 10,
        name: 'Վայոց ձոր',
    }
];

const city = [
    {
        id: 1,
        names: "Աշտարակ"
    },{
        id: 1.1,
        names: "Ապարան"
    },{
        id: 1.2,
        names: "Թալին"
    }, {
        id: 2,
        names: "Արտաշատ"
    }, {
        id: 2.1,
        names: "Արարատ"
    }, {
        id: 2.2,
        names: "Մասիս"
    }, {
        id: 2.3,
        names: "Վեդի"
    }, {
        id: 3,
        names: "Վաղարշապատ"
    },  {
        id: 3.1,
        names: "Արմավիր"
    },  {
        id: 3.2,
        names: "Մեծամոր"
    }, {
        id: 4,
        names: "Գավառ"
    }, {
        id: 4.1,
        names: "Ճամբարակ"
    }, {
        id: 4.2,
        names: "Մարտունի"
    }, {
        id: 4.3,
        names: "Սևան"
    }, {
        id: 4.4,
        names: "Վարդենիս"
    }, {
        id: 5,
        names: "Հրազդան"
    },  {
        id: 5.1,
        names: "Աբովյան"
    }, {
        id: 5.2,
        names: "Բյուրեղավան"
    }, {
        id: 5.3,
        names: "Եղվարդ"
    }, {
        id: 5.4,
        names: "Նոր Հաճն"
    }, {
        id: 5.5,
        names: "Չարենցավան"
    }, {
        id: 5.6,
        names: "Ծաղկաձոր"
    },
    {
        id: 6,
        names: "Վանաձոր"
    },    {
        id: 6.1,
        names: "Ալավերդի"
    },    {
        id: 6.2,
        names: "Ստեփանավան"
    },    {
        id: 6.3,
        names: "Սպիտակ"
    },    {
        id: 6.4,
        names: "Տաշիր"
    },    {
        id: 6.5,
        names: "Ախթալա"
    },    {
        id: 6.6,
        names: "Թումանյան"
    },    {
        id: 6.7,
        names: "Շամլուղ"
    },
    {
        id: 7,
        names: "Գյումրի"
    },    {
        id: 7.1,
        names: "Արթիկ"
    },    {
        id: 7.2,
        names:  "Մարալիկ"
    }, {
        id: 8,
        names: "Սիսիան"
    }, {
        id: 8.1,
        names: "Ագարակ"
    }, {
        id: 8.2,
        names: "Գորիս"
    }, {
        id: 8.3,
        names: "Դաստակերտ"
    }, {
        id: 8.4,
        names: "Կապան"
    }, {
        id: 8.5,
        names: "Քաջարան"
    }, {
        id: 9,
        names: "Իջևան"
    }, {
        id: 9.1,
        names: "Դիլիջան"
    }, {
        id: 9.2,
        names: "Բերդ"
    }, {
        id: 9.3,
        names: "Նոյեմբերյան"
    }, {
        id: 9.4,
        names: "Այրում"
    }, {
        id: 10,
        names: "Եղեգնաձոր"
    }, {
        id: 10.1,
        names: "Վայք"
    }, {
        id: 10.2,
        names: "Ջերմուկ"
    }
];

const regionSelect = document.forms.firstform.firstselect;
for (let index = 0; index < countries.length; index++) {
    regionSelect.options.add(new Option(countries[index].name, countries[index].id));
};
let deffOption1 = document.getElementById("city1");
let deffOption2 = document.getElementById("city2");
const citySelect = document.forms.firstform.secondselect;
let regionValue;
regionSelect.addEventListener("change", function (i) {
    regionValue = this.value;
    let citynames = city.filter(fn => Math.floor(fn.id) == regionValue);
    citySelect.innerHTML = "";
    citySelect.options.add(deffOption2);
    for (let i = 0; i < citynames.length; i++) {
        citySelect.options.add(new Option(citynames[i].names, citynames[i].id));
    }
});

let cityValue;
citySelect.addEventListener("change", function () {
    let select2 = this.value;
    let qaxaqfil = city.filter(fn => fn.id == select2);
    cityValue = qaxaqfil[0].names;
});

let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
const but = document.getElementById("sub");
const secondDiv = document.getElementById("tablediv");
let helpsDiv = document.getElementById("helpsdiv");
let help1 = document.createElement("div");
help1.classList.add("help1")
help1.append("Մուտքագրեք ձեր անունը!");
let help2 = document.createElement("div");
help2.classList.add("help1")
help2.append("Անունը պետք է լինի ամենաքիչը 4 տառ!");
let help3 = document.createElement("div");
help3.classList.add("help2")
help3.append("Մուտքագրեք ձեր ազգանունը!");
let help4 = document.createElement("div");
help4.classList.add("help2")
help4.append("Ազգնունը պետք է լինի ամենաքիչը 6 տառ!");
let helpRegion = document.createElement("div");
helpRegion.classList.add("help3")
helpRegion.append("Նշեք ձեր մարզը!");
let helpCity = document.createElement("div");
helpCity.classList.add("help4")
helpCity.append("Նշեք ձեր քաղաքը!");
let j = 0;
but.addEventListener("click", function (event) {
        event.preventDefault();
        helpsDiv.innerHTML = ""
        if(!input1.value) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(help1);
        }
        else if(input1.value.length < 4) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(help2);
        };
        if(!input2.value) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(help3)
        }else if(input2.value.length < 6) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(help4)
        };
        if(regionValue === undefined) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(helpRegion)
        } else if(regionValue === "") {
            helpsDiv.style.display = "flex"
            helpsDiv.append(helpRegion)
        };
        if(cityValue === undefined) {
            helpsDiv.style.display = "flex"
            helpsDiv.append(helpCity)
        } 
        else if(cityValue === "") {
            helpsDiv.style.display = "flex"
            helpsDiv.append(helpCity)
        };
       if(input1.value && input2.value && input1.value.length > 3 && input2.value.length > 5 && cityValue !== undefined && cityValue !== "") {
        helpsDiv.style.display = "none"
        j++
        let x = input1.value;
        let y = input2.value;
        let newDiv = document.createElement("div");
        let smallDiv1 = document.createElement("div");
        let smallDiv2 = document.createElement("div");
        let smallDiv3 = document.createElement("div");
        let smallDiv4 = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("deletediv");
        deleteButton.append("X")
        smallDiv1.classList.add("numdiv");
        smallDiv2.classList.add("smalldiv");
        smallDiv3.classList.add("smalldiv");
        smallDiv4.classList.add("smalldiv");
        smallDiv1.append(`${j}.`);
        smallDiv2.append(x);
        smallDiv3.append(y);
        smallDiv4.append(cityValue);
        cityValue = "";
        regionValue = "";
        newDiv.append(smallDiv1,smallDiv2,smallDiv3,smallDiv4,deleteButton);
        newDiv.classList.add("newClass");
        secondDiv.append(newDiv);
        input1.value = "";
        input2.value = "";
        citySelect.innerHTML = "";
        citySelect.options.add(deffOption2);
        regionSelect.innerHTML = "";
        regionSelect.options.add(deffOption1);
        for (let index = 0; index < countries.length; index++) {
            regionSelect.options.add(new Option(countries[index].name, countries[index].id));
        };
        deleteButton.addEventListener("click", function (event) {
            event.preventDefault();
            newDiv.remove();
        })
       }
});
