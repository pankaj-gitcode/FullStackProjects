import { atom, atomFamily, selectorFamily } from "recoil";
import { food_list } from "../assets/assets";



// NavBar: menu list items
export const menuAtom = atom({
    key: 'menuAtom',
    default: [{item: 'menu'}, {item: 'mobile-app'}, {item: 'contact-us'}, {item: 'home'}]
})

//ExploreMenu: list of menu
export const menuItemsAtom = atom({
    key: "menuItemsAtom",
    default: [
        {
            menuImage: '/menuImages/menu_1.png',
            menuImageName: 'Salad'
        },
        {
            menuImage: '/menuImages/menu_2.png',
            menuImageName: 'Rolls'
        },
        {
            menuImage: '/menuImages/menu_3.png',
            menuImageName: 'Deserts'
        },
        {
            menuImage: '/menuImages/menu_4.png',
            menuImageName: 'Sandwich'
        },
        {
            menuImage: '/menuImages/menu_5.png',
            menuImageName: 'Cake'
        },
        {
            menuImage: '/menuImages/menu_6.png',
            menuImageName: 'PureVeg'
        },
        {
            menuImage: '/menuImages/menu_7.png',
            menuImageName: 'Pasta'
        },
        {
            menuImage: '/menuImages/menu_8.png',
            menuImageName: 'Noodles'
        }
    ]
})

export const foodItemsAtom = selectorFamily({
    key: 'foodItemsAtom',
    get: ()=>({get})=>{
        // console.log("THIS IS GET: ",get);
        return food_list.map(elem=>elem)
    }
})
