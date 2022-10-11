import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

const characters = [
  {
    id: 0,
    name: 'aaa'
  },
  {
    id: 1,
    name: 'bbb'
  },
  {
    id: 0,
    name: 'ccc'
  }
]
app.get('/', (req, res) => {
  res.json({
    test: 'a'
  })
})

app.get('/characters', (req, res) => {
  res.json({
    test: 'a'
  })
})

app.post('/characters', (req, res) => {
  res.json({
    test: 'a'
  })
})

app.get('/characters/:id', (req, res) => {
  const { id } = req.params
  res.json({
    characters: characters.filter(
      character => String(character.id) === String(id)
    )
  })
})

export default app
