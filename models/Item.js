const mongoose=require('mongoose');
const ItemSchema=new mongoose.Schema({
    name:{type:String,required:true},
    quantity:{type:Number,required:true}
});
modeule.exports=mongoose.model('Item',ItemSchema);