import React from "react"
import { List, Row, Col, Button, Icon, message, Input, AutoComplete } from "antd"
import { properties } from "../../common/dummy"
import NewInventory from "../../components/NewInventory"
import InventoryItem from "../../components/InventoryItem"



const { years, transmission, bodyType } = properties

class Inventory extends React.Component {
    state = {
        expand: false,
        activeItem: null,
        edit: false,
        addNew: false,
        extra: false,
        year: "",
        transmission: "",
        bodyType: ""
    };

    handleToggleExpand = activeItem => {
        if (this.state.edit) {
            this.setState(prevState => ({
                expand: !prevState.expand,
                activeItem,
                edit: false
            }));
        } else if (this.state.edit && this.state.expand) {
            this.setState({ expand: false, edit: false });
        }
        this.setState(prevState => ({ expand: !prevState.expand, activeItem }));
    };

    handleToExtraFeatures = () => this.setState({ extra: true });

    handleExpand = activeItem => this.setState({ expand: true, activeItem });

    handleToggleAddNew = () =>
        this.setState(prevState => ({
            addNew: !prevState.addNew,
            extra: false
        }));
    handleCancelAddNew = () => this.setState({ addNew: false, extra: false });
    handleCancelEdit = () => {
        this.setState({ edit: false });
        if (this.state.expand) {
            this.setState({ edit: false, expand: false });
        }
    };
    handleEditForm = activeItem =>
        this.setState(prevState => ({ edit: !prevState.edit, activeItem }));
    onChangeTransimission = transmission => this.setState({ transmission });
    onChangeYear = year => this.setState({ year });
    onChangeBodyType = bodyType => this.setState({ bodyType });
    handleDeleteInventory = inventoryId => {
        this.props.deleteInventory(inventoryId);
        message.success("The inventory item has been deleted");
    };
    handleUpdateInventory = (inventoryId, newData) => {
        this.props.updateInventory(inventoryId, newData);
        message.success("The inventory has been updated");
    };

    handleSearch = value => {
        console.log(value);
    };

    handleSelectSearch = value => {
        this.setState({ expand: true, activeItem: value });
        value = "";
    };

    render() {
        const { inventories, addNewInventory, titles, extras } = this.props;
        const { expand, activeItem, addNew, edit, extra } = this.state;

        return (
            <div>
                <Row type="flex" justify="end" className="search-container">
                    <Col>
                        <AutoComplete
                            dataSource={titles}
                            style={{ width: 300 }}
                            onSelect={this.handleSelectSearch}
                            onSearch={this.handleSearch}
                            placeholder="Find you inventory..."
                            filterOption={(input, option) => {
                                return (
                                    option.props.children
                                        .toUpperCase()
                                        .indexOf(input.toUpperCase()) !== -1
                                );
                            }}
                        >
                            <Input
                                size="large"
                                suffix={<Icon type="search" />}
                            />
                        </AutoComplete>
                    </Col>
                </Row>
                <Row type="flex" justify="space-between" align="middle">
                    <Col span={8}>
                        <div className="heading">
                            <h2>
                                {addNew
                                    ? "Add new inventory"
                                    : edit
                                        ? "Edit inventory"
                                        : "Inventory"}
                            </h2>
                            {addNew
                                ? "Please enter the necessary informations about your new inventory"
                                : edit
                                    ? "Update your inventory details"
                                    : "This is Inventory page"}
                        </div>
                    </Col>
                    <Col span={8} style={{ textAlign: "right" }}>
                        <Button
                            type={addNew ? null : "primary"}
                            size="large"
                            htmlType="button"
                            onClick={this.handleToggleAddNew}
                        >
                            <Icon type={addNew ? "stop" : "plus"} />
                            {addNew ? "Cancel" : "Add new inventory"}
                        </Button>
                    </Col>
                </Row>
                {addNew ? (
                    <NewInventory
                        years={years}
                        extras={extras}
                        bodyType={bodyType}
                        bodyState={this.state.bodyType}
                        year={this.state.year}
                        trans={this.state.transmission}
                        transmission={transmission}
                        cancelAddNew={this.handleCancelAddNew}
                        onChangeTransmission={this.onChangeTransimission}
                        onChangeYear={this.onChangeYear}
                        onChangeBodyType={this.onChangeBodyType}
                        addNewInventory={addNewInventory}
                        onToExtraFeatures={this.handleToExtraFeatures}
                        extra={extra}
                    />
                ) : (
                    <List
                        className="inventory-list"
                        itemLayout="horizontal"
                        dataSource={inventories}
                        renderItem={item => (
                            <InventoryItem
                                onChangeTransmission={
                                    this.onChangeTransimission
                                }
                                onChangeYear={this.onChangeYear}
                                onChangeBodyType={this.onChangeBodyType}
                                onDeleteInventory={this.handleDeleteInventory}
                                onEditForm={this.handleEditForm}
                                onCancelEdit={this.handleCancelEdit}
                                onUpdateInventory={this.handleUpdateInventory}
                                bodyState={this.state.bodyType}
                                yearState={this.state.year}
                                transState={this.state.transmission}
                                expand={expand}
                                edit={edit}
                                properties={properties}
                                activeItem={activeItem}
                                toggleExpand={this.handleToggleExpand}
                                key={item.id}
                                item={item}
                            />
                        )}
                    />
                )}
            </div>
        );
    }
}

export default Inventory