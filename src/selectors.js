import { createSelector } from 'reselect';

export const getGoods = state => state.goods.list;
export const getSortedGoods = createSelector(
    getGoods,
    goods => {
        return goods.slice().sort((a, b) => a.price - b.price);
    },
);
