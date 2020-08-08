export const getGoods = state => state.goods.list;

export const getSortedGoods = state => {
    const goods = getGoods(state);
    return goods.slice().sort((a, b) => a.price - b.price);
};