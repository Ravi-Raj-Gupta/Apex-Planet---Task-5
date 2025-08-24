// Quiz Data - JSON format for easy updates
const quizData = {
    'general-knowledge': {
        title: 'General Knowledge Quiz',
        questions: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                correct: 2,
                explanation: "Canberra is the capital city of Australia, located in the Australian Capital Territory."
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1,
                explanation: "Mars is called the Red Planet due to iron oxide (rust) on its surface."
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correct: 3,
                explanation: "The Pacific Ocean is the largest and deepest ocean on Earth."
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1,
                explanation: "Leonardo da Vinci painted the famous Mona Lisa during the Renaissance."
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
                correct: 1,
                explanation: "Vatican City is the smallest sovereign nation in the world by both area and population."
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Osmium", "Oxygen", "Gold", "Silver"],
                correct: 1,
                explanation: "Oxygen is represented by the chemical symbol 'O' on the periodic table."
            },
            {
                question: "What year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correct: 1,
                explanation: "World War II officially ended in 1945 with Japan's surrender in September."
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correct: 1,
                explanation: "The Nile River in Africa is traditionally considered the longest river in the world."
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2,
                explanation: "There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Australia/Oceania, and South America."
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Platinum"],
                correct: 2,
                explanation: "Diamond is the hardest known natural substance, scoring 10 on the Mohs scale."
            }
        ]
    },
    'science': {
        title: 'Science Quiz',
        questions: [
            {
                question: "What is the speed of light in a vacuum?",
                options: ["299,792,458 m/s", "150,000,000 m/s", "300,000,000 m/s", "250,000,000 m/s"],
                correct: 0,
                explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second."
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "NaCl", "CH4"],
                correct: 0,
                explanation: "Water consists of two hydrogen atoms bonded to one oxygen atom (H2O)."
            },
            {
                question: "Which gas makes up about 78% of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
                correct: 2,
                explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere."
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
                correct: 1,
                explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP energy."
            },
            {
                question: "What force keeps planets in orbit around the sun?",
                options: ["Magnetic Force", "Nuclear Force", "Gravitational Force", "Electromagnetic Force"],
                correct: 2,
                explanation: "Gravitational force between the sun and planets keeps them in orbital motion."
            },
            {
                question: "At what temperature does water boil at sea level?",
                options: ["90°C", "95°C", "100°C", "105°C"],
                correct: 2,
                explanation: "Water boils at 100°C (212°F) at standard atmospheric pressure at sea level."
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
                correct: 3,
                explanation: "Hydrogen is the most abundant element, making up about 75% of normal matter in the universe."
            },
            {
                question: "How many bones are in an adult human body?",
                options: ["196", "206", "216", "226"],
                correct: 1,
                explanation: "An adult human skeleton typically has 206 bones."
            },
            {
                question: "What is the center of an atom called?",
                options: ["Electron", "Proton", "Neutron", "Nucleus"],
                correct: 3,
                explanation: "The nucleus is the dense central core of an atom containing protons and neutrons."
            },
            {
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: 3,
                explanation: "Type O negative blood is considered the universal donor type."
            }
        ]
    },
    'history': {
        title: 'History Quiz',
        questions: [
            {
                question: "In which year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correct: 2,
                explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg."
            },
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Alan Shepard"],
                correct: 1,
                explanation: "Neil Armstrong was the first human to step onto the lunar surface on July 20, 1969."
            },
            {
                question: "Which ancient wonder of the world was located in Alexandria?",
                options: ["Colossus of Rhodes", "Lighthouse of Alexandria", "Hanging Gardens", "Temple of Artemis"],
                correct: 1,
                explanation: "The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders of the Ancient World."
            },
            {
                question: "What year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2,
                explanation: "The Berlin Wall fell on November 9, 1989, marking a key moment in German reunification."
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
                correct: 2,
                explanation: "George Washington served as the first President of the United States from 1789 to 1797."
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Greek Empire", "Roman Empire", "Persian Empire", "Egyptian Empire"],
                correct: 1,
                explanation: "Julius Caesar was a Roman general and statesman who ruled the Roman Empire."
            },
            {
                question: "What year did World War I begin?",
                options: ["1912", "1913", "1914", "1915"],
                correct: 2,
                explanation: "World War I began in 1914 following the assassination of Archduke Franz Ferdinand."
            },
            {
                question: "Which country gifted the Statue of Liberty to the United States?",
                options: ["Britain", "Spain", "France", "Italy"],
                correct: 2,
                explanation: "France gifted the Statue of Liberty to the United States in 1886."
            },
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"],
                correct: 3,
                explanation: "Thomas Jefferson was the primary author of the Declaration of Independence in 1776."
            },
            {
                question: "Which civilization built Machu Picchu?",
                options: ["Aztec", "Maya", "Inca", "Olmec"],
                correct: 2,
                explanation: "Machu Picchu was built by the Inca civilization in the 15th century."
            }
        ]
    },
    'sports': {
        title: 'Sports Quiz',
        questions: [
            {
                question: "How many players are on a basketball team on the court at one time?",
                options: ["4", "5", "6", "7"],
                correct: 1,
                explanation: "Each basketball team has 5 players on the court at any given time."
            },
            {
                question: "In which sport would you perform a slam dunk?",
                options: ["Volleyball", "Tennis", "Basketball", "Baseball"],
                correct: 2,
                explanation: "A slam dunk is a basketball shot where a player jumps and scores by putting the ball directly through the hoop."
            },
            {
                question: "How often are the Summer Olympic Games held?",
                options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
                correct: 2,
                explanation: "The Summer Olympic Games are held every 4 years."
            },
            {
                question: "What is the maximum score possible in ten-pin bowling?",
                options: ["200", "250", "300", "350"],
                correct: 2,
                explanation: "A perfect game in ten-pin bowling scores 300 points with 12 consecutive strikes."
            },
            {
                question: "In soccer, how many players are on the field for each team?",
                options: ["10", "11", "12", "13"],
                correct: 1,
                explanation: "Each soccer team has 11 players on the field, including one goalkeeper."
            },
            {
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Argentina", "Italy", "Brazil"],
                correct: 3,
                explanation: "Brazil has won the FIFA World Cup 5 times, more than any other country."
            },
            {
                question: "In tennis, what does '40-40' mean?",
                options: ["Game point", "Set point", "Deuce", "Match point"],
                correct: 2,
                explanation: "In tennis scoring, when both players have 40 points, it's called 'deuce'."
            },
            {
                question: "How many holes are played in a standard round of golf?",
                options: ["16", "17", "18", "19"],
                correct: 2,
                explanation: "A standard round of golf consists of 18 holes."
            },
            {
                question: "Which sport is known as 'America's Pastime'?",
                options: ["Basketball", "Football", "Baseball", "Hockey"],
                correct: 2,
                explanation: "Baseball is traditionally known as 'America's Pastime'."
            },
            {
                question: "In which sport would you use a shuttlecock?",
                options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
                correct: 1,
                explanation: "Badminton is played with a shuttlecock (or birdie) instead of a ball."
            }
        ]
    },
    'movies': {
        title: 'Movies Quiz',
        questions: [
            {
                question: "Which movie won the Academy Award for Best Picture in 2020?",
                options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
                correct: 2,
                explanation: "Parasite made history by becoming the first non-English film to win Best Picture."
            },
            {
                question: "Who directed the movie 'Jaws'?",
                options: ["George Lucas", "Steven Spielberg", "Martin Scorsese", "Francis Ford Coppola"],
                correct: 1,
                explanation: "Steven Spielberg directed the 1975 thriller 'Jaws'."
            },
            {
                question: "In which movie does the character say 'May the Force be with you'?",
                options: ["Star Trek", "Star Wars", "Guardians of the Galaxy", "Avatar"],
                correct: 1,
                explanation: "'May the Force be with you' is an iconic phrase from the Star Wars franchise."
            },
            {
                question: "What is the highest-grossing film of all time?",
                options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
                correct: 1,
                explanation: "Avengers: Endgame became the highest-grossing film with over $2.7 billion worldwide."
            },
            {
                question: "Which actor played the Joker in 'The Dark Knight'?",
                options: ["Jack Nicholson", "Joaquin Phoenix", "Heath Ledger", "Mark Hamill"],
                correct: 2,
                explanation: "Heath Ledger's posthumous Oscar-winning performance as the Joker in The Dark Knight is legendary."
            },
            {
                question: "In 'The Matrix', what is Neo's real name?",
                options: ["Thomas Anderson", "John Smith", "David Johnson", "Michael Brown"],
                correct: 0,
                explanation: "Neo's real name in The Matrix is Thomas Anderson."
            },
            {
                question: "Which Disney movie features the song 'Circle of Life'?",
                options: ["The Jungle Book", "The Lion King", "Tarzan", "Moana"],
                correct: 1,
                explanation: "'Circle of Life' is the opening song from Disney's The Lion King."
            },
            {
                question: "Who played Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                correct: 2,
                explanation: "Robert Downey Jr. portrayed Tony Stark/Iron Man throughout the MCU."
            },
            {
                question: "Which movie features the famous line 'Here's looking at you, kid'?",
                options: ["Gone with the Wind", "Casablanca", "The Maltese Falcon", "Citizen Kane"],
                correct: 1,
                explanation: "This iconic line is from the 1942 classic film Casablanca."
            },
            {
                question: "What is the name of the hobbit in 'The Lord of the Rings'?",
                options: ["Bilbo Baggins", "Frodo Baggins", "Samwise Gamgee", "Peregrin Took"],
                correct: 1,
                explanation: "Frodo Baggins is the main hobbit protagonist in The Lord of the Rings trilogy."
            }
        ]
    },
    'coding': {
        title: 'Programming Quiz',
        questions: [
            {
                question: "What does HTML stand for?",
                options: ["Hyperlink Text Markup Language", "Home Tool Markup Language", "HyperText Markup Language", "Hyperlink and Text Markup Language"],
                correct: 2,
                explanation: "HTML stands for HyperText Markup Language, the standard markup language for web pages."
            },
            {
                question: "Which programming language is known as the 'language of the web'?",
                options: ["Python", "Java", "JavaScript", "C++"],
                correct: 2,
                explanation: "JavaScript is often called the 'language of the web' as it runs in all modern browsers."
            },
            {
                question: "What does CSS stand for?",
                options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
                correct: 1,
                explanation: "CSS stands for Cascading Style Sheets, used for styling web pages."
            },
            {
                question: "In programming, what is a function?",
                options: ["A variable", "A reusable block of code", "A data type", "A loop"],
                correct: 1,
                explanation: "A function is a reusable block of code that performs a specific task."
            },
            {
                question: "Which symbol is used for comments in Python?",
                options: ["//", "/* */", "#", ""],
                correct: 2,
                explanation: "In Python, the # symbol is used for single-line comments."
            },
            {
                question: "What does API stand for?",
                options: ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Advanced Process Interface"],
                correct: 0,
                explanation: "API stands for Application Programming Interface, allowing different software applications to communicate."
            },
            {
                question: "Which data structure follows the LIFO principle?",
                options: ["Queue", "Array", "Stack", "Linked List"],
                correct: 2,
                explanation: "A stack follows LIFO (Last In, First Out) principle."
            },
            {
                question: "What is the time complexity of binary search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                correct: 1,
                explanation: "Binary search has O(log n) time complexity as it divides the search space in half each iteration."
            },
            {
                question: "Which HTTP status code indicates 'Not Found'?",
                options: ["200", "301", "404", "500"],
                correct: 2,
                explanation: "HTTP status code 404 indicates that the requested resource was not found."
            },
            {
                question: "What does SQL stand for?",
                options: ["Structured Query Language", "Standard Query Language", "System Query Language", "Sequential Query Language"],
                correct: 0,
                explanation: "SQL stands for Structured Query Language, used for managing databases."
            }
        ]
    }
};

