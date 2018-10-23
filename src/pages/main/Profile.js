import React from "react"
import { Form, Input, Icon, Row, Col, Button, message } from "antd"
import { Formik } from "formik";


const Profile = ({ user, edit, onEditForm, onCancelEdit, saveUserInfo }) => {

    return (
        <div style={{ marginTop: '-20px' }}>
            <div className="heading">
                <h2>Profile</h2>
                This is Profile page
            </div>
            <Formik
                initialValues={user}
                onSubmit={(values, actions) => {
                    saveUserInfo(values)
                    setTimeout(() => {
                        actions.setSubmitting(false)
                        onCancelEdit()
                        message.success("Your Profile has been updated")
                    }, 2000)
                }}
                render={({ values, handleChange, handleBlur, handleSubmit, dirty, isSubmitting }) => (
                    <Form layout="vertical" className={isSubmitting ? "main-form loading" : "main-form"} onSubmit={handleSubmit}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Form.Item label="First Name">
                                    { edit ? <Input
                                        size="large"
                                        prefix={<Icon type="user" />}
                                        name="firstName"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.firstName}
                                        placeholder="Your first name"
                                    /> : user && user.firstName}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Last Name">
                                    {edit ? <Input
                                        size="large"
                                        prefix={<Icon type="user" />}
                                        name="lastName"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lastName}
                                        placeholder="Your last name"
                                    /> : user && user.lastName}
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        placeholder="Your phone number"
                                    /> : user && user.phone}                            
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Email Address">
                                    {edit ? <Input
                                        size="large"
                                        prefix={<Icon type="mail" />}
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Your email address"
                                    /> : user && user.email}                            
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
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.city}
                                        placeholder="Your current city"
                                    /> : user && user.city}
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="Zip Code">
                                    {edit ? <Input
                                        size="large"
                                        prefix={<Icon type="shop" />}
                                        name="zip"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.zip}
                                        placeholder="Your zip code"
                                    /> : user && user.zip}
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={16}>
                                <Form.Item label="Address">
                                    {edit ? <Input.TextArea
                                        size="large"
                                        name="address"
                                        rows="3"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.address}
                                        placeholder="Your current address"
                                    /> : user && user.address}
                                </Form.Item>
                            </Col>
                        </Row>
                        { edit ? (
                            <div>
                                <Button type="primary" disabled={!dirty} htmlType="submit" size="large"><Icon type="plus" /> Save changes </Button> &nbsp;
                                <Button type="dashed" htmlType="button" size="large" onClick={onCancelEdit}> Cancel </Button>
                            </div>
                        ) : <Button type="primary" htmlType="button" size="large" onClick={onEditForm}>
                            <Icon type="edit" />
                            Edit details
                        </Button>}
                    </Form>
                )}
            />
        </div>
    )
}

export default Profile