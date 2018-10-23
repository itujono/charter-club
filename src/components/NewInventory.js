import React from "react"
import { Formik } from "formik"
import { Form, Row, Col, Input, Select, Button, Icon } from "antd"



const NewInventory = ({ transmission, years, year, bodyType, trans, bodyState, cancelAddNew, addNewInventory, onChangeTransmission, onChangeYear, onChangeBodyType }) => (
    <Formik
        initialValues={{ transmission: transmission[0].value }}
        onSubmit={(values) => {
            const data = {
                title: values.title,
                make: values.make,
                model: values.model,
                exteriorColor: values.exteriorColor,
                interiorColor: values.interiorColor,
                transmission: trans,
                bodyType: bodyState,
                engine: values.engine,
                kilometers: values.kilometers,
                fuelType: values.fuelType,
                price: values.price,
                year
            }
            addNewInventory(data)
            cancelAddNew()
            console.log(data)
        }}
        render={({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form layout="vertical" onSubmit={handleSubmit} className="main-form">
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="Title">
                            <Input size="large" onChange={handleChange} onBlur={handleBlur} value={values.title} type="text" name="title" placeholder="The title of the vehicle" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Make">
                            <Input size="large" onChange={handleChange} onBlur={handleBlur} value={values.make} type="text" name="make" placeholder="The make of the vehicle" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Model">
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
                        <Form.Item label="Body Type">
                            <Select size="large" onBlur={handleBlur} onChange={onChangeBodyType} name="bodyType" placeholder="The body type of the vehicle">
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
                        <Form.Item label="Price">
                            <Input size="large" onBlur={handleBlur} onChange={handleChange} value={values.price} type="number" name="price" placeholder="The price for rent of the vehicle" />
                        </Form.Item>
                    </Col>
                </Row>
                <Button type="primary" htmlType="submit" size="large"> <Icon type="plus" /> Submit </Button> &nbsp;
                <Button size="large" onClick={cancelAddNew}> Cancel </Button>
            </Form>
        )}
    />
)

export default NewInventory