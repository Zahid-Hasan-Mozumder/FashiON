import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Jewelery() {

    const [data, setData] = useState([]);
    const baseURL = "https://fakestoreapi.com/products/category/jewelery";

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

  return (
    <Container>
            <Row md={4}>
                {
                    data.map((item) =>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.description}</Card.Text>
                                    <Link to={`/item/${item.id}`}><Button class="btn1" variant="primary">${item.price}</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
  )
}

export default Jewelery