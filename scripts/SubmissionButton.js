import { saveState } from "./transientState.js"

// event handler to submit
const handleSubmit = (e) => {
    // check if button id
    if(e.target.id === 'submission-button'){
        // get state and post to DB
        saveState()
    }

}


export const SubmissionButton = () => {
    document.addEventListener('click', handleSubmit)

    return `
    <button id='submission-button'>Submit</button>
    `
}