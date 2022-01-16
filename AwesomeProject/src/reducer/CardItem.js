const cartItems = (state = [], action) => {
    console.log("tate",state)
    console.log("action",action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload]
        
    }

    return state
}

export default cartItems