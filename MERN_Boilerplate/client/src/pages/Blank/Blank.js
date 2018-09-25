import React, { Component } from "react";
import { Col, Grid, Row } from "react-bootstrap";

class Blank extends Component {
    state = {
        
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <code> {'<Col xs={12} md={8} />'};</code>
                        <h1>Import Tweets</h1>
                    </Col>
                    <Col xs={6} md={4}>
                        <code>{'<Col xs={6} md={4} />'}</code>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Blank;