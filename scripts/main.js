import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js";

const container = document.querySelector('#container')

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationHTML = await LocationChoices()

    container.innerHTML = `
    ${jeansHTML}
    ${locationHTML}
    `
}

render()