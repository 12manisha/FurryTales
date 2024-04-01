import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function PetDetail() {
    const { petId } = useParams();
    const [pet, setPet] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false); // State to track wishlist status

    useEffect(() => {
        const fetchPetDetails = async () => {
            try {
                const petResponse = await axios.get(`http://localhost:4000/get-pet/${petId}`);
                console.log("Pet API Response:", petResponse.data);
                if (petResponse.data.pet) {
                    setPet(petResponse.data.pet);
                    setContactNumber(petResponse.data.contactNumber); // Assuming contactNumber is returned from the API
                }
            } catch (error) {
                console.error("Pet API Error:", error);
                alert('Server error');
            }
        };

        fetchPetDetails();
    }, [petId]);

    const handleLike = (petId) => {
        let userId = localStorage.getItem('userId');
        console.log('userId', 'petId', petId, userId)
        const url = 'http://localhost:4000/like-pet'
        const data = {userId, petId}
        axios.post(url,data)
            .then((res) => {
                console.log('liked');
                setIsAddedToWishlist(true); // Set the state to indicate pet is added to wishlist
            })
            .catch((err) => {
                alert('server err')
            })
    }

    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2 style={{color:'#34495E'}} className="mb-4">Pet Details</h2>
                {pet ? (
                    <div className="row">
                        <div className="col-md-6">
                            <img style={{padding:'2rem'}} className="img-fluid" src={`http://localhost:4000/${pet.pimage}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h3 style={{margin:'1.4rem 0' }}>{pet.pname}</h3>
                            
                            <h4 style={{margin:'1.2rem 0' }}><span style={{ fontWeight: 'bold' }}>Category:</span> {pet.category}</h4>

                            <h6 style={{margin:'1.2rem 0' }} className="text-danger">Price: Rs. {pet.price}
                            <h6 style={{margin:'1.2rem 0' }} className="text-danger">To Buy Contact on this number - {contactNumber}</h6></h6>
                            <p style={{margin:'1.2rem 0' }}>{pet.pdesc}</p>
                            <button onClick={() => handleLike(pet._id)} style={{backgroundColor: isAddedToWishlist ? 'green' : 'initial', color: isAddedToWishlist ? 'white' : 'black' ,margin:'1rem', padding:'0.6rem', width:'10rem'}}><h3>Wishlist</h3></button>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
}

export default PetDetail;
