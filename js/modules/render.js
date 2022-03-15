const container = document.querySelector("main > section:nth-of-type(3)")

export function render(data) {
  const results = data.results

  results.forEach((item, i) => {
    console.log(item)
    const html = `
  
                <article>
                <img src="${item.coverimages}">
                <p>cursus</p>
                <h1>${item.titles[0]}</h1>
                <div>
                    <p><span>Bestaat uit:</span> joejoe</p>
                    <p><span>Start datum:</span> joe</p>
                    <p><span>Prijs:</span> joe</p>
                    <p><span>Locatie:</span> joe</p>
                </div>
                <button>Inschrijven</button>
            </article>
              `
    container.insertAdjacentHTML("afterbegin", html)
  })
}