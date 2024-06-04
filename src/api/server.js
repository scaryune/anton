import express from 'express'
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())

app.use('/users', userRoutes);

// Routes 
app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
