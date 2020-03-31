import {generateUUID} from './utils.js'

class DaoDaoExcel {
    constructor(obj){
        const defaultObj = {
            id:"daodaoExcel"+generateUUID(),
            width:1000,
            height:1000
        }
        this.currentObj = {...defaultObj,...obj}
    }
}