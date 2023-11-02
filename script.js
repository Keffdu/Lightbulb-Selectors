let nodeLights = document.querySelectorAll(".lightbulb")
let subtitle = document.querySelector(".subtitle")

let count = 0
let lights = [...nodeLights]


lights.map((light) => {
    light.addEventListener("mouseover", () => {
        // count++
        light.classList.toggle("active")
        // count === 1 ? subtitle.textContent = `You've clicked the lightbulbs ${count} time` : subtitle.textContent = `You've clicked the lightbulbs ${count} times`
    })
    light.addEventListener("mouseout", () => {
        // count++
        light.classList.toggle("active")
        // count === 1 ? subtitle.textContent = `You've clicked the lightbulbs ${count} time` : subtitle.textContent = `You've clicked the lightbulbs ${count} times`
    })
    // light.addEventListener("click", () => {
    //     // count++
    //     let lightId = parseInt(light.id[light.id.length - 1])
    //     let lightTwo = lightId + 2
    //     let lightThree = lightId + 4
    //     light.classList.toggle("active")
    //     lights[lightTwo].classList.toggle("active")
    //     lights[lightThree].classList.toggle("active")
    //     // count === 1 ? subtitle.textContent = `You've clicked the lightbulbs ${count} time` : subtitle.textContent = `You've clicked the lightbulbs ${count} times`
    // })
})

// console.log(lights[lights.length - 1])