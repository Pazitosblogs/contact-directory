
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();


connectDB();


app.use(cors());
app.use(express.json({ extended: false }));


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/contacts', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 
