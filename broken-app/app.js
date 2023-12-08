
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.post('/usuario', async(req, res, next) => {

const arr = [] 
const { login } = req.body; 

try { for (const d of login) { 
 const response = await axios.get(`https://api.github.com/users/${d}`); 
 const data = response.data; 
 arr.push(data) } 
 let out = arr.map(r => ({ bio: r.bio, name:r.name }));
  console.log(out) 
  return res.json(out); //console.log(response) 
    
  //console.log(response)
} catch (err) {
  next(err);
}
});

app.listen(3000, function(){
  console.log("Server started on port 3000!");
});





