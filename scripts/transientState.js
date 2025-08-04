const transientState = {
  ownsBlueJeans: null,
  socioLocationId: 0,
  brandNameId: 0,
  purchaseYearId: 0,
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

// Save transient state
export const saveState = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  }

  // check that transient state has valid values
  if (
    transientState.ownsBlueJeans !== null &&
    transientState.socioLocationId > 0 &&
    transientState.brandNameId !== 0 &&
    transientState.purchaseYearId !== 0
  ) {
    await fetch("http://localhost:8088/submissions", postOptions)
    // add a CustomEvent
    const myEvent = new CustomEvent("update")
    // deploy it to document
    document.dispatchEvent(myEvent)
  } else {
    window.alert("You must choose both options")
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
    debugger
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
