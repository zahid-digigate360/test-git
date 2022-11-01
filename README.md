<h1> All api's link </h1>


Base_url = https://ecommerce-mern-api.vercel.app

<h3> 1. User </h3>
a) Registration 
Port: /api/auth/login
Body: 
{
    "username": "user",
    "email": "myuser@gmail.com",
    "password": "123456"
}

b) Login
Port: /api/auth/login
Body: 
{
  "username": "user",
  "password": "123456"
}

c) Update User
Port: /api/users/:id
Body: 
{
  "username": "user2"
}

d) Delete User
Port: /api/users/:id

c) Find User
Port: /api/users/find/:id

d) Find All User
Port: api/users/
