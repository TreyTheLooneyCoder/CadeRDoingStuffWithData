import { GetJSON } from "./Fetch.js";

let CreateRows = document.getElementById('CreateRows');
let sortByID = document.getElementById('sortByID');
let sortByFirstName = document.getElementById('sortByFirstName');
let sortByLastName = document.getElementById('sortByLastName');
let sortByHeight = document.getElementById('sortByHeight');
let sortByAge = document.getElementById('sortByAge');

sortByID.addEventListener('click', function() {
    CreateRows.innerText = "";
    IdSort();
});

sortByFirstName.addEventListener('click', function() {
    CreateRows.innerText = "";
    FirstNameSort();
});

sortByLastName.addEventListener('click', function() {
    CreateRows.innerText = "";
    LastNameSort();
});

sortByHeight.addEventListener('click', function() {
    CreateRows.innerText = "";
    HeightSort();
});

sortByAge.addEventListener('click', function() {
    CreateRows.innerText = "";
    AgeSort();
});

function IdSort() {
    let data = GetJSON();

    data.forEach((person) => {
        let newRow = document.createElement('tr')

        let personId = document.createElement('th')
        personId.innerText = person.Id;

        let personFirst = document.createElement('th')
        personFirst.innerText = person.FirstName;

        let personLast = document.createElement('th')
        personLast.innerText = person.LastName;

        let personHeight = document.createElement('th')
        personHeight.innerText = person.Height;

        let personAge = document.createElement('th')
        personAge.innerText = person.Age;
        
        newRow.appendChild(personId, personFirst, personLast, personHeight, personAge);
    
        CreateRows.appendChild(newRow);
    }) 
}

function FirstNameSort() {
    let data = GetJSON();

    data.sort((a, b) => {
        if(a.FirstName < b.FirstName){
            return -1;
        }else if(a.FirstName > b.FirstName){
            return 1;
        }else{
            return 0;
        }
    })

    data.forEach((person) => {
        let newRow = document.createElement('tr')

        let personId = document.createElement('th')
        personId.innerText = person.Id;

        let personFirst = document.createElement('th')
        personFirst.innerText = person.FirstName;

        let personLast = document.createElement('th')
        personLast.innerText = person.LastName;

        let personHeight = document.createElement('th')
        personHeight.innerText = person.Height;

        let personAge = document.createElement('th')
        personAge.innerText = person.Age;
        
        newRow.appendChild(personId, personFirst, personLast, personHeight, personAge);

        CreateRows.appendChild(newRow);
    })
}

function LastNameSort() {
    let data = GetJSON();

    data.sort((a, b) => {
        if(a.LastName < b.LastName){
            return -1;
        }else if(a.LastName > b.LastName){
            return 1;
        }else{
            return 0;
        }
    })

    data.forEach((person) => {
        let newRow = document.createElement('tr')

        let personId = document.createElement('th')
        personId.innerText = person.Id;

        let personFirst = document.createElement('th')
        personFirst.innerText = person.FirstName;

        let personLast = document.createElement('th')
        personLast.innerText = person.LastName;

        let personHeight = document.createElement('th')
        personHeight.innerText = person.Height;

        let personAge = document.createElement('th')
        personAge.innerText = person.Age;
        
        newRow.appendChild(personId, personFirst, personLast, personHeight, personAge);

        CreateRows.appendChild(newRow);
    })
}

function HeightSort() {
    let data = GetJSON();

    data.sort((a, b) => {
        if(a.Height < b.Height){
            return -1;
        }else if(a.Height > b.Height){
            return 1;
        }else{
            return 0;
        }
    })

    data.forEach((person) => {
        let newRow = document.createElement('tr')

        let personId = document.createElement('th')
        personId.innerText = person.Id;

        let personFirst = document.createElement('th')
        personFirst.innerText = person.FirstName;

        let personLast = document.createElement('th')
        personLast.innerText = person.LastName;

        let personHeight = document.createElement('th')
        personHeight.innerText = person.Height;

        let personAge = document.createElement('th')
        personAge.innerText = person.Age;
        
        newRow.appendChild(personId, personFirst, personLast, personHeight, personAge);

        CreateRows.appendChild(newRow);
    })
}

function AgeSort() {
    let data = GetJSON();

    data.sort((a, b) => {
        if(a.Age < b.Age){
            return -1;
        }else if(a.Age > b.Age){
            return 1;
        }else{
            return 0;
        }
    })

    data.forEach((person) => {
        let newRow = document.createElement('tr')

        let personId = document.createElement('th')
        personId.innerText = person.Id;

        let personFirst = document.createElement('th')
        personFirst.innerText = person.FirstName;

        let personLast = document.createElement('th')
        personLast.innerText = person.LastName;

        let personHeight = document.createElement('th')
        personHeight.innerText = person.Height;

        let personAge = document.createElement('th')
        personAge.innerText = person.Age;
        
        newRow.appendChild(personId, personFirst, personLast, personHeight, personAge);

        CreateRows.appendChild(newRow);
    })
}