import ArkusMty from '../../interfaces'
import constants from '../../utils/constants'

describe('Arkus MTY', () => {
    const params = {
        ... constants,
        address: 'Tijuana, Street ...',
        employesCount: 10
    }
    const arkusMty = new ArkusMty(params)
    test('How many employees have this place?', () => {
        expect(arkusMty.getEmployees()).toMatch(params.employesCount.toString())
    })

    test('Can this company works with Java?', () => {
        expect(arkusMty.backendTechs).not.toContain('Java')
    })
})