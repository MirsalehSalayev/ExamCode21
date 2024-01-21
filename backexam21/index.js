import  express  from "express"
import mongoose from 'mongoose';
import cors from "cors";
const { Schema } = mongoose;
const app = express()
const port = 3100
app.use(cors())
app.use(express.json())
const blogSchema = new Schema({
  image: String, 
  name: String,
  price: Number,

});
const Tank = mongoose.model('Tank', blogSchema);

app.get('/', async(req, res) => {
    try{
        const data =await Tank.find()
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
  })
  
  app.get('/:id', async(req, res) => {
    try{
        const {id} =req.params
        const data =await Tank.findById(id)
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
  })
  app.post('/', async(req, res) => {
    try{
        const {image,name,price}=req.body
        const data =await Tank({image,name,price})
        data.save()
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
  })
  
 
  
  app.delete('/:id', async(req, res) => {
    try{
        const {id} =req.params
        const data =await Tank.findByIdAndDelete(id)
        res.send(data)
    }catch(error){
        res.send(error.message)
    }
  })
  mongoose.connect('mongodb+srv://mi829361s:1mz01mz0@salayev.kgfgf1t.mongodb.net/').then(()=>console.log("cnnct"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})