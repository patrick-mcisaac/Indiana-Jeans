// Set up the transient state data structure and provide initial values
const transientState = {
    ownsBlueJeans: null,
    socioLocationId: 0
}

// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const saveSurveySubmission = async () => {
    // start building the POST request here
    const postOptions = {
        method: 'POST',
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    // send to api
    
    transientState.ownsBlueJeans === true || transientState.ownsBlueJeans ===false && transientState.socioLocationId > 0?
        await fetch('http://localhost:8088/submissions', postOptions):
        window.alert('You must complete the form')

    const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(newSubmissionEvent)
}