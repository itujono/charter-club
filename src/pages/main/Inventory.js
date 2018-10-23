import React from "react"
import { List, Row, Col, Button, Icon } from "antd"
import { properties } from "../../common/dummy"
import NewInventory from "../../components/NewInventory"
import InventoryItem from "../../components/InventoryItem"



const { years, transmission } = properties

class Inventory extends React.Component {
    state = { expand: false, activeItem: null, addNew: false }

    handleToggleExpand = (activeItem) => this.setState(prevState => ({ expand: !prevState.expand, activeItem }))
    handleToggleAddNew = () => this.setState(prevState => ({ addNew: !prevState.addNew }))
    handleCancelAddNew = () => this.setState({ addNew: false })
    onChangeTransimission = (transmission) => this.setState({ transmission })
    onChangeYear = (year) => this.setState({ year })

    render() {
        const { inventories } = this.props
        const { expand, activeItem, addNew } = this.state

        return (
            <div>
                <Row type="flex" justify="space-between">
                    <Col span={8}>
                        <div className="heading">
                            <h2>Inventory</h2>
                            This is Inventory page
                        </div>
                    </Col>
                    <Col span={8} style={{ textAlign: 'right' }}>
                        <Button type={addNew ? null : "primary"} size="large" htmlType="button" onClick={this.handleToggleAddNew}>
                            <Icon type={addNew ? "stop" : "plus"} />
                            { addNew ? "Cancel" : "Add new inventory"}
                        </Button>
                    </Col>
                </Row>
                { addNew ? <NewInventory
                    years={years}
                    transmission={transmission}
                    cancelAddNew={this.handleCancelAddNew}
                    onChangeTransmission={this.onChangeTransimission}
                    onChangeYear={this.onChangeYear}
                /> : <List
                    className="inventory-list"
                    itemLayout="horizontal"
                    dataSource={inventories}
                    renderItem={item => <InventoryItem expand={expand} activeItem={activeItem} toggleExpand={this.handleToggleExpand} key={item.id} item={item} />}
                />}
            </div>
        )
    }
}

export default Inventory