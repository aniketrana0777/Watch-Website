const express=require('express');
require('./db/configga');
const User=require('./db/user');
const Data=require('./db/data')

const cors=require('cors');
const stripe=require("stripe")("sk_test_tR3PYbcVNZZ796tH88S4VQ2u");

const server=express();
server.use(cors());
server.use(express.json());

server.post('/create',async(req,res)=>{
    let data=new User(req.body)
    let result=await data.save()

    console.log(result);
    res.json(result)
})

    server.post('/login',async(req,res)=>{
        let data=await User.findOne(req.body).select('-password')
        if(data){
         res.send(data)
        }else{
         res.send({result:'no data found'})
        }
     })
     server.post('/api',async(req,res)=>{
        let data=new Data(req.body)
        let result=await data.save()

        console.log(result);
        res.json(result)
     })
     server.get('/fetchapi',async(req,res)=>{
        let data=await Data.find()
    
        console.log(data)
        res.send(data)
    })
    //payment api
server.post("/api/create-checkout-session",async(req,res)=>{
    const {products} = req.body;
     
const lineItems=products.map((product)=>({
    price_data:{
        currency:"inr",
        product_data:{
            name:product.title
        },
        unit_amount:product.price * 100,
    },
    quantity:product.qnty
}));

    const session=await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/success",
        cancel_url:"http://localhost:3000/cancel",
     });

     res.json({id:session.id}) 
})

server.listen(2000,()=>{
    console.log('SERVER STARTED');
})
