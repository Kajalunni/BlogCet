const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });
const User = mongoose.model('User', { username: String, password: String });

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user credentials are valid (you might implement more secure authentication logic here)
        const user = await User.findOne({ username, password }).exec();

        if (user) {
            res.status(200).send('Login successful');
        } else {
            res.status(401).send('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Internal server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
