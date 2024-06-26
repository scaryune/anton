const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());


app.get('/api/items', (req, res) => {
    res.json(items);
});

// Sample Data
let items = [
    {id:1, name:'Alice',username:'alice09',password:'alice0999'},
]

// Sample data
app.get('/api.items/:id', (req,res) => {
    const item = items.find(id => id.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Routes
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
        username: reqq.body.username,
        password: req.body.passsword
    };
    item.push(newitem);
    res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
  
    item.name = req.body.name;
    item.description = req.body.description;
    item.money = req.body.money;
    res.json(item);
});

app.delete('/api/items/:id', (req, res) =>{
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1 ) return res.status(404).send('Item not found');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deleteItem);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


