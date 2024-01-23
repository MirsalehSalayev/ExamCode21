import React, { createContext } from 'react'
import useLocal from '../hooks/useLocal'
export const WishlistContext = createContext()
function WishlistProvider({ children }) {
    const [wish, setWish] = useLocal("wish", [])

    const addToWish = (item) => {
        const index = wish.findIndex(x => x._id === item._id)
        console.log(index);
        if (index === -1) {
            setWish([...wish, item])
            return

        } else {
            remove(item)
        }

    }
    const remove = (item) => {
        setWish([...wish.filter(x => x._id !== item._id)])
    }
    const isWishlist = (item) => {
        return wish.findIndex(x => x._id === item._id) === -1 ? false : true
    }
    const data = {
        addToWish, remove, isWishlist, wish
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistProvider