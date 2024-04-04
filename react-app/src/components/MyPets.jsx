import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Row, Col, Card, Button } from 'react-bootstrap';

function MyPets() {
    const [pets, setPets] = useState([]);
    const [filteredPets, setFilteredPets] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);  

    useEffect(() => {
        applyFilters();
    }, [search, selectedCategory, pets]);  

    const fetchData = () => {
        const url = 'http://localhost:4000/my-pets';
        let data = { userId: localStorage.getItem('userId') };
        axios.post(url, data)
            .then((res) => {
                console.log("Response from server:", res.data);
                if (res.data.message === 'success' && res.data.pets) {
                    console.log("Pets data received:", res.data.pets);
                    setPets(res.data.pets);
                }
            })
            .catch((err) => {
                console.error('Error fetching pets:', err);
                alert('Server Err.');
            });
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

    const removePet = (petId) => {
        const url = 'http://localhost:4000/remove-pet';
        const data = { petId: petId };
        axios.post(url, data)
            .then((res) => {
                console.log("Response from server:", res.data);
                if (res.data.message === 'Pet removed successfully.') {
                    fetchData();
                }
            })
            .catch((err) => {
                console.error('Error removing pet:', err);
                alert('Server Err.');
            });
    };

    return (
        <div>
            <Header />

            <h2 style={{color:'#34495E'}}>My Pets</h2>
            <Row>
                {filteredPets.length > 0 ?
                    (filteredPets.map((item, index) => (
                        <Col md={4} key={index}>
                            <Card style={{height:'500px'}}>
                                <Card.Img variant="top" src={`http://localhost:4000/${item.pimage}`} alt="" />
                                <Card.Body>
  <Card.Title>{item.pname} | {item.category}</Card.Title>
  <Card.Text className="text-danger">{item.price}</Card.Text>
  <Card.Text className="text-success">
    {item.pdesc.length > 100 ? item.pdesc.slice(0, 100) + "..." : item.pdesc}
  </Card.Text>

  <button className="btn btn-danger"  onClick={() => removePet(item._id)}>Remove</button>
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

export default MyPets;
