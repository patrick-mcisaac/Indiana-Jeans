import { setOwnsBlueJeans } from "./transientState.js"

export const JeanChoices = () => {
    document.addEventListener('click', handleOwnershipChange)

    let html = `
        <div class='survey-input'>
            <h2>Do you own a pair of blue jeans?</h2>
            <input type='radio' id='yes' name='ownsJeans' value='true' />
            <label for='yes'>Yes</label>
            <input type='radio' id='no' name='ownsJeans' value='false' />
            <label for='no'>No</label>
            <input type='radio' id='maybe' name='ownsJeans' value='null' />
            <label for='maybe'>Maybe</label>
        </div>
    `
    return html
}

const handleOwnershipChange = (changeEvent) => {
    if(changeEvent.target.name === 'ownsJeans'){
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}