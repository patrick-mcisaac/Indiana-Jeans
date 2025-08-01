import { JeanChoices } from "./JeanChoices.js";
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./SubmissionButton.js";
import { SubmissionList } from "./SubmissionList.js";
import { BrandNames } from "./BrandNames.js";
import { PurchaseYear } from "./PurchaseYear.js";

const container = document.getElementById('container')

const render = async () => {

    const jeansHTML = JeanChoices()
    const locationsHTML = await LocationChoices()
    const submitBtn = SubmissionButton()
    const submissions = await SubmissionList()
    const brands = BrandNames()
    const year = PurchaseYear()

    container.innerHTML = `
    ${jeansHTML}
    ${locationsHTML}
    ${brands}
    ${year}
    ${submitBtn}
    ${submissions}
    `
}

render()

document.addEventListener('update', render)