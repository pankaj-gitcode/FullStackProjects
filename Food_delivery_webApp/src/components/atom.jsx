import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { assets, food_list } from "../assets/assets";




// NavBar: menu list items
export const menuAtom = atom({
    key: 'menuAtom',
    default: [{item: 'home', link:'/'}, {item: 'menu', link:'#menu'}, {item: 'mobile-app', link:'#mobile-app'}, {item: 'contact us', link:'#footer'}]
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
            menuImageName: 'Pure Veg'
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

//select category 
export const categoryAtom = atom({
    key: 'categoryAtom',
    default: 'All'
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
    default: assets
}) 
// --------- items stored in countItems ---------
export const countItemsAtom = atom({
    key: 'countItemsAtom',
    default: {}
})
// ------------ cart Items ------------
export const cartItemsAtom = atomFamily({
    key: 'cartitemsAtom',
    default: ()=>Array.from(countItemsAtom).map(elem=>elem)
})


// ---------- all icons/assets ------------
export const allIconsAtom = atom({
    key: 'allIconsAtom',
    default: assets
})

// ---------- Signup/Login ---------
export const loginAtom = atom({
    key: 'loginAtom',
    default: false
})

// ----------- Total cart Item's price ----------
export const totalCartPriceAtom = atom({
    key: 'totalCartPriceAtom',
    default: 0
})

// ------------ signUp local Object -------------
export const dataAtom = atom({
    key: 'dataAtom',
    default: {
        name:'',
        email:'',
        password: ''
    }
})

// ----------- URL -----------
export const URLAtom = atom({
    key:'URLAtom',
    default:'http://localhost:3000/api/user'
})
// --------- TOKEN -----------
export const tokenAtom = atom({
    key: 'tokenAtom',
    default: ''
})

// ---------- PROFILE DISPLAY ----------
export const profileDisplayAtom = atom({
    key: 'profileDisplayAtom',
    default: false
})


// ***************************************************************


//ratings icon
// export const ratingsAtom = atom({
//     key: 'ratingsAtom',
//     default: assets.rating_stars
// })
// //add,sub,remove icons add_icon_green,
//     // add_icon_white,
//     // remove_icon_red,

// export const cartUpdateIconsAtom = atom({
//     key: 'cartUpdateIconsAtom',
//     default: assets
// })



