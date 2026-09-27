import express from 'express';
const router = express.Router();
router.post('/stk', async (req,res)=>{
  console.log('Mpesa payment', req.body);
  res.json({ success: true, msg: 'STK push simulated - integrate Daraja here' });
});
export default router;
