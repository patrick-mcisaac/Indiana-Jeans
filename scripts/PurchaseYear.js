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
    if (e.target.name === 'year') {
        const value = e.target.value
        transientPurchaseYear.year = parseInt(value)
    }
}

const transientPurchaseYear = {
    year: 0
}


// export function into button
export const updateYearState = async () => {
    // fetch purchase year data
    const response = await fetch('http://localhost:8088/purchaseYears')
    const years = await response.json()

    if (years.length === 0) {
        setPurchaseYearState(1)
        const response2 = await fetch('http://localhost:8088/purchaseYears', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transientPurchaseYear)
        })

    } else {

        // this returns an array with year in db if matches
        const filteredYears = years.filter((year) => {
            return year.year === transientPurchaseYear.year
        })

        if (filteredYears.length === 1 && filteredYears.length < 2) {
            setPurchaseYearState(filteredYears[0].id)
        } else {
            setPurchaseYearState(years.length + 1)


            fetch('http://localhost:8088/purchaseYears', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transientPurchaseYear)
            })
        }
    }
}





