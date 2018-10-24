import React from "react"
import { Row, Col, List, Collapse, Icon, Button, Popconfirm, message } from "antd"
import OrderInformation from "./OrderInformation";




class Dashboard extends React.Component {

    handleCancelOrder = (orderId) => {
        this.props.cancelOrder(orderId)
        message.success("This order has been cancelled")
    }

    handleApproveOrder = (orderId) => {
        this.props.approveOrder(orderId)
        message.success("The order has been approved")
    }

    handleCompleteOrder = (orderId) => {
        this.props.completeOrder(orderId)
        message.success("The order has been marked as completed")
    }

    render() {

        const { orderProps: { orderCancelled, orderOngoing, orderUnprocessed, orderCompleted } } = this.props

        return (
            <div>
                <Row type="flex" justify="space-between">
                    <Col span={8}>
                        <div className="heading">
                            <h2>Dashboard</h2>
                            This is Dashboard page
                        </div>
                    </Col>
                    <Col span={8}>
                        Heheh something
                    </Col>
                </Row>
                <Row className="order-list">
                    <Col>

                        <h3>Unprocessed - <span>{orderUnprocessed.length} {orderUnprocessed.length > 1 ? "orders" : "order"}</span></h3>
                        <Collapse bordered={false}>
                            { orderUnprocessed && orderUnprocessed.map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.charteredFor}`} key={order.id}>
                                    <Row>
                                        <Col span={8}>
                                            <h3>{order.customer.name}</h3>
                                            <ul>
                                                <li><Icon type="phone" theme="outlined" /> {order.customer.phone} </li>
                                                <li><Icon type="home" theme="outlined" /> {order.customer.address} </li>
                                                <li><Icon type="clock-circle" theme="outlined" /> {order.charteredFor} </li>
                                            </ul>
                                        </Col>
                                        <Col span={16}>
                                            <OrderInformation order={order} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="actions">
                                                <Popconfirm
                                                    title="Are you sure want to approve this order?"
                                                    onConfirm={() => this.handleApproveOrder(order.id)}
                                                >
                                                    <Button type="primary" size="large">
                                                        <Icon type="plus" /> Approve this order...
                                                    </Button>
                                                </Popconfirm> &nbsp;
                                                <Popconfirm
                                                    title="Are you sure want to cancel this order?"
                                                    onConfirm={() => this.handleCancelOrder(order.id)}
                                                >
                                                    <Button type="dashed" size="large" className="link-btn"> Cancel this order... </Button>
                                                </Popconfirm>
                                            </div>
                                        </Col>
                                    </Row>
                                </Collapse.Panel>
                            )) }
                        </Collapse>

                        <h3>On-going - 
                            <span>
                                {orderOngoing.length > 0 ? orderOngoing.length : null} 
                                 {orderOngoing.length === 0 ? " No on-going order for now" : (orderOngoing.length > 1 ? " orders" : " order")}
                            </span>
                        </h3>
                        <Collapse bordered={false}>
                            { orderOngoing && orderOngoing.map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.charteredFor}`} key={order.id}>
                                    <Row>
                                        <Col span={8}>
                                            <h3>{order.customer.name}</h3>
                                            <ul>
                                                <li><Icon type="phone" theme="outlined" /> {order.customer.phone} </li>
                                                <li><Icon type="home" theme="outlined" /> {order.customer.address} </li>
                                                <li><Icon type="clock-circle" theme="outlined" /> {order.charteredFor} </li>
                                            </ul>
                                        </Col>
                                        <Col span={16}>
                                            <OrderInformation order={order} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="actions">
                                                <Popconfirm title="Are you sure want to mark this order as completed?" onConfirm={() => this.handleCompleteOrder(order.id)}>
                                                    <Button type="primary" size="large">
                                                        Mark this order as completed...
                                                    </Button>
                                                </Popconfirm>
                                            </div>
                                        </Col>
                                    </Row>
                                </Collapse.Panel>
                            )) }
                        </Collapse>

                        <h3>Completed - <span>{orderCompleted.length} {orderCompleted.length > 1 ? "orders" : "order"}</span></h3>
                        <Collapse bordered={false}>
                            { orderCompleted && orderCompleted.map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.charteredFor}`} key={order.id}>
                                    <Row>
                                        <Col span={8}>
                                            <h3>{order.customer.name}</h3>
                                            <ul>
                                                <li><Icon type="phone" theme="outlined" /> {order.customer.phone} </li>
                                                <li><Icon type="home" theme="outlined" /> {order.customer.address} </li>
                                                <li><Icon type="clock-circle" theme="outlined" /> {order.charteredFor} </li>
                                            </ul>
                                        </Col>
                                        <Col span={16}>
                                            <OrderInformation order={order} />
                                        </Col>
                                    </Row>
                                </Collapse.Panel>
                            )) }
                        </Collapse>

                        <h3>Cancelled - <span>{orderCancelled.length} {orderCancelled.length > 1 ? "orders" : "order"}</span></h3>
                        <Collapse bordered={false}>
                            { orderCancelled && orderCancelled.map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.charteredFor}`} key={order.id}>
                                    <Row>
                                        <Col span={8}>
                                            <h3>{order.customer.name}</h3>
                                            <ul>
                                                <li><Icon type="phone" theme="outlined" /> {order.customer.phone} </li>
                                                <li><Icon type="home" theme="outlined" /> {order.customer.address} </li>
                                                <li><Icon type="clock-circle" theme="outlined" /> {order.charteredFor} </li>
                                            </ul>
                                        </Col>
                                        <Col span={16}>
                                            <OrderInformation order={order} />
                                        </Col>
                                    </Row>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                        {/* <List itemLayout="horizontal" header="Completed">
                        </List>
                        <List itemLayout="horizontal" header="Cancelled">
                            { orders && orders.filter(order => order.status === 'cancelled').map(order => (
                                <List.Item key={order.id}>
                                    <h3>{order.customer.name}</h3>
                                    { order.customer.phone } | { order.customer.address }
                                </List.Item>
                            )) }
                        </List>
                        <List itemLayout="horizontal" header="On-going">
                            { orders && orders.filter(order => order.status === 'on-going').map(order => (
                                <List.Item key={order.id}>
                                    <h3>{order.customer.name}</h3>
                                    { order.customer.phone } | { order.customer.address }
                                </List.Item>
                            )) }
                        </List> */}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard