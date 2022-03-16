import {
    displayFilterRender
} from "./render.js"

const form = document.querySelector('main > form > div')

export function laadOpties(data) {
    let opties = data.results
    let jaartallen = []
    let alleJaartallen = []
    console.log(alleJaartallen)

    opties.forEach(item => {
        alleJaartallen.push(item.year)
    })

    alleJaartallen.forEach(item => {
        if (jaartallen.indexOf(item) == -1) {
            jaartallen.push(item);
        }
    });
    alleJaartallen = []
    jaartallen.forEach((item) => {

        form.insertAdjacentHTML('beforeend',
            ` 
                <input type="checkbox" id="${item}">
                <label for="${item}">${item}</label
            `)
    })

    form.addEventListener('change', event => {
        filter(data, event)
    })
}

export function filter(data) {
    let checkedJaartallen = [...form.querySelectorAll('input:checked')].map(el => el.id);
    console.log(checkedJaartallen)

    let newData = data.results.filter(element => {
        // Als een van de checkbox entries matcht met 1 van de dataset entries
        if (checkedJaartallen.includes(element.year)) {
            // Voeg 'm toe aan de nieuwe array
            return true;
        } else {
            // Filter 'm uit de nieuwe array
            return false;
        }
    })

    if (newData.length > 0) {
        displayFilterRender(newData)
    } else {
        render(data)
    }
}