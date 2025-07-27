import express from 'express';
import dotenv from 'dotenv';
import contactRoute from './routes/contact';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/contact', contactRoute);
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
console.log('Registered contact route at /api/contact');

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

