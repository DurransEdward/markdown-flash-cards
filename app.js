import { marked } from 'marked'
import markedKatex from 'marked-katex-extension'
import { parseCards, isDue } from './cards.mjs'

marked.use(markedKatex())

const BUTTON_IDS = ['reveal-button', 'skip-button', 'correct-button', 'almost-correct-button', 'incorrect-button', 'restart-button']

let questions = []
let currentQuestionIndex = -1
let pathToQuestionsFile = ''

function showButtons(...visibleIds) {
    for (const id of BUTTON_IDS) {
        document.getElementById(id).hidden = !visibleIds.includes(id)
    }
}

function showLevel(level) {
    const badge = document.getElementById('level-badge')
    badge.textContent = "Level " + level
    badge.hidden = false
}

function showQuestionsRemaining() {
    const counter = document.getElementById('questions-remaining')
    counter.textContent = "Questions remaining: " + (questions.length - currentQuestionIndex)
    counter.hidden = false
}

async function loadQuestionsFromInput() {
    pathToQuestionsFile = document.getElementById('file-input').value

    if (!pathToQuestionsFile) {
        alert("Please enter a file name.")
        throw new Error("Please enter a file name.")
    }

    let text = ''

    try {
        const response = await fetch(`http://localhost:3000/${pathToQuestionsFile}`)

        if (!response.ok) {
            throw new Error(`Could not load "${pathToQuestionsFile}" (HTTP ${response.status}). Check the file name; the file must be inside the flash cards folder.`)
        }

        text = await response.text()
    } catch (error) {
        alert(`Failed to load questions. ${error.message}`)
        throw error
    }

    let allQuestions = []

    try {
        allQuestions = parseCards(text)
    } catch (error) {
        alert(error.message)
        throw error
    }

    if (allQuestions.length === 0) {
        alert("No questions found in the file.")
        throw new Error("No questions found in the file.")
    }

    questions = allQuestions.filter(question => isDue(question))

    if (questions.length === 0) {
        alert("No questions are due today.")
        throw new Error("No questions are due today.")
    }

    document.getElementById('header').style.visibility = 'visible'
    document.getElementById('text').style.visibility = 'visible'
    document.getElementById('answer-input').style.visibility = 'visible'
}

async function askNextQuestion() {
    currentQuestionIndex++

    if (questions.length <= currentQuestionIndex) {
        finishedQuiz()
        return
    }

    document.getElementById('header').textContent = "Question"

    showLevel(questions[currentQuestionIndex].level)
    showQuestionsRemaining()

    const displayQuestion = marked.parse(questions[currentQuestionIndex].question)

    document.getElementById('text').innerHTML = displayQuestion

    showButtons('reveal-button', 'skip-button')

    document.getElementById('answer-input').value = ''
}

async function revealAnswer() {
    document.getElementById('header').textContent = "Answer"

    const displayAnswer = marked.parse(questions[currentQuestionIndex].answer)
    document.getElementById('text').innerHTML = displayAnswer

    showButtons('correct-button', 'almost-correct-button', 'incorrect-button')
}

function finishedQuiz() {
    document.getElementById('header').textContent = "Finished Quiz!"
    document.getElementById('level-badge').hidden = true
    document.getElementById('questions-remaining').hidden = true
    document.getElementById('text').style.visibility = 'hidden'

    document.getElementById('answer-input').value = ''
    document.getElementById('answer-input').style.visibility = 'hidden'

    showButtons('restart-button')
}

async function recordAnswer(correct) {
    const response = await fetch('http://localhost:3000/record-answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            pathToQuestionsFile,
            questionIndex: questions[currentQuestionIndex].questionIndexInFile,
            correct
        }),
    })

    if (response.ok) {
        await askNextQuestion()
    } else {
        alert('Failed to save your answer. Is the server running?')
        console.error('Failed to record answer')
    }
}

async function startQuiz() {
    currentQuestionIndex = -1
    await loadQuestionsFromInput()
    await askNextQuestion()
}

function setup() {
    document.getElementById('reveal-button').addEventListener('click', revealAnswer)
    document.getElementById('skip-button').addEventListener('click', askNextQuestion)
    document.getElementById('correct-button').addEventListener('click', () => recordAnswer(true))
    document.getElementById('almost-correct-button').addEventListener('click', askNextQuestion)
    document.getElementById('incorrect-button').addEventListener('click', () => recordAnswer(false))
    document.getElementById('restart-button').addEventListener('click', startQuiz)
    document.getElementById('load-questions-button').addEventListener('click', startQuiz)
}

setup()
