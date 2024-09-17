import { marked } from 'marked'
import markedKatex from 'marked-katex-extension'

marked.use(markedKatex())

let questions = []
let currentQuestionIndex = -1
let currentButtonText = 'Reveal Answer'
let pathToQuestionsFile = ''

async function loadQuestionsFromInput() {
    pathToQuestionsFile = document.getElementById('file-input').value

    if (!pathToQuestionsFile) {
        alert("Please enter a file name.")
        return
    }

    try {
        const response = await fetch(`http://localhost:3000/${pathToQuestionsFile}`)
        const text = await response.text()
    
        const entries = text.split("######################################## NEW QUESTION ########################################").map(entry => entry.trim()).filter(entry => entry)
        
        
        questions = entries.map((entry, index) => {
            const questionMatch = entry.match(/__QUESTION__:\s*([\s\S]*?)\s*__ANSWER__:/)
            const answerMatch = entry.match(/__ANSWER__:\s*([\s\S]*?)\s*__LEARNED__:/)
            const learnedMatch = entry.match(/__LEARNED__:\s*(true|false)/)

            if (!questionMatch || !answerMatch || !learnedMatch) {
                console.error("Failed to parse entry:", entry)
                return null
            }

            const question = questionMatch[1].trim()
            const answer = answerMatch[1].trim()
            const learned = learnedMatch[1].trim() === 'true'

            return { question, answer, learned, questionIndexInFile: index }
        })
    
        questions = questions.filter(question => !question.learned)
        questions.sort(() => Math.random() - 0.5)

        document.getElementById('header').style.visibility = 'visible'
        document.getElementById('text').style.visibility = 'visible'
        document.getElementById('button-1').style.visibility = 'visible'
    } catch (error) {
        console.error('Failed to load questions:', error)
    }
}

async function clickButton() {
    switch (currentButtonText) {
        case 'Reveal Answer':
            await revealAnswer()
            break
        case 'Next Question':
            await askNextQuestion()
            break
        case 'Restart Quiz':
            await startQuiz()
            break
    }
}

async function askNextQuestion() {
    currentQuestionIndex++

    if (questions.length <= currentQuestionIndex) {
        finishedQuiz()
        return
    }

    document.getElementById('header').textContent = "Question " + (currentQuestionIndex + 1)

    const displayQuestion = marked.parse(questions[currentQuestionIndex].question)
    
    document.getElementById('text').innerHTML = displayQuestion

    document.getElementById('button-1').textContent = 'Reveal Answer'
    document.getElementById('button-1').style.visibility = 'visible'

    document.getElementById('mark-as-learned').style.visibility = 'hidden'

    currentButtonText = 'Reveal Answer'
}

async function revealAnswer() {
    document.getElementById('header').textContent = "Answer " + (currentQuestionIndex + 1)

    const displayAnswer = marked.parse(questions[currentQuestionIndex].answer)
    document.getElementById('text').innerHTML = displayAnswer

    document.getElementById('button-1').textContent = 'Next Question'
    document.getElementById('button-1').style.visibility = 'visible'

    document.getElementById('mark-as-learned').style.visibility = 'visible'

    currentButtonText = 'Next Question'
}

function finishedQuiz() {
    document.getElementById('header').textContent = "Finished Quiz!"
    document.getElementById('text').style.visibility = 'hidden'

    document.getElementById('button-1').textContent = 'Restart Quiz'
    document.getElementById('button-1').style.visibility = 'visible'

    document.getElementById('mark-as-learned').style.visibility = 'hidden'

    currentButtonText = 'Restart Quiz'
}

async function markAsLearned() {
    const response = await fetch('http://localhost:3000/mark-as-learned', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pathToQuestionsFile,
            questionIndex: questions[currentQuestionIndex].questionIndexInFile
        }),
    })

    if (response.ok) {
        await askNextQuestion()    
    } else {
        console.error('Failed to mark as learned')
    }
}

async function startQuiz() {
    currentQuestionIndex = -1
    await loadQuestionsFromInput()
    await askNextQuestion()
}

function setup() {
    document.getElementById('button-1').addEventListener('click', clickButton)
    document.getElementById('mark-as-learned').addEventListener('click', markAsLearned)
    document.getElementById('load-questions-button').addEventListener('click', startQuiz)
}

setup()