import {
    displayFilterRender,
    render
} from "./render.js"

const form = document.querySelector('main > form > div')

export function showFilters(data) {
    let options = data.results
    let years = []
    let allYears = []

    options.forEach(item => {
        allYears.push(item.year)
    })

    allYears.forEach(item => {
        if (years.indexOf(item) == -1) {
            years.push(item);
        }
    });

    years.sort()
    form.innerHTML = ""
    years.forEach((item) => {
        form.insertAdjacentHTML('beforeend',
            `   
                <input type="checkbox" id="${item}">
                <label for="${item}">${item}</label>
            `)
    })

    form.addEventListener('change', event => {
        filter(data, event)
    })
}

export function filter(data) {
    let checkedYears = [...form.querySelectorAll('input:checked')].map(el => el.id);
    console.log(checkedYears)

    let newData = data.results.filter(element => {
        // Als een van de checkbox entries matcht met 1 van de dataset entries
        if (checkedYears.includes(element.year)) {
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