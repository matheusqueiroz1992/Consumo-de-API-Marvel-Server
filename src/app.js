import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import { fetchApi } from './api'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/characters', async (req, res) => {
try {
    const response = await fetchApi("/characters");
    const data = await response.json();
    console.log(data);
    res.json({
      test:"a"
    })

} catch(err) {

}
})

app.post("/auth/signup",async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(req.body);

    res.json({

  });
} catch (err){

}
});

export default app
