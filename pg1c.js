// app.js (Express.js backend)

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define Mongoose schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Middleware to parse JSON
app.use(express.json());

// Route to handle user login data
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Save user login data to MongoDB
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User login data saved successfully');
    } catch (error) {
        console.error('Error saving user login data:', error);
        res.status(500).send('Error saving user login data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});