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

6. Click through the flash cards. Only cards that are due today are shown. Before revealing an answer you can click `Reveal Answer` or `Skip Question` (which leaves the card untouched). After revealing the answer, mark how you did:

   - `Correct` moves the card up a level and records today's date.
   - `Almost Correct` leaves the card's level and date unchanged (for small slips, like a typo).
   - `Incorrect` sends the card back to level 0 with the date `NA`.

## Spaced Repetition

Each card has a `**LEVEL**` (0 to 5) and a `**DATE**` (the day it was last answered correctly, as `YYYY-MM-DD`, or `NA`). A card is shown when enough time has passed since that date:

| Level | Shown again when...                                    |
| ----- | ------------------------------------------------------ |
| 0     | Always (new cards, or cards answered incorrectly)      |
| 1     | At least 1 day after the last correct answer           |
| 2     | At least 1 week (7 days) after the last correct answer |
| 3     | At least 1 month after the last correct answer         |
| 4     | At least 1 year after the last correct answer          |
| 5     | At least 1 year after the last correct answer          |

Days are calendar days in your local time, so a card answered correctly yesterday evening is due today. A correct answer at level 5 keeps the card at level 5 and refreshes its date. The app updates `**LEVEL**` and `**DATE**` in your markdown file for you.

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

## Tests

```bash
npm test
```

## Disclaimer

I make no claim that this codebase is particularly well-written. I threw everything together because I couldn't find a flash card app that supported LaTeX questions and code snippets, both of which I needed for my studies. Half of this codebase was vibe-coded and is still unreviewed.

Pull requests are welcome.
