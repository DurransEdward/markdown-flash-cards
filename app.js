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
        throw new Error("Please enter a file name.")
    }

    let text = ''

    try {
        const response = await fetch(`http://localhost:3000/${pathToQuestionsFile}`)
        text = await response.text()
    } catch (error) {
        alert(`Failed to load questions. Check the file name and the file content.`)
        throw error
    }
    
    const entries = text.split("######################################## NEW QUESTION ########################################").map(entry => entry.trim()).filter(entry => entry)

    if (entries.length === 0) {
        alert("No questions found in the file.")
        throw new Error("No questions found in the file.")
    }

    questions = entries.map((entry, index) => {
        try {
            const questionMatch = entry.match(/__QUESTION__:\s*([\s\S]*?)\s*__ANSWER__:/)
            const answerMatch = entry.match(/__ANSWER__:\s*([\s\S]*?)\s*__LEARNED__:/)
            const learnedMatch = entry.match(/__LEARNED__:\s*(true|false)/)

            if (!questionMatch || !answerMatch || !learnedMatch) {
                alert(`Either __QUESTION__, __ANSWER__ or __LEARNED__ left undefined on question with index: ${index}`)
                throw new Error(`Either __QUESTION__, __ANSWER__ or __LEARNED__ left undefined on question with index: ${index}`)
            }

            const question = questionMatch[1].trim()
            const answer = answerMatch[1].trim()
            const learned = learnedMatch[1].trim() === 'true'

            return { question, answer, learned, questionIndexInFile: index }
        } catch (error) {
            alert("Failed to parse entry:", entry)
            throw error
        }
        
    })

    questions = questions.filter(question => !question.learned)

    if (questions.length === 0) {
        alert("All questions have been learned.")
        throw new Error("All questions have been learned.")
    }

    questions.sort(() => Math.random() - 0.5)

    document.getElementById('header').style.visibility = 'visible'
    document.getElementById('text').style.visibility = 'visible'
    document.getElementById('button-1').style.visibility = 'visible'
    document.getElementById('answer-input').style.visibility = 'visible'
    
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

    document.getElementById('answer-input').value = ''
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

    document.getElementById('answer-input').value = ''

    document.getElementById('answer-input').style.visibility = 'hidden'
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