import { toast } from "react-toastify";

const getStoredCartList = () => {
    const cartListStr = localStorage.getItem('cart-list');
    if(cartListStr){
        const cartList = JSON.parse(cartListStr);
        return cartList;
    }
    else{
        return [];
    }
}
const addToCartList = (id) => {
    const cartList = getStoredCartList();
    if(cartList.includes(id)){
        console.log(id , 'Already Exists ')
        toast.error(' This product already exists in Cart-List')
    }
    else{
        cartList.push(id);
        const cartListStr = JSON.stringify(cartList);
        localStorage.setItem('cart-list',cartListStr)
        toast.success(' This product  Added in Cart-List')
    }
}


const getStoredWishList = () => {
    const wishListSrt = localStorage.getItem('wish-list');
    if(wishListSrt){
        const wishList = JSON.parse(wishListSrt);
        return wishList;
    }
    else{
        return[]
    }
}

const addWishList = (id) => {
    const wishList = getStoredWishList();
    if(wishList.includes(id)){
        toast.error(' This product already exists in WishList')
    }
    else{
        wishList.push(id);
        const wishListSrt = JSON.stringify(wishList)
        localStorage.setItem('wish-list', wishListSrt)
        toast.success(' This product  Added in WishList')
    }
}


export{addToCartList, addWishList , getStoredCartList, getStoredWishList }