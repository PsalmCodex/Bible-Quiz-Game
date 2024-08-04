const questions = [
    {
        question: "Who was swallowed by a great fish?",
        options: ["Jonah", "Moses", "David", "Elijah"],
        answer: "Jonah"
    },
    {
        question: "What was the first miracle of Jesus?",
        options: ["Healing the blind", "Walking on water", "Turning water into wine", "Feeding 5000"],
        answer: "Turning water into wine"
    },
    {
        question: "Who received the Ten Commandments?",
        options: ["Abraham", "Isaac", "Jacob", "Moses"],
        answer: "Moses"
    },
    {
        question: "What is the last book of the New Testament?",
        options: ["John", "Acts", "Revelation", "Romans"],
        answer: "Revelation"
    },
    {
        question: "Where was Jesus born?",
        options: ["Jerusalem", "Nazareth", "Bethlehem", "Galilee"],
        answer: "Bethlehem"
    },
    {
        question: "Who betrayed Jesus?",
        options: ["Peter", "Judas", "Thomas", "James"],
        answer: "Judas"
    },
    {
        question: "Who led the Israelites out of Egypt?",
        options: ["Joshua", "Aaron", "Moses", "Caleb"],
        answer: "Moses"
    },
    {
        question: "What is the longest book in the Bible?",
        options: ["Genesis", "Psalms", "Isaiah", "Matthew"],
        answer: "Psalms"
    },
    {
        question: "Who was the first king of Israel?",
        options: ["David", "Solomon", "Saul", "Samuel"],
        answer: "Saul"
    },
    {
        question: "How many days and nights did it rain during the flood?",
        options: ["30", "40", "50", "60"],
        answer: "40"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    const question = questions[currentQuestionIndex];

    questionArea.innerHTML = `<h2>${question.question}</h2>`;
    optionsArea.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, button);
        optionsArea.appendChild(button);
    });
}

function checkAnswer(selectedOption, button) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }
    document.getElementById('score-area').innerText = `Score: ${score}`;
    disableButtons();
}

function disableButtons() {
    const buttons = document.querySelectorAll('#options-area button');
    buttons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const questionArea = document.getElementById('question-area');
    const optionsArea = document.getElementById('options-area');
    questionArea.innerHTML = `<h2>Quiz Complete!</h2>`;
    optionsArea.innerHTML = `<h3>Your final score is: ${score}</h3>`;
    document.getElementById('next-btn').style.display = 'none';
}

window.onload = displayQuestion;