import express from 'express'
const router = express.Router()


// Mock database
const users = [
  {
    fist_name: 'Débora',
    last_name: 'Santiago',
    email: 'deborasantiago@mail.com',
    password: 'deesan0101011'
  },
];


// Getting the list of users from the mock database

router.get('/', (req,res) => {
  res.send(users);
})

export default router


