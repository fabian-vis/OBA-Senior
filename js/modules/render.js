export function render(data) {
  const container = document.querySelector("main > section:nth-of-type(3)")
  const results = data.results

  results.forEach((item, i) => {
    console.log(item)
    const html = `
  
                <article>
                <img src="${item.coverimages[0]}">
                <p>${item.formats[0].text}</p>
                <h1>${item.titles[0]}</h1>
                <div>
                    <p><span>Bestaat uit:</span>  </p>
                    <p><span>Start datum:</span> joe</p>
                    <p><span>Prijs:</span> joe</p>
                    <p><span>Locatie:</span> joe</p>
                </div>
                <button>Inschrijven</button>
            </article>
              `

    if (item.formats[0].text === "Cursus") {
      container.insertAdjacentHTML("afterbegin", html)
    }
  })
}