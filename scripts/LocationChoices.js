import { setSocioLocation } from "./transientState.js"

export const LocationChoices = async () => {
    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    document.addEventListener('change', setLocation)

    let html = `
    <div class='survey-input'>
        <h2>What type of area do you live in?</h2>
    `

    const locationHTML = locations.map((location) => {
        html+= `
        <label>
            <input type='radio' name='location' value='${location.id}'> ${location.label}
        </label>
        `
    }).join('')

    html += `
    </div>
    `
    return html
}

// event listener function to change state

const setLocation = (e) => {
    // check for input name
    if(e.target.name === 'location'){
        // get value
        const value = parseInt(e.target.value)
        // update state
        setSocioLocation(value)
    }
}