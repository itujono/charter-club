import React from "react"
import { Formik } from "formik"
import { Form, Row, Col, Input, Select, Button, Icon } from "antd"
import { inventorySchema } from "../common"
import ExtraFeatures from "./ExtraFeatures";



class NewInventory extends React.Component {

    state = { selected: ["Security System", "Air Conditioning", "Alloy Wheels"], checkAll: false }

    handleCheck = (selected) => {
        this.setState({ selected, checkAll: selected.length === this.props.extras.length })
    }

    handleCheckAll = ({ target }) => {
        this.setState({ selected: target.checked ? this.props.extras : [], checkAll: target.checked })
    }

    render() {

        const { transmission, years, year, bodyType, trans, bodyState, cancelAddNew, addNewInventory, onChangeTransmission, onChangeYear, onChangeBodyType, onToExtraFeatures, extra, extras } = this.props

        const { selected, checkAll } = this.state

        return (
            <Formik
                initialValues={{}}
                validationSchema={inventorySchema}
                onSubmit={(values) => {
                    const data = {
                        title: values.title,
                        make: values.make,
                        model: values.model,
                        exteriorColor: values.exteriorColor ? values.exteriorColor : "-",
                        interiorColor: values.interiorColor ? values.interiorColor : "-",
                        transmission: trans ? trans : "-",
                        bodyType: bodyState ? bodyState : "-",
                        engine: values.engine ? values.engine : "-",
                        kilometers: values.kilometers ? values.kilometers : "-",
                        fuelType: values.fuelType ? values.fuelType : "-",
                        price: values.price ? values.price : "-",
                        extras: selected ? selected : "-",
                        images: ["http://source.unsplash.com/random/"],
                        year: year ? year : "-"
                    }
                    setTimeout(() => {
                        addNewInventory(data)
                        cancelAddNew()
                    }, 2000)
                }}
                render={({ values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, dirty, isSubmitting }) => (
                    <Form layout="vertical" onSubmit={handleSubmit} className={isSubmitting ? "main-form loading" : "main-form"}>
                        { !extra ? <React.Fragment>
                            <Row gutter={24}>
                                <Col span={8}>
                                    <Form.Item 
                                        label="Title" 
                                        hasFeedback
                                        required
                                        help={errors.title} 
                                        validateStatus={errors.title ? "warning" : (isValid ? "success" : "")}
                                    >
                                        <Input size="large" onChange={handleChange} onBlur={handleBlur} value={values.title} type="text" name="title" placeholder="The title of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Make"
                                        hasFeedback 
                                        required
                                        help={errors.make} 
                                        validateStatus={errors.make ? "warning" : (isValid ? "success" : "")}
                                    >
                                        <Input size="large" onChange={handleChange} onBlur={handleBlur} value={values.make} type="text" name="make" placeholder="The make of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Model"
                                        hasFeedback 
                                        required
                                        help={errors.model} 
                                        validateStatus={errors.model ? "warning" : (isValid ? "success" : "")}
                                    >
                                        <Input size="large" onChange={handleChange} onBlur={handleBlur} value={values.model} type="text" name="model" placeholder="The model of the vehicle" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={6}>
                                    <Form.Item label="Exterior Color">
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.exteriorColor} type="text" name="exteriorColor" placeholder="The exterior color of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Interior Color">
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.interiorColor} type="text" name="interiorColor" placeholder="The interior color of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Transmission">
                                        <Select size="large" onBlur={handleBlur} onChange={onChangeTransmission} name="transmission" placeholder="The transmission of the vehicle">
                                            { transmission.map(item => <Select.Option key={item.id} value={item.value}>{item.text}</Select.Option>) }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={6}>
                                    <Form.Item label="Engine">
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.engine} type="text" name="engine" placeholder="The engine of the vehicle" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={8}>
                                    <Form.Item
                                        label="Body Type"
                                        hasFeedback 
                                        required
                                        help={errors.bodyType} 
                                        validateStatus={errors.bodyType ? "warning" : (isValid ? "success" : "")}
                                    >
                                        <Select size="large" onBlur={handleBlur} defaultValue={bodyType[0].value} onChange={onChangeBodyType} name="bodyType" placeholder="The body type of the vehicle">
                                            { bodyType.map(item => <Select.Option key={item.id} value={item.value}>{item.text}</Select.Option>) }
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Kilometers">
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.kilometers} type="text" name="kilometers" placeholder="The current kilometers of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="Year">
                                        <Select size="large" onBlur={handleBlur} onChange={onChangeYear} name="year" placeholder="The year of the vehicle">
                                            { years.map(item => <Select.Option key={item.id} value={item.value}>{item.text}</Select.Option>) }
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={24}>
                                <Col span={8}>
                                    <Form.Item label="Fuel Type">
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.fuelType} type="text" name="fuelType" placeholder="The fuel type of the vehicle" />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        label="Price"
                                        hasFeedback 
                                        required
                                        help={errors.price} 
                                        validateStatus={errors.price ? "warning" : (isValid ? "success" : "")}
                                    >
                                        <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.price} type="number" name="price" placeholder="The price for rent of the vehicle" />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </React.Fragment> :
                        <ExtraFeatures
                            extras={extras}
                            selected={selected}
                            checkAll={checkAll}
                            handleCheck={this.handleCheck}
                            handleCheckAll={this.handleCheckAll}
                        /> }
                        {
                            extra ?
                                <Button
                                    type="primary"
                                    disabled={!dirty || !isValid}
                                    htmlType="submit"
                                    size="large"
                                >
                                    <Icon type="plus" /> Submit
                                </Button> :
                            <React.Fragment>
                                <Button size="large" disabled={!isValid} type="primary" onClick={onToExtraFeatures}>
                                    <Icon type="right" /> Next
                                </Button>
                                <Button size="large" className="link-btn" onClick={cancelAddNew}> Cancel </Button>
                            </React.Fragment>
                        }
                    </Form>
                )}
            />
        )
    }
}

export default NewInventory