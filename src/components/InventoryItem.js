import React from "react"
import { List, Avatar, Button, Icon } from "antd";



const Description = ({ title, value }) => (
    <span>
        <strong>{title}</strong>: {value} &bull; &nbsp;
    </span>
)

const InventoryItem = ({ item }) => {


    return (
        <List.Item actions={[<Button type="dashed"><Icon type="down" /> See more</Button>, <Button type="dashed">Edit</Button>]}>
            <List.Item.Meta
                avatar={<Avatar src="http://source.unsplash.com/random/" />}
                title={item.title}
                description={[
                    <Description title="Engine" value={item.engine} />,
                    <Description title="Year" value={item.year} />,
                    <Description title="Kilometers" value={item.kilometers} />,
                    <Description title="Price" value={`$${item.price} per day`} />
                ]}
            />
        </List.Item>
    )
}

export default InventoryItem