import { setSocioLocationId } from "./transientState.js"

export const LocationChoices = async () => {
    
    // Fetch locations from the API
    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    document.addEventListener('click', setLocationChoices)

    let html = `
    <div class='survey-input'>
        <h2>What type of area do you live in?</h2>
   
    `
    // generate radio buttons and add to html
/*     for (const location of locations) {
        html+= `
        <input type='radio' name='location' value='${location.id}' id='location-${location.id}'>
        <label for='location-${location.id}'>${location.label}</label>
        `
    }
 */
    // try with map() instead of for of loop

    const locationString = locations.map((location) => {
        return `
        <input type='radio' name='location' value='${location.id}' id='location-${location.id}'>
        <label for='location-${location.id}'>${location.label}</label>
        `
    }).join(' ')

    html += `
     ${locationString}
     </div>
     `
     return html
}

const setLocationChoices = (chosenLocation) => {
    if(chosenLocation.target.name === 'location'){
        const id = parseInt(chosenLocation.target.value)
        setSocioLocationId(id)
    }
} 