import React from "react";
import { Switch, Route, Redirect, BrowserRouter, NavLink } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Divider } from "antd";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Inventory from "./Inventory";
import { connect } from "react-redux";

const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

class Main extends React.Component {
	state = { collapsed: false, edit: false }

    onCollapse = (collapsed) => this.setState({ collapsed })
    
    handleEditForm = () => this.setState({ edit: true })

    handleCancelEdit = () => this.setState({ edit: false })

    render() {

        const { edit } = this.state

        return (
            <div className="main-app">
                <BrowserRouter>
                    <Layout style={{ minHeight: "100vh" }}>
                        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} >
                            <div className="logo" />
                            <Menu defaultSelectedKeys={["1"]} mode="inline" >
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
                            <Header style={{ background: "#fff", padding: 0 }} />
                            <Content style={{ margin: "0 3em" }}>
                                <Breadcrumb style={{ margin: "3em 0" }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{ padding: '4em', background: "#fff", minHeight: 360 }} >
									<Switch>
										<Redirect exact from="/" to="/dashboard" />
										<Route path="/dashboard" component={Dashboard} />
										<Route path="/inventory" component={Inventory} />
										<Route path="/profile" render={() => <Profile onCancelEdit={this.handleCancelEdit} onEditForm={this.handleEditForm} edit={edit} />} />
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

const mapState = ({ user }) => ({
    // hello: user.hello
});

export default connect(mapState)(Main);
