const container = document.querySelector("main > section:nth-of-type(4)")
const container2 = document.querySelector("main > section:nth-of-type(6)")

export function render(data) {

  const results = data.results
  container.innerHTML = ""
  results.forEach((item, i) => {
    console.log(item)

    const html = `
                <article>
                <img src="${item.coverimages[1]}">
                <p>${item.formats[0].text}</p>
                <h1>${item.titles[0]}</h1>
                <div>
                 <p><span>Taal:</span></span> ${item.languages}</p>
                 <p><span>Auteur:</span> ${item.authors} </p>
                 <p><span>Jaar:</span> ${item.year} </p>
                </div>
                <a href="${item.detailLink}">Bekijk boek</a>
            </article>
              `


    container.insertAdjacentHTML("afterbegin", html)

  })
}

// render voor de tweede API
export function render2(data) {

  const results = data.results
  container2.innerHTML = ""
  results.forEach((item, i) => {
    console.log(item)

    const html = `
                <article>
                  <p>${item.titles[0]}</p>
                </article>
              `


    container2.insertAdjacentHTML("afterbegin", html)

  })
}

// Filter function
export function displayFilterRender(newData) {
  const results = newData
  container.innerHTML = ""
  results.forEach((item, i) => {
    console.log(item)

    const html = `
                <article>
                <img src="${item.coverimages[1]}">
                <p>${item.formats[0].text}</p>
                <h1>${item.titles[0]}</h1>
                <div>
                 <p><span>Taal:</span></span> ${item.languages}</p>
                 <p><span>Auteur:</span> ${item.authors} </p>
                 <p><span>Jaar:</span> ${item.year} </p>
                </div>
                <a href="${item.detailLink}">Bekijk boek</a>
            </article>
              `


    container.insertAdjacentHTML("afterbegin", html)

  })
}