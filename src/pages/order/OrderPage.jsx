import React from 'react'
import { OrderSuccess } from './component/OrderSuccess';
import { OrderFail } from './component/OrderFail';
import { useLocation } from 'react-router-dom';

const OrderPage = () => {
    const { state } = useLocation();
    return (
        state.status ? <OrderSuccess data={state.data} /> : <OrderFail />
    );
}

export default OrderPage;