import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import shopRoutes from './routes/shop.js';
import bookingRoutes from './routes/booking.js';
import mpesaRoutes from './routes/mpesa.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

if(process.env.MONGO_URL){
  mongoose.connect(process.env.MONGO_URL).then(()=>console.log('Mongo OK'));
}

app.get('/', (req,res)=> res.json({ status: 'Giddy Salon API live 💇‍♀️' }));
app.use('/api/shop', shopRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/mpesa', mpesaRoutes);

app.listen(process.env.PORT || 10000, ()=> console.log('Live on 10000'));
