type TCartItem = {
    count: number;
    price: number;
};

interface ICartItems {
    cartItems: TCartItem[];
}

export const totalCount = ({ cartItems }: ICartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.count;
    }, 0);
};

export const totalPrice = ({ cartItems }: ICartItems) => {
    return cartItems.reduce((acc, item) => {
        return acc + item.price * item.count;
    }, 0);
};
