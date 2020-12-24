require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");

const stripe = require('stripe')('sk_test_51HX92ADV5bqQz6pN7MO2Mw29Rvr4MwGbWCobGAooTqMmx6vuZI3ZjYhAaA1N7msSDhza736yVjUpRrqVEgep2FM100GEOFJEwZ');

const app = express();


app.use(cors());
//app.use(express.static('.'));

const YOUR_DOMAIN = '';

app.use(express.json())
app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 29900,
      currency: "usd"
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
  });



app.get("/api/v1/tap/:email", async (req, res) => {
    const email = req.params.email;
    try {
        const customer = await stripe.customers.list({
            email
          });
          res.status(200).json({
            customer
          })
    } catch(err){
        console.log(err)
    }
});

app.get("/api/v1/tap/cards/:customer", async (req, res) => {
    const customer = req.params.customer;
    console.log(customer)
    try {
        const paymentMethods = await stripe.paymentMethods.list({
            customer,
            type: 'card',
          });
          res.status(200).json({
            paymentMethods
          })
    } catch(err){
        console.log(err)
    }
    
    
});

//Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("select * from restaurants");
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            restaurants: results.rows
        },
        
    });
    
    } catch(err){
        console.log(err)
    }
    
    
});

//Get induvidual restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const restaurant = await db.query("select * from restaurants where id = $1", [req.params.id]);
        const reviews = await db.query("select * from reviews where restaurant_id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: restaurant.rows[0],
                reviews: reviews.rows
            }
        })
    }
    catch(err){
        console.log(err)
    }
    
});

//Create a restaurant
app.post("/api/v1/restaurants", async (req, res) =>{
    try{
        console.log(req)
        const results = await db.query("INSERT INTO restaurants (name, location, primary_tag, description, link) values ($1, $2, $3, $4, $5) returning *", [req.body.name, req.body.location, req.body.primary_tag, req.body.description, req.body.link])
        console.log(results)
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    }catch(err){
        console.log(err);
    }
    
});

//Update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try{
        const results = await db.query(
            "UPDATE restaurants SET name=$1, location =$2, price_range=$3 where id=$4 returning *",
         [req.body.name, req.body.location, req.body.price_range, req.params.id])
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0]
            }
        })
    }catch(err){
        console.log(err)
    }
});

//Delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    
    try{
        const results = db.query("DELETE FROM restaurants where id=$1", [
            req.params.id,
        ]);
        res.status(204).json({
            status: "success"
        });
    }catch(err){
        console.log(err);
    }
    
});

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
    console.log(req.params)
    try{
       const newReview = await db.query("INSERT into reviews (restaurant_id, name, review, rating) values ($1, $2, $3, $4) returning *;", [req.params.id, req.body.name, req.body.review, req.body.rating])
        res.status(201).json({
            status:'success',
            data: {
                review: newReview.rows[0]
            }
        })
    }catch(err){
        console.log(err)
    }
})

//http://localhost:3001/getRestaurants

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and running on ${port}`);
});