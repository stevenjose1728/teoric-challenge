import constants from './utils/constants';
import ArkusNexus from './inheritance'
import { ArkusNexus as ArkusNexusModel } from './models/arkus.model';
import {ArkusMty as ArkusMtyModel} from './models/arkusMty.model'

class ArkusMty extends ArkusNexus{
    address = ''
    employees = 0
    constructor(props: ArkusNexusModel & ArkusMtyModel){
        super(props)
        this.address = props.address
        this.employees = props.employesCount
    }

    getEmployees(){
        return 'This company have: '+this.employees+' employees'
    }

}

export default ArkusMty