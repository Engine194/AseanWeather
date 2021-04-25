import { convertCity, getCurrentByCity } from "../../../data/api/apiRequest"

const getCurrentRequest = q => {
    q = convertCity(q);
    getCurrentByCity(q).then(resolve => {
        console.log(resolve);
        debugger
    })
}

export {getCurrentRequest};