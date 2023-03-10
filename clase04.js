/* Backend REST II:

*/

//_____________________________REQUIRES___________________________________

var express = require("express");
var bodyParser = require('body-parser');
var backend = require('./backend');

var app = express();
var port = process.env.PORT || 12345;

app.use("/", express.static("./public"));
    
app.use(bodyParser.json());

backend(app);

app.get("/faces", (request,response) => {
    response.send(cool());
    console.log("New request");
});


app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});
