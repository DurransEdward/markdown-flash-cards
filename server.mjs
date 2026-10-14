import express from 'express'
import { promises as fs } from 'fs'
import path from 'path'
import cors from 'cors'
import { splitEntries, joinEntries, parseEntry, gradeCard, withLevelAndDate } from './cards.mjs'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/record-answer', async (req, res) => {
    const { questionsFileName, questionIndex, correct } = req.body

    if (
        typeof questionsFileName !== 'string' ||
        !questionsFileName ||
        questionsFileName === '.' ||
        questionsFileName === '..' ||
        path.basename(questionsFileName) !== questionsFileName ||
        questionsFileName.includes('\\') ||
        typeof correct !== 'boolean'
    ) {
        res.status(400).send('Expected questionsFileName (file name) and correct (boolean)')
        return
    }

    const questionsFilePath = path.join('questions', questionsFileName)

    try {
        const data = await fs.readFile(questionsFilePath, 'utf8')
        const entries = splitEntries(data)

        if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= entries.length) {
            res.status(400).send('Invalid questionIndex')
            return
        }

        const card = parseEntry(entries[questionIndex], questionIndex)
        entries[questionIndex] = withLevelAndDate(entries[questionIndex], gradeCard(card, correct))

        await fs.writeFile(questionsFilePath, joinEntries(entries))

        res.send('OK')
    } catch (error) {
        console.error(error)
        res.status(500).send('Error processing the request')
    }
})

app.listen(3000, () => console.log('Server listening on port 3000'))

app.use(express.static('./'))
