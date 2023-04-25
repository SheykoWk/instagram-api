const Users = require('../models/users.models')

const data = [
    { 
        "id": "0120e619-3901-440b-a4f9-1e1424fc7e9d",
        "firstName": "Sahid",
        "lastName": "Ayala",
        "email": "sahid.kick@academlo.com",
        "password": "$2b$10$Bu07nfyRkdMhmfD8Rd4sNePoR7XvD..zQBPAXCl/v6nYvCiMgVl7a",
    },
    {
        "id": "60852707-7741-4492-b34a-14c25b01af9b",
        "firstName": "Ulices",
        "lastName": "Aguila",
        "email": "ulices@academlo.com",
        "password": "$2b$10$34DIXADYbO7D/nu0y0/MBuFA6cZwr4Ny/DXQBAN0a8438lFcekMfi",
    },
    {
        "id": "093f85e8-1e84-4e06-967b-714be18ec5b3",
        "firstName": "Sebastian",
        "lastName": "Castillo",
        "email": "sebastian@academlo.com",
        "password": "$2b$10$8O5TmgWNw505UC/24CjKI.2eJlmAbEnZoH.JvgZbGx25H.fVoTklG",
    },
    {
        "id": "89c7c7f5-f279-4946-ba79-3dd04f819663",
        "firstName": "Pierina",
        "lastName": "Corzo",
        "email": "pierina@academlo.com",
        "password": "$2b$10$Jn3NeduhYLjNYKZMb.VKVeIcTPEDWdXb1ExPmHukzHlmLj9uwwJga",
    },
    {
        "id": "7a9e8130-1623-40ba-9f41-edf0d4ad2c75",
        "firstName": "Erick",
        "lastName": "Yarleque",
        "email": "erick@academlo.com",
        "password": "$2b$10$L81b.WTwCesh2kMHRZGmkuKyQqHhXldrxYdxLilaD7v3E6nIpZUl2",
    },
    {
        "id": "13b4db9c-3f8d-49ed-b77d-b26743c42053",
        "firstName": "Osmar",
        "lastName": "Medina",
        "email": "osmar@academlo.com",
        "password": "$2b$10$Vt3xdBdJFgeLc3YPXq3hxeb0ca7W5xWdmGAHq5MZBEVW3kVqhx8/W",
    }
]

const generateUserSeed = async () => {
    await Users.bulkCreate(data)
}

generateUserSeed()
    .then(() => console.log('User seeders executed succesfully!'))
    .catch(err => console.log(err))
