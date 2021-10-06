import Company from './class'
import { ArkusNexus as ArkusNexusModel } from './models/arkus.model.js'

class ArkusNexus extends Company{
    frontendTechs: string[] = []
    backendTechs: string[] = []
    constructor(props: ArkusNexusModel){
        super(props.areas, props.places)
        this.frontendTechs = props.frontendTechs
        this.backendTechs = props.backendTechs
    }

    getFrontendTechs(){
        return 'Here we work with: '+this.frontendTechs.join(', ')
    }

    getBackendTechs(){
        return 'In backend side we work with this techs: '+this.backendTechs.join(', ')
    }

    addBackendTech(tech: string){
        this.backendTechs.push(tech)
        return this.backendTechs
    }
}

export default ArkusNexus