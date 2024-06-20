import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

function CategorizedProduct() {
    
    const { category } = useParams();
    const [data, setData] = useState([]);
    const baseURL = `https://fakestoreapi.com/products/category/${category}`; 
    
    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [category]);

  return (
    <Container>
            <Row md={4}>
                {
                    data.map((item) =>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.image} style={{ height: '350px', objectFit: 'cover' }}/>
                                    <Card.Body>
                                        <Card.Title>{item.title.length > 50 ? `${item.title.substring(0, 50)}...` : item.title}</Card.Title>
                                        <Card.Text>{item.description.length > 100 ? `${item.description.substring(0, 100)}...` : item.description}</Card.Text>
                                        <Link to={`/item/${item.id}`}><Button class="btn1" variant="primary">View details</Button></Link>
                                    </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
  )
}

export default CategorizedProduct