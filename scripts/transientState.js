const transientState = {
      ownsBlueJeans: null,
      socioLocationId: 0
    }

// create functions to update choices (setter functions)

// we export this to JeansChoices and create event listener

export const setOwnsBlueJeans = (choice) => {
    transientState.ownsBlueJeans = choice
}

// Export this to LocationChoices.js and create event listener

export const setSocioLocation = (choice) => {
    transientState.socioLocationId = choice
}

//  save transient state to permanent state

export const saveState = async () => {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transientState)
    }

    // check that transient state has valid values
    if(transientState.ownsBlueJeans !== null && transientState.socioLocationId > 0){
        await fetch('http://localhost:8088/submissions', postOptions)
        // add a CustomEvent 
        const myEvent = new CustomEvent('update')
        // deploy it to document
        document.dispatchEvent(myEvent)
    }else {
        window.alert('You must choose both options')
    }
}
