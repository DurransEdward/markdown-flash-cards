# Mathematical and Programming Flash Cards

This is a simple web app that allows you to create flash cards which include LaTeX equations and code snippets.

## Pull, Build, and Run

1. Pull this repository

2. Run:

```bash
npm run build
```

3. Run:

```bash
npm run start
```

4. Go to a browser and type `http://localhost:1234` into the address bar.

5. Type `example-questions.md` into the input field and click the "Load Questions" button.

6. Click through the flash cards, pressing the `Mark As Learned` button when you have learned the answer to a question or the `Next Question` button to move on to the next question without marking the current question as learned.

## Make Your Own Deck of Flash Cards

1. Create a new markdown file in the base directory of this repository, e.g. `my-questions.md`.

2. Add questions and answers to the markdown file in the following format:

```markdown
######################################## NEW QUESTION ########################################

__QUESTION__: Your first question.

__ANSWER__: Your first answer.

__LEARNED__: false

######################################## NEW QUESTION ########################################

__QUESTION__: Your second question.

__ANSWER__: Your second answer.

__LEARNED__: false
```

## Disclaimer

I make no claim that this codebase is particularly well-written. I threw everything together because I couldn't find a flash card app that supported LaTeX questions and code snippets, both of which I needed for my studies.

Pull requests are welcome.

## TO DO

- Add a button to reset all questions in a deck to `__LEARNED__: false`.