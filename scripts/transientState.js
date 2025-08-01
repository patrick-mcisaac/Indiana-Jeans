import { getTransientBrands } from "./BrandNames.js"
import { getTransientPurchaseYear } from "./PurchaseYear.js"

const transientState = {
    ownsBlueJeans: null,
    socioLocationId: 0,
    brandNameId: 0,
    purchaseYearId: 0
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

export const setBrandNameState = (choice) => {
    transientState.brandNameId = choice
}
export const setPurchaseYearState = (choice) => {
    transientState.purchaseYearId = choice
}

//  save transient state to permanent state

// SAVE YEAR STATE
export const saveYearState = async () => {
    const yearState = getTransientPurchaseYear()

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(yearState)
    }

    await fetch('http://localhost:8088/purchaseYears', postOptions)

}
// SAVE JEANS BRAND STATE
export const saveBrandState = async () => {

    const brandState = getTransientBrands()

    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(brandState)
    }

    await fetch('http://localhost:8088/brandNames', postOptions)
}

export const saveState = async () => {
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transientState)
    }

    // check that transient state has valid values
    if (transientState.ownsBlueJeans !== null && transientState.socioLocationId > 0) {
        await fetch('http://localhost:8088/submissions', postOptions)
        // add a CustomEvent 
        const myEvent = new CustomEvent('update')
        // deploy it to document
        document.dispatchEvent(myEvent)
    } else {
        window.alert('You must choose both options')
    }
}


/* 
capture change of brand name

store it in some transient state

when submit is hit, first update brand names in api

then grab brand names from api and update the transient state in this module with brandname id

then do same steps with purchase year before posting the submissions

*/

/* 

I NEED TO FETCH THE DATABASE TO CHECK IF THE JEANS OR YEAR ARE ALREADY THERE

THEN UPDATE TRANSIENT ACCORDINGLY

*/