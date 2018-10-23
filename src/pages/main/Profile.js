import React from "react"
import { Form, Input, Icon, Row, Col, Button } from "antd";


const Profile = ({ form, edit, onEditForm, onCancelEdit }) => {
    const { getFieldDecorator } = form

    return (
        <div>
            <div className="heading">
                <h2>Profile</h2>
                This is Profile page
            </div>
            <Form layout="vertical">
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="First Name">
                            { edit ? <Input
                                size="large"
                                prefix={<Icon type="user" />}
                                name="firstName"
                                type="text"
                                placeholder="Your first name"
                            /> : "Gunarso"}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Last Name">
                            {edit ? <Input
                                size="large"
                                prefix={<Icon type="user" />}
                                name="lastName"
                                type="text"
                                placeholder="Your last name"
                            /> : "Winarno"}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Phone Number">
                            {edit ? <Input
                                size="large"
                                prefix={<Icon type="phone" />}
                                name="phone"
                                type="text"
                                placeholder="Your phone number"
                            /> : "+65 73429249"}                            
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Email Address">
                            {edit ? <Input
                                size="large"
                                prefix={<Icon type="mail" />}
                                name="email"
                                type="text"
                                placeholder="Your email address"
                            /> : "gun@mail.com"}                            
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="City">
                            {edit ? <Input
                                size="large"
                                prefix={<Icon type="pushpin" />}
                                name="city"
                                type="text"
                                placeholder="Your current city"
                            /> : "Singapore"}
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Zip Code">
                            {edit ? <Input
                                size="large"
                                prefix={<Icon type="shop" />}
                                name="zip"
                                type="text"
                                placeholder="Your zip code"
                            /> : "76890"}
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={16}>
                        <Form.Item label="Address">
                            {edit ? <Input.TextArea
                                size="large"
                                rows="3"
                                placeholder="Your current address"
                            /> : "Jalan Ikan Daun Blok A #34"}
                        </Form.Item>
                    </Col>
                </Row>
                { edit ? (
                    <div>
                        <Button type="primary" htmlType="submit" size="large"><Icon type="plus" /> Save changes </Button>
                        <Button type="dashed" htmlType="button" size="large" onClick={onCancelEdit}> Cancel </Button>
                    </div>
                ) : <Button type="primary" htmlType="button" size="large" onClick={onEditForm}>
                    <Icon type="edit" />
                    Edit details
                </Button>}
            </Form>
        </div>
    )
}

export default Form.create()(Profile)