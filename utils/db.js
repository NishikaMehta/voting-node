const mongoose = require('mongoose');
mongoose.set('strictQuery',true)

mongoose.connect('mongodb+srv://nishikam3516:anan2013@cluster0.dmgvipa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const db = mongoose.connection;
db.on('error',(err) =>{
    console.log('Failed to Connect With DB');
})

db.once('open',() =>{
    console.log('Connected with DB');
});