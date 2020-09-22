const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HTXz5HsIPgOpSbVP20kU83wEzo0zISrCdTklmLA5MUiKvcBDdNF9KsoYpDRFbXiCmUXSJQmQJoO9hWUnA5wEN4K00i9OKwSoV"
);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// Api routes

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request recieved Boom!! for this Amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // ok - created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
//http://localhost:5001/e-clone-35aa1/us-central1/api
