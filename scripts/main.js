import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js";
import { SubmissionButton } from "./SubmissionButton.js";
import { SubmissionList } from "./SubmissionList.js";

const container = document.querySelector('#container')

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationHTML = await LocationChoices()
    const submissionBtn = SubmissionButton()
    const submissions = await SubmissionList()

    container.innerHTML = `
    ${jeansHTML}
    ${locationHTML}
    ${submissionBtn}
    ${submissions}
    `
}

// create event listener for our custom event
document.addEventListener("newSubmissionCreated", render)

render()
