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
]

const regionSelect = document.forms.firstform.firstselect;
for (let index = 0; index < countries.length; index++) {
    regionSelect.options.add(new Option(countries[index].name, countries[index].id));
};
let deffOption1 = document.getElementById("city1");
const citySelect = document.forms.firstform.secondselect;
let deffOption2 = document.getElementById("city2");
regionSelect.addEventListener("change", function (i) {
    let index = i.currentTarget.value;
    let citynames = city.filter(fn => Math.floor(fn.id) == index);
    citySelect.innerHTML = "";
    citySelect.options.add(deffOption2);
    for (let i = 0; i < citynames.length; i++) {
        citySelect.options.add(new Option(citynames[i].names, citynames[i].id));
    }
});

let anun;
citySelect.addEventListener("change", function () {
    let select = this.value;
    let qaxaqfil = city.filter(fn => fn.id == select)
    anun = qaxaqfil[0].names;
})


let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
const but = document.getElementById("sub");
const secondDiv = document.getElementById("tablediv");

let j = 0;
but.addEventListener("click", function (event) {
    j++
    event.preventDefault();
    document.body.style.background = "yellow";
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
    smallDiv4.append(anun)
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
});

