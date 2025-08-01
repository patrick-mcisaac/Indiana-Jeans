import { setPurchaseYearState } from "./transientState.js"

export const PurchaseYear = () => {

    document.addEventListener('change', eventHandler)

    let html = `
    <div class='survey-input'>
        <h2>Purchase Year</h2>
        <input type='number' max='4' placeholder='YYYY' name='year'>
    </div>
    `

    return html
}

const eventHandler = (e) => {
    if(e.target.name === 'year'){
        const value = e.target.value
        transientPurchaseYear.year = parseInt(value)
    }
}

const transientPurchaseYear = {
    year: 0
}

export const getTransientPurchaseYear = () => {
    return structuredClone(transientPurchaseYear)
}

export const updateYearState = async () => {
    const response = await fetch('http://localhost:8088/purchaseYears')
    const years = await response.json()

    for (const year of years) {
        if(year.year === transientPurchaseYear.year){
            setPurchaseYearState(year.id)
        }
    }
}