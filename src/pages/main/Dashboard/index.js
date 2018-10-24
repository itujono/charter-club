import React from "react"
import { Row, Col, List, Collapse, Icon, Button, Popconfirm, message, Select } from "antd"
import OrderInformation from "./OrderInformation";




class Dashboard extends React.Component {

    state = { filtered: false }

    handleCancelOrder = (orderId) => {
        if (this.state.filtered) {
            this.setState({ filtered: false })
            this.props.cancelOrder(orderId)
            message.success("This order has been cancelled")
        } else {
            this.props.cancelOrder(orderId)
            message.success("This order has been cancelled")
        }

    }

    handleApproveOrder = (orderId) => {
        if (this.state.filtered) {
            this.setState({ filtered: false })
            this.props.approveOrder(orderId)
            message.success("The order has been approved")
        } else {
            this.props.approveOrder(orderId)
            message.success("The order has been approved")
        }

    }

    handleCompleteOrder = (orderId) => {
        if (this.state.filtered) {
            this.setState({ filtered: false })
            this.props.completeOrder(orderId)
            message.success("The order has been marked as completed")
        } else {
            this.props.completeOrder(orderId)
            message.success("The order has been marked as completed")
        }
    }

    renderFilteredData = () => {
        const { filteredData } = this.state
        const status = filteredData.map(item => item.status)[0]

        return filteredData && filteredData.map(order => (
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
                { status === 'unprocessed' && (
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
                ) }
            </Collapse.Panel>
        ))
    }

    handleChange = (value) => {
        const { orders } = this.props
        this.setState({ filtered: true })
        const filtered = orders.filter(item => item.status === value)
        if (value === 'all') this.setState({ filtered: false })
        this.setState({ filteredData: filtered })
        return filtered
    }

    render() {

        const { orderProps: { orderCancelled, orderOngoing, orderUnprocessed, orderCompleted } } = this.props
        const { filteredData } = this.state

        return (
            <div>
                <Row type="flex" justify="space-between">
                    <Col span={8}>
                        <div className="heading">
                            <h2>Dashboard</h2>
                            This is Dashboard page
                        </div>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        Filter only {" "} &nbsp;
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Filter the order status..."
                            optionFilterProp="children"
                            onChange={this.handleChange}
                        >
                            <Select.Option value="all">All</Select.Option>
                            <Select.Option value="unprocessed">Unprocessed</Select.Option>
                            <Select.Option value="on-going">On-going</Select.Option>
                            <Select.Option value="completed">Completed</Select.Option>
                            <Select.Option value="cancelled">Cancelled</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row className="order-list">
                    { !this.state.filtered ? <Col>
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
                    </Col> : (
                        <React.Fragment>
                            <h3>{filteredData.map(item => item.status)[0]} - <span>{filteredData.length} {filteredData.length > 1 ? "orders" : "order"}</span></h3>
                            <Collapse bordered={false}>
                                {this.renderFilteredData()}
                            </Collapse>
                        </React.Fragment>
                    )}
                </Row>
            </div>
        )
    }
}

export default Dashboard