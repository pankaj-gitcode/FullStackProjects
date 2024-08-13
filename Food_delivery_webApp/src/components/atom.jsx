import { atom, atomFamily, selectorFamily } from "recoil";
import { assets, food_list } from "../assets/assets";




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

//  --------- foodItem:img,name,description,price -------
export const foodItemsAtom = selectorFamily({
    key: 'foodItemsAtom',
    get: ()=>({get})=>{
        // console.log("THIS IS GET: ",get);
        return food_list.map(elem=>elem)
    }
})

// -------- Ratings ------
export const ratingsAtom = atom({
    key: 'ratingsAtom',
    default: assets.rating_stars
})

// ------- add/remove icons -------
export const addRemoveIconsAtom = atom({
    key: 'addRemoveIconsAtom',
    default: [
        {iconeWhite: assets.add_icon_white}, 
        {iconeGreen: assets.add_icon_green},
        {iconeRed: assets.remove_icon_red}]
}) 
