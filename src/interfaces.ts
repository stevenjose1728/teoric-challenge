import constants from './utils/constants';
import ArkusNexus from './inheritance'
import { ArkusNexus as ArkusNexusModel } from './models/arkus.model';
import {ArkusMty as ArkusMtyModel} from './models/arkusMty.model'

class ArkusMty extends ArkusNexus{
    address = ''
    employees = 0
    backendTechs: string[] = []
    exceptTech = 'Java'
    constructor(props: ArkusNexusModel & ArkusMtyModel){
        super(props)
        this.address = props.address
        this.employees = props.employesCount
        const i = props.backendTechs.findIndex(element => element === this.exceptTech)
        let techs = [... props.backendTechs]
        if(i !== -1){
            techs.splice(i, 1)
        }
        this.backendTechs = techs
    }

    getBackendTechs(){
        return 'In this place we work with all backend techs of principal place in Tijuana except: '+this.exceptTech
    }

    getEmployees(){
        return 'This company have: '+this.employees+' employees'
    }

}

export default ArkusMty