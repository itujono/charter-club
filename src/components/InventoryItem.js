import React from "react"
import { List, Avatar, Button, Icon, Popconfirm, Row, Col, Divider, Carousel, Popover } from "antd"
import EditInventory from "../components/EditInventory";



const Description = ({ title, value }) => (
    <span>
        <strong>{title}</strong>: {value} &bull; &nbsp;
    </span>
)

const InventoryItem = ({ item, edit, expand, transState, yearState, bodyState, onChangeTransmission, onUpdateInventory, onEditForm, onChangeBodyType, onChangeYear, toggleExpand, properties, onCancelEdit, activeItem, onDeleteInventory }) => {

    const currentlyExpanding = expand && activeItem === item.id
    const currentlyEditing = edit && activeItem === item.id
    const specs = [
        { title: "Title", description: item.title },
        { title: "Make", description: item.make },
        { title: "Model", description: item.model },
        { title: "Engine", description: item.engine },
        { title: "Year", description: item.year },
        { title: "Kilometers", description: item.kilometers },
        { title: "Transmission", description: item.transmission },
        { title: "Body type", description: item.bodyType },
        { title: "Fuel", description: item.fuelType },
        { title: "Price", description: item.price },
        { title: "Exterior color", description: item.exteriorColor },
        { title: "Interior color", description: item.interiorColor }
    ]

    return (
        <List.Item
            className={currentlyEditing || currentlyExpanding ? "expanding" : ""}
            actions={[
                <Button shape="circle" icon={currentlyExpanding || currentlyEditing ? "up" : "down"} className="link-btn" onClick={() => toggleExpand(item.id)} />,
                <Popconfirm title="Are you sure want to edit this item?" onConfirm={() => onEditForm(item.id)}>
                    <Button shape="circle" icon="edit" className="link-btn" disabled={currentlyEditing} />
                </Popconfirm>,
                <Popconfirm title="Are you sure want to delete this item?" onConfirm={() => onDeleteInventory(item.id)}>
                    <Button type="danger">Delete...</Button>
                </Popconfirm>
            ]}>

            { currentlyEditing ? (
                <EditInventory
                    properties={properties}
                    onCancelEdit={onCancelEdit}
                    onChangeBodyType={onChangeBodyType}
                    onChangeYear={onChangeYear}
                    onUpdateInventory={onUpdateInventory}
                    transState={transState}
                    yearState={yearState}
                    bodyState={bodyState}
                    item={item}
                    onChangeTransmission={onChangeTransmission}
                /> ) : <List.Item.Meta
                        avatar={<Avatar src={item.images[0]} />}
                        title={item.title}
                        description={currentlyExpanding ? (
                        <div className="inventory-detail">
                            <Row gutter={32}>
                                <Col lg={14} xs={20}>
                                    <Row gutter={16}>
                                        <Col>
                                            <h4 className="extras">Specifications</h4>
                                            <List
                                                grid={{ gutter: 16, md: 3, xs: 2 }}
                                                dataSource={specs}
                                                renderItem={spec => {
                                                    return spec.title === 'Title' ? (
                                                        <List.Item>
                                                            <Popover content={spec.description}>
                                                                <List.Item.Meta title={spec.title} description={spec.description} />
                                                            </Popover>
                                                        </List.Item> 
                                                    ) : (
                                                        <List.Item>
                                                            <List.Item.Meta title={spec.title} description={spec.description} />
                                                        </List.Item>
                                                    )
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                    <Divider />
                                    <Row>
                                        <Col>
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
                                <Col lg={8} xs={20}>
                                    { item.images.length > 1 ? (
                                        <Carousel autoplay>
                                            { item.images.map(img => <img src={img} width="100%" height="100%" />) }
                                        </Carousel>
                                    ) : (
                                        <div className="image-wrapper">
                                            <img src={item.images[0]} width="100%" height="100%" />
                                        </div>
                                    )}
                                </Col>
                            </Row>
                        </div>
                    ) : [
                        <Description key="engine" title="Engine" value={item.engine} />,
                        <Description key="year" title="Year" value={item.year} />,
                        <Description key="kilometers" title="Kilometers" value={item.kilometers} />,
                        <Description key="price" title="Price" value={`$${item.price} per day`} />
                    ]}
                />
            }

        </List.Item>
    )
}

export default InventoryItem