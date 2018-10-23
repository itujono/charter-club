import React from "react"
import { List, Avatar, Button, Icon, Popconfirm, Row, Col, Divider } from "antd"
import EditInventory from "../components/EditInventory";



const Description = ({ title, value }) => (
    <span>
        <strong>{title}</strong>: {value} &bull; &nbsp;
    </span>
)

const InventoryItem = ({ item, edit, expand, transState, yearState, bodyState, onChangeTransmission, onEditForm, onChangeBodyType, onChangeYear, toggleExpand, properties, onCancelEdit, activeItem, onDeleteInventory }) => {

    const currentExpanded = expand && activeItem === item.id
    const currentEdited = edit && activeItem === item.id

    return (
        <List.Item
            actions={[
                <Button type="dashed" onClick={() => toggleExpand(item.id)}>
                    <Icon type={currentExpanded || currentEdited ? "up" : "down"} /> 
                    {currentExpanded || currentEdited ? "See less" : "See more"}
                </Button>,
                <Popconfirm title="Are you sure want to edit this item?" onConfirm={() => onEditForm(item.id)}>
                    <Button type="dashed">Edit...</Button>
                </Popconfirm>,
                <Popconfirm title="Are you sure want to delete this item?" onConfirm={() => onDeleteInventory(item.id)}>
                    <Button type="danger">Delete...</Button>
                </Popconfirm>
            ]}>

            { currentEdited ? <EditInventory
                properties={properties}
                onCancelEdit={onCancelEdit}
                onChangeBodyType={onChangeBodyType}
                onChangeYear={onChangeYear}
                transState={transState}
                yearState={yearState}
                bodyState={bodyState}
                item={item}
                onChangeTransmission={onChangeTransmission}
            /> : <List.Item.Meta
                    avatar={<Avatar src="http://source.unsplash.com/random/" />}
                    title={item.title}
                    description={currentExpanded ? (
                        <div className="inventory-detail">
                            <Row gutter={32}>
                                <Col span={14}>
                                    <Row gutter={16}>
                                        <Col span={8}>
                                            <List itemLayout="horizontal">
                                                <List.Item>
                                                    <List.Item.Meta title="Engine" description={item.engine} />
                                                </List.Item>
                                                <List.Item>
                                                    <List.Item.Meta title="Year" description={item.year} />
                                                </List.Item>
                                                <List.Item>
                                                    <List.Item.Meta title="Kilometers" description={item.kilometers} />
                                                </List.Item>
                                            </List>
                                        </Col>
                                        <Col span={8}>
                                            <List itemLayout="horizontal">
                                                <List.Item>
                                                    <List.Item.Meta title="Body type" description={item.bodyType} />
                                                </List.Item>
                                                <List.Item>
                                                    <List.Item.Meta title="Fuel" description={item.fuelType} />
                                                </List.Item>
                                                <List.Item>
                                                    <List.Item.Meta title="Price" description={`$${item.price} / day`} />
                                                </List.Item>
                                            </List>
                                        </Col>
                                        <Col span={8}>
                                            <List itemLayout="horizontal">
                                                <List.Item>
                                                    <List.Item.Meta title="Exterior" description={item.exteriorColor} />
                                                </List.Item>
                                                <List.Item>
                                                    <List.Item.Meta title="Interior" description={item.interiorColor} />
                                                </List.Item>
                                            </List>
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col span={24}>
                                            <h4 className="extras">Extra Features</h4>
                                            <List
                                                grid={{ gutter: 16, md: 3, xs: 2 }}
                                                dataSource={item.extras}
                                                renderItem={ext => (
                                                    <List.Item><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> {ext} </List.Item>
                                                )}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={8}>
                                    <img src="http://source.unsplash.com/random/" width="250" />
                                </Col>
                            </Row>
                        </div>
                    ) : [
                        <Description key="engine" title="Engine" value={item.engine} />,
                        <Description key="year" title="Year" value={item.year} />,
                        <Description key="kilometers" title="Kilometers" value={item.kilometers} />,
                        <Description key="price" title="Price" value={`$${item.price} per day`} />
                    ]}
                />}

        </List.Item>
    )
}

export default InventoryItem