import React, { useState } from 'react';
import { MDBContainer, MDBInput, MDBCheckbox, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleApi = () => {
      const url = 'http://localhost:4000/signup';
      const data = { username, password };
      
      axios.post(url, data)
      .then((res) => {
          if (res.data.message) {
              alert(res.data.message);
          }
      })
      .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
              setErrorMessage(err.response.data.message);
          } else {
              setErrorMessage('Server error. Please try again later.');
          }
      });
  };
  

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='email' value={username}
                onChange={(e) => setUsername(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />


            <MDBBtn className="mb-4 btn-danger btn-outline-warning text-light" onClick={handleApi}>Sign up</MDBBtn>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}

            <div className="text-center">
                <p>Already a member? <Link to="/login">Login</Link></p>
            </div>
        </MDBContainer>
    );
}

export default Signup;
