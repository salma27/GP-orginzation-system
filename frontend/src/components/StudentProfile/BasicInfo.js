import React from "react";
import "./BasicInfo.css";
import { Form, Col } from "react-bootstrap";

function BasicInfo(props) {
    return (
        <>
            <Form className="w-100">
                <Form.Row className="mb-2">
                    <Col md={4} lg={4} sm={2}>
                        <Form.Label>Name </Form.Label>
                    </Col>
                    <Col md={7} lg={8} sm={8}>
                        <Form.Control value={props.info.name} disabled />
                    </Col>
                </Form.Row>
                <Form.Row className="mb-2">
                    <Col md={4} lg={4} sm={2}>
                        <Form.Label>ID </Form.Label>
                    </Col>
                    <Col md={7} lg={8} sm={8}>
                        <Form.Control value={props.info.ecomId} disabled />
                    </Col>
                </Form.Row>

                <Form.Row className="mb-2">
                    <Col md={4} lg={4} sm={2}>
                        <Form.Label>Department </Form.Label>
                    </Col>
                    <Col md={7} lg={8} sm={8}>
                        <Form.Control
                            value={props.info.departmentId}
                            disabled
                        />
                    </Col>
                </Form.Row>
            </Form>
        </>
    );
}

export default BasicInfo;
