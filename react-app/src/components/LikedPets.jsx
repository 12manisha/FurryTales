import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Row, Col, Card, Button } from 'react-bootstrap';

function LikedPets() {

    const navigate = useNavigate();
    const [pets, setPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        const url = 'http://localhost:4000/liked-pets';
        let data = { userId: localStorage.getItem('userId') }
        axios.post(url, data)
            .then((res) => {
                if (res.data.pets) {
                    setPets(res.data.pets);
                }
            })
            .catch((err) => {
                alert('Server Err.')
            })
    }, [])

    useEffect(() => {
        applyFilters();
    }, [search, selectedCategory, pets]);

    const handleRemoveFromWishlist = (petId) => {
        const url = 'http://localhost:4000/remove-from-wishlist';
        const data = { userId: localStorage.getItem('userId'), petId };
        axios.post(url, data)
            .then((res) => {
                // Update the pets list after removing the pet from the wishlist
                const updatedPets = pets.filter(pet => pet._id !== petId);
                setPets(updatedPets);
            })
            .catch((err) => {
                console.error('Error removing pet from wishlist:', err);
                alert('Server error');
            });
    };

    const handlePet = (id) => {
        navigate('/pet/' + id);
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleCategory = (value) => {
        setSelectedCategory(value);
    };

    const applyFilters = () => {
        let filteredPets = pets || [];

        if (search || selectedCategory) {
            const searchTerm = search.toLowerCase();
            filteredPets = pets.filter((item) =>
                item.category.toLowerCase().includes(searchTerm)
            );

            if (selectedCategory) {
                filteredPets = filteredPets.filter(
                    (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
                );
            }
        }

        setFilteredPets(filteredPets);
    };

    return (
        <div>
            <Header />

            <h1 style={{color: '#34495E' , textAlign:'center', margin:'1rem'}}>Wishlist </h1>
            <Row>
                {filteredPets.length > 0 ?
                    (filteredPets.map((item, index) => (
                        <Col md={4} key={index}>
                            <Card style={{ height: '500px' }}>
                                <Card.Img width="300px" height="200px" src={`http://localhost:4000/${item.pimage}`} alt="" />
                                <Card.Body>
  <Card.Title>{item.pname} | {item.category}</Card.Title>
  <Card.Text className="text-danger">{item.price}</Card.Text>
  <Card.Text className="text-success">
    {item.pdesc.length > 100 ? item.pdesc.slice(0, 100) + "..." : item.pdesc}
  </Card.Text>
  <button className="btn btn-danger"  onClick={() => handleRemoveFromWishlist(item._id)}>Remove</button>
</Card.Body>
                            </Card>
                        </Col>
                    ))) :
                    (<Col md={12}><p>No matching pets found.</p></Col>)
                }
            </Row>

        </div>
    );
}

export default LikedPets;
