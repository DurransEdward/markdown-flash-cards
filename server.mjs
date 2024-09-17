import express from 'express'
import { promises as fs } from 'fs'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/mark-as-learned', async (req, res) => {
    const { pathToQuestionsFile, questionIndex } = req.body

    try {
        const data = await fs.readFile(pathToQuestionsFile, 'utf8')
        
        let questions = data.trim().split("######################################## NEW QUESTION ########################################").map(entry => entry.trim()).filter(entry => entry)

        questions[questionIndex] = questions[questionIndex].replace('__LEARNED__: false', '__LEARNED__: true')

        await fs.writeFile(pathToQuestionsFile, "")
        for (let i = 0; i < questions.length; i++) {
            await fs.appendFile(pathToQuestionsFile, "######################################## NEW QUESTION ########################################\n\n")
            await fs.appendFile(pathToQuestionsFile, questions[i] + '\n\n')
        }

        res.send('OK')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error processing the request')
    }
})

app.listen(3000, () => console.log('Server listening on port 3000'))

app.use(express.static('./'))