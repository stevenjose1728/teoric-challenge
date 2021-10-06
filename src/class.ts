class Company {
    areas: string[] = []
    places: string[] = []
    constructor(areas: string[], places: string[]){
        // Save params to make class
        this.areas = areas
        this.places = places
    }
    getAreas(){
        return this.areas
    }
    getPlaces(){
        return this.places
    }
}

export default Company