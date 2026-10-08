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

**QUESTION**: Your first question.

**ANSWER**: Your first answer.

**LEVEL**: 0
**DATE**: NA

######################################## NEW QUESTION ########################################

**QUESTION**: Your second question.

**ANSWER**: Your second answer.

**LEVEL**: 0
**DATE**: NA
```

## Disclaimer

I make no claim that this codebase is particularly well-written. I threw everything together because I couldn't find a flash card app that supported LaTeX questions and code snippets, both of which I needed for my studies.

Pull requests are welcome.

## TO DO

- Add a button to reset all questions in a deck to `**LEVEL**: 0
__DATE__: NA`.
