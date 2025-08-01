import { setBrandNameState } from "./transientState.js"

// create text input to capture brand names
export const BrandNames = () => {

    document.addEventListener('change', eventHandler)

    let html = `
    <div class='survey-input'>
        <h2>Brand Names</h2>
        <input type='text' id='brand-names' name='brand'>
    </div>
    `
    return html
}

const eventHandler = (e) => {
    if(e.target.name === 'brand'){
        const value = e.target.value
        transientBrands.name = value

    }
}

const transientBrands = {
    name: ''
}

export const getTransientBrands = () => {
    return structuredClone(transientBrands)
}

export const updateBrandNameState = async () => {
    const response = await fetch('http://localhost:8088/brandNames')
    const brands = await response.json()

    for (const brand of brands) {
        if(brand.name === transientBrands.name){
            debugger
            setBrandNameState(brand.id)
        }
    }
}