// Global Variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 300; // 5 minutes in seconds
let timer = null;
let userAnswers = [];
let quizStartTime = null;

// Theme Management
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.textContent = '🌙';
    }
}

// Page Navigation
function showPage(pageId) {
    // Hide all pages
    const pages = ['home-page', 'quiz-page', 'results-page', 'about-page', 'contact-page'];
    pages.forEach(page => {
        document.getElementById(page).classList.add('hidden');
    });
    
    // Show requested page
    document.getElementById(pageId + '-page').classList.remove('hidden');
    
    // Stop timer if navigating away from quiz
    if (pageId !== 'quiz' && timer) {
        clearInterval(timer);
        timer = null;
    }
}

// Quiz Functions
function startQuiz(category) {
    currentQuiz = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    timeLeft = 300; // Reset timer
    quizStartTime = Date.now();
    
    // Shuffle questions for variety
    currentQuiz.questions = shuffleArray([...currentQuiz.questions]);
    
    showPage('quiz');
    displayQuestion();
    startTimer();
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    
    // Update quiz title
    document.getElementById('quiz-title').textContent = currentQuiz.title;
    
    // Update progress
    document.getElementById('question-progress').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    document.getElementById('score-display').textContent = `Score: ${score}`;
    
    const progressPercent = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    
    // Display question
    document.getElementById('question-text').textContent = question.question;
    
    // Shuffle options
    const shuffledOptions = question.options.map((option, index) => ({ option, originalIndex: index }));
    shuffleArray(shuffledOptions);
    
    // Display options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    shuffledOptions.forEach((item, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.onclick = () => selectOption(optionDiv, item.originalIndex);
        
        optionDiv.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <div>${item.option}</div>
        `;
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Reset next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question →';
    
    // Add animation
    questionContainer.classList.remove('fade-in');
    setTimeout(() => questionContainer.classList.add('fade-in'), 10);
}

function selectOption(selectedDiv, answerIndex) {
    // Remove previous selections
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Mark as selected
    selectedDiv.classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    
    // Check if answer is correct
    if (userAnswer === question.correct) {
        score++;
    }
    
    // Show correct answer briefly
    showCorrectAnswer();
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < currentQuiz.questions.length) {
            displayQuestion();
        } else {
            finishQuiz();
        }
    }, 1500); // Show answer for 1.5 seconds
}

function showCorrectAnswer() {
    const question = currentQuiz.questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');
    const userAnswer = userAnswers[currentQuestionIndex];
    
    options.forEach((option, index) => {
        const originalIndex = getOriginalIndex(option, question);
        
        if (originalIndex === question.correct) {
            option.classList.add('correct');
        } else if (originalIndex === userAnswer && userAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
        
        option.onclick = null; // Disable clicking
    });
    
    // Disable next button temporarily
    document.getElementById('next-btn').disabled = true;
}

function getOriginalIndex(optionElement, question) {
    const optionText = optionElement.querySelector('div:last-child').textContent;
    return question.options.indexOf(optionText);
}

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    
    timer = setInterval(() => {
        timeLeft--;
        
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Change color when time is running low
        if (timeLeft <= 60) {
            timerDisplay.style.background = 'var(--error-color)';
            timerDisplay.classList.add('pulse');
        } else if (timeLeft <= 120) {
            timerDisplay.style.background = 'var(--warning-color)';
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);
}

function finishQuiz() {
    clearInterval(timer);
    
    // Calculate final stats
    const totalQuestions = currentQuiz.questions.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((score / totalQuestions) * 100);
    const timeTaken = Math.floor((Date.now() - quizStartTime) / 1000);
    
    // Save score to leaderboard
    saveScore(currentQuiz.title, percentage, timeTaken);
    
    // Display results
    displayResults(correctAnswers, incorrectAnswers, percentage, timeTaken);
    showPage('results');
}

function displayResults(correct, incorrect, percentage, timeTaken) {
    // Update score circle
    const scoreCircle = document.getElementById('score-circle');
    const degrees = (percentage / 100) * 360;
    scoreCircle.style.background = `conic-gradient(var(--success-color) 0deg ${degrees}deg, var(--border-color) ${degrees}deg 360deg)`;
    
    document.getElementById('final-percentage').textContent = percentage + '%';
    
    // Update stats
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('incorrect-count').textContent = incorrect;
    document.getElementById('time-taken').textContent = formatTime(timeTaken);
    document.getElementById('accuracy').textContent = percentage + '%';
    
    // Performance badge
    const badge = document.getElementById('performance-badge');
    if (percentage >= 80) {
        badge.textContent = '🎉 Excellent!';
        badge.className = 'performance-badge performance-excellent';
    } else if (percentage >= 60) {
        badge.textContent = '👍 Good Job!';
        badge.className = 'performance-badge performance-good';
    } else {
        badge.textContent = '📚 Keep Learning!';
        badge.className = 'performance-badge performance-needs-improvement';
    }
    
    // Generate detailed review
    generateQuestionReview();
}

function generateQuestionReview() {
    const reviewContainer = document.getElementById('question-review');
    reviewContainer.innerHTML = '';
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        const reviewItem = document.createElement('div');
        reviewItem.style.cssText = `
            border: 1px solid var(--border-color);
            border-radius: 0.5rem;
            padding: 1rem;
            margin-bottom: 1rem;
            background: var(--bg-color);
        `;
        
        reviewItem.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="color: ${isCorrect ? 'var(--success-color)' : 'var(--error-color)'};">
                    ${isCorrect ? '✅' : '❌'}
                </span>
                <strong>Question ${index + 1}</strong>
            </div>
            <p style="margin-bottom: 0.5rem; color: var(--text-primary);">${question.question}</p>
            <p style="margin-bottom: 0.25rem;"><strong>Your answer:</strong> 
                <span style="color: ${isCorrect ? 'var(--success-color)' : 'var(--error-color)'};">
                    ${userAnswer !== undefined ? question.options[userAnswer] : 'Not answered'}
                </span>
            </p>
            <p style="margin-bottom: 0.5rem;"><strong>Correct answer:</strong> 
                <span style="color: var(--success-color);">${question.options[question.correct]}</span>
            </p>
            <p style="font-size: 0.875rem; color: var(--text-secondary); font-style: italic;">
                ${question.explanation}
            </p>
        `;
        
        reviewContainer.appendChild(reviewItem);
    });
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function saveScore(quizTitle, percentage, timeTaken) {
    let scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
    
    const newScore = {
        quiz: quizTitle,
        score: percentage,
        time: timeTaken,
        date: new Date().toLocaleDateString()
    };
    
    scores.unshift(newScore);
    scores = scores.slice(0, 10); // Keep only top 10 scores
    
    localStorage.setItem('quizScores', JSON.stringify(scores));
    updateLeaderboard();
}

function updateLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
    const leaderboardList = document.getElementById('recent-scores');
    
    if (scores.length === 0) {
        leaderboardList.innerHTML = `
            <li class="leaderboard-item">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span class="rank">1</span>
                    <span>No scores yet - Take your first quiz!</span>
                </div>
            </li>
        `;
        return;
    }
    
    leaderboardList.innerHTML = '';
    
    scores.forEach((score, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'leaderboard-item';
        
        listItem.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="rank">${index + 1}</span>
                <div>
                    <div style="font-weight: 600; color: var(--text-primary);">${score.quiz}</div>
                    <div style="font-size: 0.875rem; color: var(--text-secondary);">${score.date}</div>
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: 600; color: var(--primary-color);">${score.score}%</div>
                <div style="font-size: 0.875rem; color: var(--text-secondary);">${formatTime(score.time)}</div>
            </div>
        `;
        
        leaderboardList.appendChild(listItem);
    });
}

function retakeQuiz() {
    if (currentQuiz) {
        startQuiz(getCurrentQuizCategory());
    }
}

function getCurrentQuizCategory() {
    // Find the category based on current quiz title
    for (let category in quizData) {
        if (quizData[category].title === currentQuiz.title) {
            return category;
        }
    }
    return 'general-knowledge'; // Default fallback
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    // Only handle keyboard shortcuts on quiz page
    if (!document.getElementById('quiz-page').classList.contains('hidden')) {
        if (event.key >= '1' && event.key <= '4') {
            const optionIndex = parseInt(event.key) - 1;
            const options = document.querySelectorAll('.option');
            if (options[optionIndex]) {
                options[optionIndex].click();
            }
        } else if (event.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            if (!nextBtn.disabled) {
                nextBtn.click();
            }
        } else if (event.key === 'Escape') {
            if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
                showPage('home');
            }
        }
    }
});

// Auto-save progress (in case user accidentally closes browser)
function saveQuizProgress() {
    if (currentQuiz && !document.getElementById('quiz-page').classList.contains('hidden')) {
        const progress = {
            category: getCurrentQuizCategory(),
            questionIndex: currentQuestionIndex,
            score: score,
            userAnswers: userAnswers,
            timeLeft: timeLeft,
            timestamp: Date.now()
        };
        localStorage.setItem('quizProgress', JSON.stringify(progress));
    }
}

function loadQuizProgress() {
    const progress = JSON.parse(localStorage.getItem('quizProgress') || 'null');
    
    if (progress && Date.now() - progress.timestamp < 1800000) { // 30 minutes
        if (confirm('You have an unfinished quiz. Would you like to continue where you left off?')) {
            currentQuiz = quizData[progress.category];
            currentQuestionIndex = progress.questionIndex;
            score = progress.score;
            userAnswers = progress.userAnswers;
            timeLeft = progress.timeLeft;
            quizStartTime = Date.now() - (300 - timeLeft) * 1000; // Approximate start time
            
            showPage('quiz');
            displayQuestion();
            startTimer();
            return true;
        }
    }
    
    // Clear old progress
    localStorage.removeItem('quizProgress');
    return false;
}

// Save progress periodically
setInterval(saveQuizProgress, 5000); // Save every 5 seconds during quiz

// Performance optimization - Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Service Worker for offline capability (optional enhancement)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // You can implement a service worker here for offline functionality
        console.log('Service worker support detected');
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    updateLeaderboard();
    lazyLoadImages();
    
    // Check for unfinished quiz
    setTimeout(() => {
        loadQuizProgress();
    }, 1000);
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Preload quiz data for better performance
    console.log('Quiz platform loaded successfully!');
    console.log(`Total quizzes available: ${Object.keys(quizData).length}`);
    
    // Add some interactive elements
    addInteractiveEffects();
});

function addInteractiveEffects() {
    // Add hover effect to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Analytics and user feedback (placeholder for real implementation)
function trackQuizCompletion(category, score, timeSpent) {
    // In a real app, you'd send this to your analytics service
    console.log('Quiz completed:', { category, score, timeSpent });
}

// Add error handling
window.addEventListener('error', function(e) {
    console.error('Application error:', e.error);
    // In production, you might want to show a user-friendly error message
});

// Prevent context menu on touch devices for better UX
document.addEventListener('contextmenu', function(e) {
    if (e.target.closest('.quiz-container')) {
        e.preventDefault();
    }
});

// Handle visibility change (pause timer when tab is not active)
document.addEventListener('visibilitychange', function() {
    if (timer) {
        if (document.hidden) {
            clearInterval(timer);
        } else {
            startTimer();
        }
    }
});