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

//list the food items
export const listAtom = atom({
    key: 'listAtom',
    default: []
})