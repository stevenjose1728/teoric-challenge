import Constants from '../../utils/constants'
import Company from '../../class'
describe('Company Class', () => {
    const {areas, places} = Constants
    const company = new Company(areas, places)
    test('Make a Company', () => {
        expect(!!company.areas && !!company.places).toBeTruthy()
    })

    test('Has place in tijuana?', () => {
        expect(company.getPlaces()).toContain('Tijuana')
    })

    test('Has more than 3 areas ', () => {
        expect(company.getAreas().length).toBeGreaterThan(3)
    })

})