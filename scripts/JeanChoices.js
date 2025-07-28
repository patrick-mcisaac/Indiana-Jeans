export const JeanChoices = () => {
    let html = `
        <div class='survey-input'>
            <h2>Do you own a pair of blue jeans?</h2>
            <input type='radio' id='yes' name='ownsJeans' value='true' />
            <label for='yes'>Yes</label>
            <input type='radio' id='no' name='ownsJeans' value='false' />
            <label for='no'>No</label>
        </div>
    `
    return html
}