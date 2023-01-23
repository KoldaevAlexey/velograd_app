export const totalCount = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.count;
    }, 0);
};

export const totalPrice = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);
};
