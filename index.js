const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const ProductRouter = require('./routes/products');
const AuthRouter = require('./routes/auth');
const UserRouter = require('./routes/user');
const CartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');


const port = 3000

dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("database connected"))
.catch((err) => console.log(err))


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb', extended: true}));

app.use('/api/products', ProductRouter);
app.use('/api', AuthRouter);
app.use('/api/user', UserRouter);
app.use('/api/cart', CartRouter);
app.use('/api/order', orderRouter);

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`));