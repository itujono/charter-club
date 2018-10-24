import React from "react";
import { Switch, Route, Redirect, BrowserRouter, NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd"
import Dashboard from "./Dashboard/index";
import Profile from "./Profile";
import Inventory from "./Inventory";
import { connect } from "react-redux";
import { saveUserInfo } from "../../state/actions/userActions"
import { fetchOrders, cancelOrder, approveOrder } from "../../state/actions/orderActions";
import { fetchInventories, addNewInventory, deleteInventory, updateInventory } from "../../state/actions/inventoryActions"

const { Header, Footer, Sider, Content } = Layout

class Main extends React.Component {
	state = { collapsed: false, edit: false }

    onCollapse = (collapsed) => this.setState({ collapsed })
    
    handleEditForm = () => this.setState({ edit: true })

    handleCancelEdit = () => this.setState({ edit: false })

    render() {

        const { edit } = this.state
        const { user, saveUserInfo, inventories, addNewInventory, deleteInventory, updateInventory, orders, cancelOrder, orderProps } = this.props

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
                            <div className="logo" />
                            <Menu defaultSelectedKeys={["1"]} mode="inline" >
								<Menu.Item key="1">
								<NavLink to="/dashboard">
									<Icon type="pie-chart" />
									<span>Dashboard</span>
                                    <p>Your stats live here</p>
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
                            <Header style={{ background: "#fff", padding: 0 }} />
                            <Content style={{ margin: "0 3em" }}>
                                <Row type="flex" justify="space-between">
                                    <Col span={8}>
                                        <Breadcrumb style={{ margin: "3em 0" }}>
                                            <Breadcrumb.Item>User</Breadcrumb.Item>
                                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col span={8}>
                                        {/* <AutoComplete dataSource={inventories}>
                                            <Input suffix={<Icon type="search" />} />
                                        </AutoComplete> */}
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
                                                orderProps={orderProps}
                                            />
                                        )} />
										<Route path="/inventory" render={() => (
                                            <Inventory
                                                deleteInventory={deleteInventory}
                                                addNewInventory={addNewInventory}
                                                updateInventory={updateInventory}
                                                inventories={inventories}
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

    return {
        user: user.user,
        inventories: inventory.inventories,
        orders: order.orders,
        orderProps
    }
}

const actionList = { saveUserInfo, fetchInventories, addNewInventory, deleteInventory, updateInventory, fetchOrders, cancelOrder, approveOrder }

export default connect(mapState, actionList)(Main);
