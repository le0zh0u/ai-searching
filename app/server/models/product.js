/**
 * Created by zhouchunjie on 16/9/28.
 */
import mongoose from 'mongoose';
import config from '../../../config';

var db = mongoose.createConnection('mongodb://127.0.0.1:27017/ai-search-dev');

var Schema = mongoose.Schema;

var Product = new Schema({
        id: Number,
        name: String,
        price: String,
        description: String
    }
);

