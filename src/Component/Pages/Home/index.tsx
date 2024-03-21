import React from 'react'
import style from './Home.module.scss'
import { Col, Container, Row } from 'react-bootstrap'
import ImageCarousel from '../../General_components/Carousel/ImageCarousel'
const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ImageCarousel />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
