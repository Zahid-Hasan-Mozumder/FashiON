import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function SingleProduct() {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const baseURL = `https://fakestoreapi.com/products/${id}`;

    useEffect(() => {
        axios.get(baseURL)
            .then(response => {
                console.log(response);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    const handleRemoveFromCart = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }
    };

    const containerStyle = {
        marginTop: '20px'
    };

    const cardStyle = {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.2s'
    };

    const imgStyle = {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px'
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px'
    };

    const textStyle = {
        marginBottom: '10px'
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px'
    };

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px'
    };

    return (
        <Container style={containerStyle}>
            <Row>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src={data.image} alt={data.title} style={imgStyle} />
                        <Card.Body>
                            <Card.Title style={titleStyle}>{data.title}</Card.Title>
                            <Card.Text style={textStyle}>{data.description}</Card.Text>
                            <Card.Text style={textStyle}>Category: {data.category}</Card.Text>
                            <Card.Text style={textStyle}>Price: ${data.price}</Card.Text>
                            <div style={buttonContainerStyle}>
                                <div style={buttonStyle}>
                                    <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
                                    {cartCount > 0 && (
                                        <>
                                            <Button variant="danger" onClick={handleRemoveFromCart}>Remove</Button>
                                            <span>({cartCount})</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleProduct