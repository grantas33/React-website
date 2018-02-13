import React from 'react';
import allOrders from './data/orders';
import OrderItem from "./OrderItem";

class OrdersList extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const orderItemList = allOrders.map((order, index) => {
            return <OrderItem
                key={index}
                title={order.title}
                id={order.id}
                username={order.name}
                type={order.type}
            />
        });

        return <div>
                <ul className="list-group">
                    {orderItemList}
                </ul>
            </div>
    }

}

export default OrdersList;