import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js";
import { SubmissionList } from "./SubmissionList.js";

const container = document.getElementById('container')

const render = async () => {

    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const submitBtn = SubmissionButton()
    const submissions = await SubmissionList()

    container.innerHTML = `
    ${jeansHTML}
    ${locationsHTML}
    ${submitBtn}
    ${submissions}
    `
}

render()

document.addEventListener('update', render)