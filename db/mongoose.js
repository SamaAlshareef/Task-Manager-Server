const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://mongoDatabases:2020_mongo@cluster0.rdajt.mongodb.net/TaskManager?retryWrites=true&w=majority',{useNewUrlParser:true}).then(()=>{
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