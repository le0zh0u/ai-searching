/**
 * Created by zhouchunjie on 16/9/28.
 */
import fs from 'fs';
import express from 'express';
const router = express.Router();

import Product from '../../server/models/product';

router.post('/cart/update', (req, res) => {
    fs.writeFile('./app/server/fake-database-cart.js', `var cart = ${JSON.stringify(req.body.cart)};\n\nexport default cart;`, () => {
        console.log('Cart updated!');
    });
    res.send('Cart Updated!');
});

router.get('/add', (req, res) => {
    var product = new Product({
        id: 1,
        name: "product 1",
        price: "123",
        description: "product first one"
    });
    product.save();
    res.json(product);
});

router.get('/list', (req, res) => {
    console.log('start find');
    Product.find({}, function(err, doc) {
        res.json(doc);
    });
});

export default router;
