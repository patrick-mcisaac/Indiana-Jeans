import { saveState } from "./transientState.js"
import { updateBrandNameState } from "./BrandNames.js"
import { updateYearState } from "./PurchaseYear.js"

// event handler to submit
const handleSubmit = async (e) => {
    // check if button id
    if(e.target.id === 'submission-button'){
        // get state and post to DB
        // update purchase year and brand

        await updateBrandNameState()

        await updateYearState()
        saveState()
    }

}


export const SubmissionButton = () => {
    document.addEventListener('click', handleSubmit)

    return `
    <button id='submission-button'>Submit</button>
    `
}