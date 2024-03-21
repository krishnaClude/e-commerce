import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import style from './Aboutus.module.scss'

const Aboutus = () => {
    return (
        <Container fluid="md" className={`${style.container}`}>
            <Row className="g-4">
                <Col sm={6} className={`${style['about-left-container']}`}>
                    <p className={`${style.abtTitle}`}>How it started</p>
                    <h3 className={`${style.abtheadline}`}>
                        Remember to customize the content, styling, and
                        structure Remember to customize the content, styling,
                        and structure
                    </h3>
                    <p className={`${style.abtcotent}`}>
                        Certainly! Creating an “About Us” page is a great way to
                        introduce your team, company, or organization to your
                        website visitors. Here are some steps to help you get
                        started This will create a gutter of 2px between
                        columns. Adjust the className value to change the gutter
                        size as needed. Remember, the gutter prop is not
                        explicitly mentioned in the current page, but the
                        concept is similar to the use of spacing utilities in
                        Bootstrap. For more complex layouts, consider custom CSS
                        or utility classes provided by Bootstrap.
                    </p>
                </Col>
                <Col sm={6} className={`${style['about-right-container']}`}>
                    <Row>
                        <Col sm={12}>
                            <Image
                                src="images/slider-1.jpeg"
                                rounded
                                className={`${style.abtImage}`}
                            />
                        </Col>
                        <Col sm={12}>
                            <Row
                                className={`${style['abt-counter-container']} justify-content-md-center`}
                            >
                                <Col className={`${style.abtCounter}`} sm={5}>
                                    {' '}
                                    <h3> 3.5</h3> <p> Years experience</p>
                                </Col>
                                <Col className={`${style.abtCounter}`} sm={5}>
                                    {' '}
                                    <h3> 3.5</h3> <p> Years experience</p>
                                </Col>
                                <Col className={`${style.abtCounter}`} sm={5}>
                                    {' '}
                                    <h3> 3.5</h3> <p> Years experience</p>
                                </Col>
                                <Col className={`${style.abtCounter}`} sm={5}>
                                    {' '}
                                    <h3> 3.5</h3> <p> Years experience</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Aboutus
