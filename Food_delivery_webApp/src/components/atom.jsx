import { atom } from "recoil";


// NavBar: menu list items
export const menuAtom = atom({
    key: 'menuAtom',
    default: [{item: 'menu'}, {item: 'mobile-app'}, {item: 'contact-us'}, {item: 'home'}]
})