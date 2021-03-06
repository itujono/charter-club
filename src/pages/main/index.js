import React from "react";
import { Switch, Route, Redirect, BrowserRouter, NavLink, withRouter } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Row, Col, AutoComplete, Input } from "antd"
import Dashboard from "./Dashboard/index";
import Profile from "./Profile";
import Inventory from "./Inventory";
import { connect } from "react-redux";
import { saveUserInfo } from "../../state/actions/userActions"
import { fetchOrders, cancelOrder, approveOrder, completeOrder } from "../../state/actions/orderActions";
import { fetchInventories, addNewInventory, deleteInventory, updateInventory } from "../../state/actions/inventoryActions"

const { Header, Footer, Sider, Content } = Layout

const location = window.location.pathname.split("/")[1]

const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];


class Main extends React.Component {
	state = { collapsed: false, edit: false }

    onCollapse = (collapsed) => this.setState({ collapsed })
    
    handleEditForm = () => this.setState({ edit: true })

    handleCancelEdit = () => this.setState({ edit: false })

    render() {

        const { edit } = this.state
        const { user, saveUserInfo, inventories, addNewInventory, deleteInventory, updateInventory, orders, cancelOrder,
            orderProps, approveOrder, completeOrder, titles, extras } = this.props;

        return (
            <div className="main-app">
                <BrowserRouter>
                    <Layout style={{ minHeight: "100vh" }}>
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            breakpoint="lg"
                            collapsedWidth="0"
                        >
                            <div className="logo">
                                <h3>Charter</h3>
                                <h3>Club</h3>
                                <h3 className="orange">SG</h3>
                            </div>
                            <Menu mode="inline" >
								<Menu.Item key="1">
								<NavLink to="/dashboard">
									<Icon type="pie-chart" />
									<span>Dashboard</span>
								</NavLink>
								</Menu.Item>
								<Menu.Item key="2">
									<NavLink to="/inventory">
										<Icon type="car" />
										<span>Inventory</span>
									</NavLink>
								</Menu.Item>
								<Menu.Item key="3">
									<NavLink to="/profile">
										<Icon type="user" />
										<span>Profile</span>
									</NavLink>
								</Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            {/* <Header style={{ background: "#fff", padding: 0 }} /> */}
                            <Content style={{ margin: "0 3em" }}>
                                <Row type="flex" justify="space-between" align="middle">
                                    <Col span={8}>
                                        <Breadcrumb style={{ margin: "3em 0" }}>
                                            <Breadcrumb.Item>app</Breadcrumb.Item>
                                            <Breadcrumb.Item>{location}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col span={8} style={{ textAlign: 'right' }}>

                                    </Col>
                                </Row>
                                <div className="main-segment">
									<Switch>
										<Redirect exact from="/" to="/dashboard" />
										<Route path="/dashboard" render={() => (
                                            <Dashboard
                                                orders={orders}
                                                cancelOrder={cancelOrder}
                                                approveOrder={approveOrder}
                                                completeOrder={completeOrder}
                                                orderProps={orderProps}
                                            />
                                        )} />
										<Route path="/inventory" render={() => (
                                            <Inventory
                                                deleteInventory={deleteInventory}
                                                addNewInventory={addNewInventory}
                                                updateInventory={updateInventory}
                                                inventories={inventories}
                                                titles={titles}
                                                extras={extras}
                                            />
                                        )} />
										<Route
                                            path="/profile"
                                            render={() => (
                                                <Profile
                                                    onCancelEdit={this.handleCancelEdit}
                                                    user={user}
                                                    onEditForm={this.handleEditForm}
                                                    edit={edit}
                                                    saveUserInfo={saveUserInfo}
                                                />
                                            )}
                                        />
									</Switch>
                                </div>
                            </Content>
                            <Footer style={{ textAlign: "center" }}>
                                Cyder SG © 2018 Made by Riva
                            </Footer>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

const mapState = ({ user, inventory, order }) => {

    const orderProps = {
        orderCancelled: order.orderCancelled,
        orderOngoing: order.orderOngoing,
        orderUnprocessed: order.orderUnprocessed,
        orderCompleted: order.orderCompleted
    }

    const inventoryTitle = inventory && inventory.inventories.map(inv => inv.title)
    const extras = inventory && inventory.inventories[0].extras

    return {
        user: user.user,
        inventories: inventory.inventories,
        orders: order.orders,
        titles: inventoryTitle,
        orderProps,
        extras
    }
}

const actionList = {
    saveUserInfo,
    fetchInventories,
    addNewInventory,
    deleteInventory,
    updateInventory,
    fetchOrders,
    cancelOrder,
    approveOrder,
    completeOrder
};

export default connect(mapState, actionList)(Main);
