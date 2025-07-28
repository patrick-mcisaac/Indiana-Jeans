export const LocationChoices = async () => {
    //TODO: Fetch locations from the API
    const response = await fetch('http://localhost:8088/socioLocations')
    const locations = await response.json()

    let html = `
    <div class='survey-input'>
        <h2>What type of area do you live in?</h2>
   
    `
    //TODO:: generate radio buttons and andd to html
    for (const location of locations) {
        html+= `
        <input type='radio' name='location' value='${location.id}' id='location-${location.id}'>
        <label for='location-${location.id}'>${location.label}</label>
        `
    }

    html += `
     </div>
     `
     return html
}