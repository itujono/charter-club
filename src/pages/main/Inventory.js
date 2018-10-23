import React from "react"
import { List } from "antd";
import InventoryItem from "../../components/InventoryItem";


class Inventory extends React.Component {
    state = { expand: false, activeItem: null }

    handleToggleExpand = (activeItem) => this.setState(prevState => ({ expand: !prevState.expand, activeItem }))

    render() {
        const { inventories } = this.props
        const { expand, activeItem } = this.state

        return (
            <div>
                <div className="heading">
                    <h2>Inventory</h2>
                    This is Inventory page
                </div>
                <List
                    className="inventory-list"
                    itemLayout="horizontal"
                    dataSource={inventories}
                    renderItem={item => <InventoryItem expand={expand} activeItem={activeItem} toggleExpand={this.handleToggleExpand} key={item.id} item={item} />}
                />
            </div>
        )
    }
}

export default Inventory