# Exam Marks Counter

This is a simple React application that allows users to keep track of their exam marks based on correct and incorrect answers. It calculates the total score by applying custom positive and negative marks for each question. The application also stores the data in local storage, so the score persists even after a page reload.

## Features

- Users can set custom positive marks for correct answers and negative marks for incorrect answers.
- The app tracks the number of correct and incorrect answers.
- It calculates and displays the total score based on the inputs.
- Data (score, incorrect answers, question number) is saved in local storage to preserve state between sessions.
- The app includes a reset button to restart the counter.

## Technologies Used

- React + Vite
- CSS (for basic styling)

## Installation and Usage

1. Clone this repository:
    ```bash
    git clone https://github.com/bhanu-sh/exam-marks-counter.git
    ```

2. Navigate into the project directory:
    ```bash
    cd exam-marks-counter
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to:
    ```
    http://localhost:3000
    ```

## How to Use

- Input the correct answer mark and negative mark in the input fields.
- Click "Correct" to increment the count of correct answers and move to the next question.
- Click "Incorrect" to increment the count of incorrect answers and move to the next question.
- The total score is displayed as:
    ```
    Total Marks = (Correct Answers * Mark) - (Incorrect Answers * Negative Mark)
    ```
- The "Reset" button will reset all counts to zero and start from the first question.

## Live Demo

Check out the live version of this app [here](https://exam-marks.vercel.app/).

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made by [Bhanu Pratap Sharma](https://github.com/bhanu-sh).
