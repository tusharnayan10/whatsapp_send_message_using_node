const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const wbm = require('wbm');

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


wbm.start().then(async () => {
    const phones = ['+91 9406224412'];
    const message = 'Hello sir, Good Evening';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));



let port = process.env.PORT;
if(port == "" || port == null){
    port = 5000;
}
app.listen(port, function(){
    console.log("Server running on port : 5000 ");
});