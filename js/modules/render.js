const container = document.querySelector("main > section:nth-of-type(3)")

export function render(data) {
    const results = data.results
    console.log("hallo")

    results.forEach((item, i) => {
        console.log(item)
        const html = `
                <article>
                  <h2>${item.titles[0]}</h2>
                  <p>${
                    item.summaries ? item.summaries[0] : "Geen samenvatting"
                  }</p>
                  <img src="${
                    item.coverimages ? item.coverimages[1] : "Geen foto"
                  }">
                </article>
              `
        container.insertAdjacentHTML("afterbegin", html)
    })
}