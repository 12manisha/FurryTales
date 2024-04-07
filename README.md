# FurryTales
The project aims to develop a comprehensive e-commerce website tailored specifically for the sale of pets and related products. With the increasing demand for convenient online shopping experiences, particularly in niche markets such as pet ownership, this website endeavors to provide a user-friendly platform for both pet enthusiasts and pet product consumers.

# Technologies Used
Backend: Node.js with Express framework
Database: MongoDB
Authentication: JSON Web Tokens (JWT) for user authentication
Password Hashing: bcrypt for hashing passwords
File Uploads: multer for handling file uploads
Frontend: React.js with React Router for routing and MDB React UI Kit for UI components
Other Dependencies: cors, body-parser for middleware handling, email-validator for email validation

# Setup Instructions

Clone the repository:
git clone <repository_url>

Install dependencies for the backend:
cd backend
npm install

Install dependencies for the frontend:
cd ../react-app
npm install

Start the backend server: 
cd ../backend
npm start

Start the frontend development server:
cd ../react-app
npm start

Open your browser and navigate to http://localhost:3000 to view the application.

# API Endpoints
/signup: Sign up a new user
login: Log in an existing user
/add-pet: Add a new pet for sale
/get-pets: Get all pets available for sale
/like-pet: Like a pet
/liked-pets: Get pets liked by a user
/my-pets: Get pets added by a user
/remove-pet: Remove a pet from the store
/add-address: Add a new address for a user
/get-addresses: Get all addresses of a user
/add-to-cart/:productId: Add a product to the user's cart
/get-cart: Get the user's cart
/empty-cart: Empty the user's cart
/move-to-orders: Move items from the cart to orders
/save-card-details: Save card details for a user

