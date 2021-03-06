import React from "react"
import { Formik, Field } from "formik"
import { Form, Row, Col, Input, Select, Button, Icon, InputNumber } from "antd"




const onChange = (value) => {
    console.log(value)
}

const EditInventory = ({ properties: { transmission, years, bodyType }, transState, yearState, bodyState, item, onCancelEdit, onChangeTransmission, onChangeYear, onChangeBodyType, onUpdateInventory }) => {

    const initialData = {
        ...item,
        transmission: item.transmission,
        bodyType: item.bodyType,
        year: item.year
    }

    return (
        <Formik
            initialValues={initialData}
            onSubmit={(values, actions) => {
                const newData = {
                    ...values,
                    transmission: transState ? transState : item.transmission,
                    bodyType: bodyState ? bodyState : item.bodyType,
                    year: yearState ? yearState : item.year
                }

                setTimeout(() => {
                    actions.setSubmitting(false)
                    onUpdateInventory(item.id, newData)
                    onCancelEdit()
                }, 2000)
            }}
            render={({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form layout="vertical" onSubmit={handleSubmit} className={`main-form ${isSubmitting ? 'loading' : ''}`}>
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
                                <Select size="large" defaultValue={item.transmission} onBlur={handleBlur} onChange={onChangeTransmission} name="transmission" placeholder="The transmission of the vehicle">
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
                                <Select size="large" defaultValue={item.bodyType} onBlur={handleBlur} onChange={onChangeBodyType} name="bodyType" placeholder="The body type of the vehicle">
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
                                <Select size="large" defaultValue={item.year} onBlur={handleBlur} onChange={onChangeYear} name="year" placeholder="The year of the vehicle">
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
                                <InputNumber
                                    size="large"
                                    defaultValue={item.price}
                                    formatter={values => `$ ${values}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={values => values.replace(/\$\s?|(,*)/g, '')}
                                    onChange={onChange}
                                    name="price"
                                    placeholder="The price for rent of the vehicle"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit" size="large"><Icon type="plus" /> Save changes </Button> &nbsp;
                    <Button size="large" htmlType="button" className="link-btn" onClick={onCancelEdit}> Cancel </Button>
                </Form>
            )}
        />
    )
}

export default EditInventory