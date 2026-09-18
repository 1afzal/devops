import express from "express"
import axios from "axios"
import cors from "cors"
const PORT = 6969;
const app = express()
app.use(cors({ origin: "http://localhost:5173" }))


app.get(`/info`, async(req,res)=>{
    try{
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err.message);
        res.status(400).json({
            "message": "error in fetching todos"
        })
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is live at port ${PORT}`)
})