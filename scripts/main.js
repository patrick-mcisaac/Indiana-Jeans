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

render()

// DISPLAYING WITH MAP  

// At the end  so read mdn on map and join and practice

// then refactor some of my code to use map