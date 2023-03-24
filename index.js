/* Backend REST II:

*/

//_____________________________REQUIRES___________________________________
import express from "express";
import { loadBackend } from './backend/index.js';
import { handler } from './frontend/build/handler.js';

var app = express();
var port = process.env.PORT || 12345;
    
app.use(express.json());

loadBackend(app);

app.use(handler);


app.listen(port,()=>{
    console.log(`Server ready in port ${port}`);
});
