import React from "react";
import { List } from "antd";

const OrderInformation = ({ order }) => (
    <List grid={{ gutter: 16, lg: 3 }}>
        <List.Item>
            <List.Item.Meta title="Ordered at" description={order.orderedAt} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="Time" description={order.timestamp} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="With driver" description={order.withDriver ? "Yes" : "No"} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="Vehicle" description={order.vehicle} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="Length" description={order.duration} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="Total price" description={`$${order.totalPrice}`} />
        </List.Item>
        <List.Item>
            <List.Item.Meta title="Status" description={order.status} />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title="Remarks"
                description={ order.remarks && order.remarks !== "" ? order.remarks : "-" }
            />
        </List.Item>
    </List>
);

export default OrderInformation;
