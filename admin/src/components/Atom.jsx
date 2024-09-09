import { atom } from "recoil";


export const dataAtom = atom({
    key: 'dataAtom',
    default: {
        name: '',
        description: '',
        price: '' ,
        category: ''
    }

})