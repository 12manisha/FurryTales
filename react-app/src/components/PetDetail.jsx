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
                <h2 className="mb-4">Pet Details</h2>
                {pet ? (
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={`http://localhost:4000/${pet.pimage}`} alt="" />
                        </div>
                        <div className="col-md-6">
                            <h5>{pet.pname}</h5>
                            <p>{pet.pdesc}</p>
                            <p>Category: {pet.category}</p>
                            <p className="text-danger">Price: Rs. {pet.price}, To Buy Contact on this number - {contactNumber}</p>
                            <button onClick={() => handleLike(pet._id)} style={{backgroundColor: isAddedToWishlist ? 'green' : 'initial'}}>Wishlist</button>
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
