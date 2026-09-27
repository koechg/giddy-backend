import express from 'express';
import mongoose from 'mongoose';
const router = express.Router();
const Booking = mongoose.model('Booking', new mongoose.Schema({
  name:String, phone:String, service:String, date:String, time:String, status:{type:String, default:'pending'}
},{timestamps:true}));
router.get('/', async (req,res)=> res.json(await Booking.find().sort({createdAt:-1})));
router.post('/', async (req,res)=> res.json(await Booking.create(req.body)));
export default router;
