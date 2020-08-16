import React, { useCallback, Fragment, useMemo } from 'react';
import { setGoods } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUpdatedAt, createGetSortedGoods } from '../selectors';
import GoodsList from './GoodsList';

const fetchGoods = () => Promise.resolve([
    {name: 'tomatoes', price: 3},
    {name: 'potatoes', price: 2},
    {name: 'cucumbers', price: 5},
    {name: 'salad', price: 1},
]);

const Goods = () => {
    const dispatch = useDispatch();

    const loadData = useCallback(async () => {
        const goods = await fetchGoods();
        dispatch(setGoods(goods));
    }, []);

    const goodsSelector = useMemo(() => createGetSortedGoods(3), []);
    const goods = useSelector(goodsSelector);

    const updatedAt = useSelector(getUpdatedAt);

    return (
        <Fragment>
            {goods.length ? <GoodsList goods={goods} /> : null}
            <button
                style={{ width: 150, height: 40 }}
                onClick={loadData}
            >
                Load Goods
            </button>
        </Fragment>
    );
}

export default Goods;