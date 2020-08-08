import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUpdatedAt } from '../actions';

export const GoodsList = ({ goods }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUpdatedAt());
    }, [goods]);

    return (
        <div>
            {goods.map(
                (item, index) => <div key={index}>
                    {item.name}: {item.price}
                </div>
            )}
        </div>
    )
};

export default GoodsList;




                                                                