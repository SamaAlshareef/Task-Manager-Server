const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager',{useNewUrlParser:true}).then(()=>{
    console.log('Connecting to mongo Database successfully');
}).catch((e)=>{
    console.log('Error while connecting to the database');
    console.log(e);
});


mongoose.set('useCreateIndex',true);
mongoose.set('useFindAndModify',false);

module.exports={
    mongoose
};