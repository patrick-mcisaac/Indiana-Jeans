import { JeanChoices } from "./JeanChoices.js";

const container = document.querySelector('#container')

const render = () => {
    const jeansHTML = JeanChoices()

    container.innerHTML = `${jeansHTML}`
}

render()