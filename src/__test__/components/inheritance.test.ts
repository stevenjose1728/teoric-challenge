import ArkusNexus from "../../inheritance"
import Constants from "../../utils/constants"

describe('Arkus Nexus', () => {
    const arkus = new ArkusNexus(Constants)
    test('This company works with React?', () => {
        expect(arkus.getFrontendTechs()).toMatch('React')
    })
    const newTech = 'Java'
    test('Can this company add to their backend techs Java?', () => {
        expect(arkus.addBackendTech(newTech)).toContain(newTech)
    })

    test('Have this company place in Tijuana?', () => {
        expect(arkus.getPlaces()).toContain('Tijuana')
    })
})