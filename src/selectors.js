import { createSelector } from 'reselect';

export const getGoods = state => state.goods.list;
export const getUpdatedAt = state => state.goods.updatedAt;

export const getSortedGoods = (count) => createSelector(
    getGoods,
    goods => {
        console.log('slecting')
        return goods.slice().sort((a, b) => a.price - b.price).slice(0, count)
    },
);
