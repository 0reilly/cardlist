require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");
const path = require("path");
const crypto = require('crypto');
const base64url = require('base64url');
const bodyParser = require('body-parser');
const util = require('util');
const url = require('url');
const session = require("express-session");
const { tokenize } = require("prismjs");
const { resolve } = require("path");
const client = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN 
);


/** Sync */
function randomStringAsBase64Url(size) {
  return base64url(crypto.randomBytes(size));
}


const app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(express.static('.'));

const YOUR_DOMAIN = '';

app.use(express.json());
app.use(
  session({
    secret: "Set this to a random string that is kept secure",
    resave: false,
    saveUninitialized: true,
  })
);

const stripe = require('stripe')(process.env.STRIPE_SECRET);
app.use(express.static(path.join(__dirname, "client/build")));

app.get('/pay/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.get('/success/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


function randomStringAsBase64Url(size) {
  return base64url(crypto.randomBytes(size));
}


app.post("/create-payment-intent", async (req, res) => {
  
    console.log(req.body)
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      currency: "usd",
      setup_future_usage : "on_session",
      customer: req.body.customer,
      on_behalf_of: req.body.account,
      transfer_data : { destination: req.body.account} ,
      application_fee_amount : Math.round((.034*req.body.amount))+30
    });
    res.send({
      clientSecret: paymentIntent.client_secret
    });
    console.log(paymentIntent)
  });

  
  app.post("/onboard-user", async (req, res) => {
    console.log("onboard")
    try {
      const account = await stripe.accounts.create({type: "standard"});
      req.session.accountID = account.id;
      const origin = `${req.headers.origin}`;
      const accountLinkURL = await generateAccountLink(account.id, origin);
      res.send({ url: accountLinkURL });
    } catch (err) {
      res.status(500).send({
        error: err.message,
      });
    }
  });
  
  app.get("/onboard-user/refresh", async (req, res) => {
    if (!req.session.accountID) {
      res.redirect("/");
      return;
    }
    try {
      const { accountID } = req.session;
      const origin = `${req.secure ? "https://" : "https://"}${req.headers.host}`;
  
      const accountLinkURL = await generateAccountLink(accountID, origin);
      
      //res.redirect(accountLinkURL);
    } catch (err) {
      res.status(500).send({
        error: err.message,
      });
    }
  });
  
  function generateAccountLink(accountID, origin) {
    return result = stripe.accountLinks
      .create({
        type: "account_onboarding",
        account: accountID,
        refresh_url: `${origin}/onboard-user/refresh`,
        return_url: `https://www.cardlist.co/success/${accountID}`,
      })
      .then((link) => link.url);

      
    
    
  }

  app.post("/new-order", async (req, res) => {
    var token = randomStringAsBase64Url(20);
    //var redirect = "https://tap.io/pay/"+token;
      
      try{
        var orderResults = await db.query('INSERT INTO orders (token, acctID, returnURL, successURL, storename, subtotal, shipping, taxes, total) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [token,req.body.acctID, req.body.returnURL, req.body.successURL,req.body.storename,req.body.subtotal, req.body.shipping, req.body.taxes, req.body.total]);
      
      }
      catch(err){
        console.log(err);
      }
        
      try{
        for (var i = 0; i < req.body.items.length; i++) {
          try {
            var itemResults = db.query('INSERT INTO items (id, name, price) VALUES ($1, $2, $3) RETURNING *', [token, req.body.items[i].name, req.body.items[i].price]);
          
          } catch (error) {
            
          }
          } 
          res.status(200).json({
            status: "OK",
            error: false,
            data: {
              redirect: "https://www.cardlist.co/pay/"+token,
              
            },
          });
      }
      catch(err){
        console.log(err);
      }
      
  });

  //Get an order
app.get("/api/v1/orders/:id", async (req, res) => {
  console.log("getting order data");
  try {
    const order = await db.query("select * from orders where token = $1", [`${req.params.id}`]);
    console.log(order)
    const items = await db.query("select * from items where id = $1", [`${req.params.id}`]);
    res.status(200).json({
      status: "OK",
      error: false,
      data: {
          order: order.rows,
          items: items.rows
      },
      
  });
  
  } catch(err){
      console.log(err)
  }
});

 //Get an order
 app.post("/api/v1/orders/:id", async (req, res) => {
   console.log("setting db column to true")
  try {
    const set = await db.query("update orders set paid = true where token = $1", [`${req.params.id}`]);
    console.log("set true");
  
  } catch(err){
      console.log(err)
  }
});

//handle customer information
app.post("/api/v1/emails/billing", async (req, res) => {
    const customer = await stripe.customers.update(
      req.body.id,
      {name : req.body.name, address: req.body.address}
    );
    res.status(200).json({
      status: "OK",
      error: false,
      data: {
          customer
      },
    
    });
});

app.post("/api/v1/emails/check", async (req, res) => {
  console.log("check: "+req.body.phone)
  
  
    
    try{
      const list = await stripe.customers.list({
        email: req.body.email,
        
      })
      
      
      if(list.data.length == 0){
        console.log("creating new customer with phone: "+req.body.phone+ "and email: "+req.body.email);
        try{
          const customer = await stripe.customers.create({
            phone: req.body.phone,
            email: req.body.email
           });
     
           res.status(200).json({
             status: "OK",
             error: false,
             data: {
                 customer
             },
           
           });
        }
        catch(err){
          console.log(err)
        }
        
      }
      else{
        //check if using correct phone number 
        if(list.data[0].phone === req.body.phone){
          res.status(200).json({
            status: "OK",
            error: false,
            data: {
                customer: list.data[0]
            },
          
          });
        }
        else{
          res.status(200).json({
            status: "OK",
            error: true,
            data: {
                error: "Incorrect phone number used"
            },
          
          });
        }
        }
      }
  
    catch(err){
      console.log(err)
    }
});

app.post("/start-twilio-verify", async (req, res) => {
  const verification = await client.verify
    .services(process.env.VERIFY_SERVICE_SID)
    .verifications.create({ to: req.body.phone, channel: "sms" });

  const status = verification.status;
  res.send({ status });
});


app.post("/check-twilio-verify", async (req, res) => {
  const code = req.body.code;
  const phone = req.body.phone;

  try {
    // Check Twilio verify code
    const verificationCheck = await client.verify
      .services(process.env.VERIFY_SERVICE_SID)
      .verificationChecks.create({ to: phone, code });

    // If successful, create the payment with the stored card
    if (verificationCheck.status === "approved") {
      res.send({ verificationCheck });
      console.log(verificationCheck)
    } else {
      res
        .status(400)
        .send({ error: { message: "Incorrect code. Please try again!" } });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
});

//handle customer information
app.post("/api/v1/cards", async (req, res) => {
  
  console.log(req.body)
  const paymentMethods = await stripe.paymentMethods.list({
    customer: req.body.id,
    type: 'card',
  });
  
  res.status(200).json({
    status: "OK",
    error: false,
    data: {
        paymentMethods
    },
  
  });
  //console.log(paymentMethods)

});

const port = process.env.PORT || 3006;
app.listen(port, '0.0.0.0',() => {
    console.log(`server is up and running on ${port},`);
    
});