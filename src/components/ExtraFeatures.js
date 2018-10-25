import React from "react"
import { Checkbox, Row, Col } from "antd"
import CheckboxGroup from "antd/lib/checkbox/Group";



class ExtraFeatures extends React.Component {

    render() {
        const { extras, checkAll, selected, handleCheckAll, handleCheck } = this.props

        return (
            <Row className="extra-features" type="flex" justify="center" align="middle">
                <Col span={12}>
                    <div className="heading">
                        <h4>Extra Features</h4>
                        Now let's select the extra features your inventory might have
                    </div>
                    <Checkbox checked={checkAll} onChange={handleCheckAll}>
                        Check all
                    </Checkbox>
                    <CheckboxGroup onChange={handleCheck} options={extras} value={selected} />
                </Col>
            </Row>
        )
    }
}

export default ExtraFeatures