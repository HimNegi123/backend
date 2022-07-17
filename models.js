const mongoose=require('mongoose');
const schema=mongoose.Schema({
    "item_name":String,
    "mrp":Number,
    "sellon":Number,
    "buyon":Number
});
module.exports=mongoose.model('datafiles',schema);
