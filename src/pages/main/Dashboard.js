import React from "react"
import { Row, Col, List, Collapse } from "antd"


const ListItem = () => (
    <List.Item>
        <List.Item.Meta>

        </List.Item.Meta>
    </List.Item>
)


class Dashboard extends React.Component {

    renderItemTitle = (order) => {
        return {
            key: 90, title: "Ordered at", description: order.orderedAt,
            key: 91, title: "Time", description: order.timestamp,
            key: 92, title: "With driver", description: order.withDriver ? "Yes" : "No",
            key: 93, title: "Length", description: order.duration.length > 1 ? order.duration + "days" : order.duration + "day",
            key: 94, title: "Total price", description: order.totalPrice,
            key: 95, title: "Status", description: order.status,
            key: 96, title: "Remarks", description: order.remarks && order.remarks !== "" ? order.remarks : "-"
        }
    }

    render() {

        const { orders } = this.props

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
                        <h3>Completed</h3>
                        <Collapse bordered={false} defaultActiveKey={['501']}>
                            { orders && orders.filter(order => order.status === 'completed').map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.charteredFor}`} key={order.id}>
                                    <Row>
                                        <Col>
                                            <h3>{order.customer.name}</h3>
                                            <p>{ order.customer.phone } | { order.customer.address }</p>
                                            <p>{order.charteredFor}</p>
                                        </Col>
                                        <Col>
                                            <List
                                                grid={{ gutter: 16, lg: 3 }}
                                                dataSource={() => this.renderItemTitle(order)}
                                                renderItem={spec => (
                                                    <List.Item key={spec.key}>
                                                        <List.Item.Meta title={spec.title} description={spec.description} />
                                                    </List.Item>
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                        <h3>Cancelled</h3>
                        <Collapse bordered={false}>
                            { orders && orders.filter(order => order.status === 'cancelled').map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.orderedAt}`} key={order.id}>
                                    <h3>{order.customer.name}</h3>
                                    { order.customer.phone } | { order.customer.address }
                                    <p>{order.charteredFor}</p>
                                </Collapse.Panel>
                            )) }
                        </Collapse>
                        <h3>On-going</h3>
                        <Collapse bordered={false}>
                            { orders && orders.filter(order => order.status === 'on-going').map(order => (
                                <Collapse.Panel header={`${order.customer.name} - ${order.orderedAt}`} key={order.id}>
                                    <h3>{order.customer.name}</h3>
                                    { order.customer.phone } | { order.customer.address }
                                    <p>{order.charteredFor}</p>
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