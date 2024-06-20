import React from 'react'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Navigation() {
    const [data, setData] = useState([]);
    const baseURL = "https://fakestoreapi.com/products/categories";

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
        
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
            <Container>
                <Navbar.Brand><Link to="/" style={{textDecoration: 'none'}}>FashiON</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" style={{textDecoration: 'none'}}>Home</Link></Nav.Link>
                        <Nav.Link><Link to="/products" style={{textDecoration: 'none'}}>All Products</Link></Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            {
                                data.map((item) =>
                                    <NavDropdown.Item><Link to={`/products/${item}`} style={{textDecoration: 'none'}}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link></NavDropdown.Item>
                                )
                            }
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation