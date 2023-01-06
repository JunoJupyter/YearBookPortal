const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(cors())

app.post('/myprofile', (req, res)=>{
    // console.log(req.body.mail);
    // console.log(req.body.phone);
    // console.log(req.body.address);
    // console.log(req.body.bio);
    // console.log(req.body.answer);
});

app.listen(3000, ()=>{
    console.log('This is localhost: 3000')
})
