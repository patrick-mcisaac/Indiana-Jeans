import { setOwnsBlueJeans } from "./transientState.js"

export const JeanChoices = () => {
    document.addEventListener("change", setJeansChoices)
    // make radio buttons for jean choices
    let html = `
    <div class='survey-input'>
        <h2>Do you own a pair of blue jeans?</h2>
        <label>
            <input type='radio' name='ownsJeans' value='true'> Yes
        </label>
        <label>
            <input type='radio' name='ownsJeans' value='false'> No
        </label>
    </div>
    `
    return html
}

// function for event listener to update state
const setJeansChoices = (e) => {
    // check if name is owsJeans
    if (e.target.name === "ownsJeans") {
        // get event value
        // convert to boolean
        const value = JSON.parse(e.target.value)
        // update state
        setOwnsBlueJeans(value)
    }
}
