// Convert to MAP

const transientState = new Map()

transientState.set("ownsBlueJeans", null)
transientState.set("socioLocationId", 0)
transientState.set("brandNameId", 0)
transientState.set("purchaseYearId", 0)

/* const transientState = {
  ownsBlueJeans: null,
  socioLocationId: 0,
  brandNameId: 0,
  purchaseYearId: 0,
} */

// create functions to update choices (setter functions)

// we export this to JeansChoices and create event listener

export const setOwnsBlueJeans = (choice) => {
  transientState.set("ownsBlueJeans", choice)
}

// Export this to LocationChoices.js and create event listener

export const setSocioLocation = (choice) => {
  transientState.set("socioLocationId", choice)
}

export const setBrandNameState = (choice) => {
  transientState.set("brandNameId", choice)
}
export const setPurchaseYearState = (choice) => {
  transientState.set("purchaseYearId", choice)
}

// Save transient state
export const saveState = async () => {
  const transientStateObject = Object.fromEntries(transientState)
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientStateObject),
  }

  // check that transient state has valid values
  if (
    transientStateObject.ownsBlueJeans !== null &&
    transientStateObject.socioLocationId > 0 &&
    transientStateObject.brandNameId !== 0 &&
    transientStateObject.purchaseYearId !== 0
  ) {
    await fetch("http://localhost:8088/submissions", postOptions)
    // add a CustomEvent
    const myEvent = new CustomEvent("update")
    // deploy it to document
    document.dispatchEvent(myEvent)
  } else {
    window.alert("You must choose all options")
  }
}

/* 
    ADD A PATCH OR PUT TO UPDATE STATE OF CURRENT SUBMISSION TO INCLUDE YEAR AND BRAND!!!!
*/
export const updateSubmissions = async () => {
  const response = await fetch("http://localhost:8088/submissions")
  const submissions = await response.json()

  const updateState = {}

  for (const submission of submissions) {
    if (!submission.hasOwnProperty("brandNameId")) {
      updateState.brandNameId = 1
      patchingFunction(updateState, submission.id)
    }
    if (!submission.hasOwnProperty("purchaseYearId")) {
      updateState.purchaseYearId = 1
      patchingFunction(updateState, submission.id)
    }
  }
}

const patchingFunction = async (data, id) => {
  const response = await fetch(`http://localhost:8088/submissions/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}
