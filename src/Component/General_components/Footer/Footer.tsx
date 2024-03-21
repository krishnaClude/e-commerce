import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <Container
                fluid
                className={`bg-dark text-white py-3 ${style.footer}`}
            >
                <Row>
                    <Col md={4}>
                        <p>About Us</p>
                    </Col>
                    <Col md={4}>
                        <p>Contact</p>
                    </Col>
                    <Col md={4}>
                        <p>Follow Us</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
