import { updateBrandNameState } from "./BrandNames.js"
import * as userFunctions from "./transientState.js"
import * as allLocation from "./LocationChoices.js"

describe(`check updating state`, () => {
    const originalFetch = global.fetch
    const originalEventHandler = allLocation.setLocation
    beforeEach(() => {
        jest.spyOn(userFunctions, "setBrandNameState")
        jest.spyOn(allLocation, "setLocation")
        jest.spyOn(userFunctions, "setSocioLocation")
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test(" set brand state should pass with 2", async () => {
        const mockData = [{ name: "turtle", id: 1 }]
        const mockResponse = { json: jest.fn().mockResolvedValue(mockData) }
        global.fetch = jest.fn().mockResolvedValue(mockResponse)

        await updateBrandNameState()
        expect(userFunctions.setBrandNameState).toHaveBeenCalled()
        expect(userFunctions.setBrandNameState).toHaveBeenCalledWith(2)
        global.fetch = originalFetch
    })

    test("event handler passes socio location correctly", async () => {
        const mockData = [{ label: "turtle", id: 1 }]
        const mockResponse = { json: jest.fn().mockResolvedValue(mockData) }
        global.fetch = jest.fn().mockResolvedValue(mockResponse)
        const mockEvent = {
            target: {
                name: "location",
                value: 1
            }
        }
        const mockFunc = jest.fn(allLocation.setLocation)
        mockFunc(mockEvent)
        expect(userFunctions.setSocioLocation).toHaveBeenCalled()
        expect(userFunctions.setSocioLocation).toHaveBeenCalledWith(1)
        expect(userFunctions.setSocioLocation).toHaveBeenCalledTimes(1)

        allLocation.setLocation = originalEventHandler
    })
})
