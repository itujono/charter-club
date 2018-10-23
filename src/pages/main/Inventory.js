import React from "react"
import { List } from "antd";
import InventoryItem from "../../components/InventoryItem";


class Inventory extends React.Component {
    render() {
        const { inventories } = this.props
    
        return (
            <div>
                <div className="heading">
                    <h2>Inventory</h2>
                    This is Inventory page
                </div>
                <List
                    itemLayout="horizontal"
                    dataSource={inventories}
                    renderItem={item => <InventoryItem key={item.id} item={item} />}
                />
            </div>
        )
    }
}

export default Inventory