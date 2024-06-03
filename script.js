document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const nextBtn = document.getElementById('next-btn');
    const resultsContainer = document.getElementById('results-container');

    const questions = [
        {
            question: "O que significa HTML?",
            answers: {
                a: "Hyper Trainer Marking Language",
                b: "Hyper Text Marketing Language",
                c: "Hyper Text Markup Language",
                d: "Hyper Text Markup Leveler"
            },
            correctAnswer: "c"
        },
        {
            question: "Qual tag HTML é usada para definir um link?",
            answers: {
                a: "<a>",
                b: "<link>",
                c: "<href>",
                d: "<url>"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é a tag correta para um parágrafo em HTML?",
            answers: {
                a: "<p>",
                b: "<par>",
                c: "<paragrafo>",
                d: "<pg>"
            },
            correctAnswer: "a"
        },
        {
            question: "Como você insere um comentário em um arquivo HTML?",
            answers: {
                a: "// Isso é um comentario ",
                b: "/* Isso é um comentario  */",
                c: "<!-- Isso é um comentario  -->",
                d: "'Isso é um comentario "
            },
            correctAnswer: "c"
        },
        {
            question: "Qual é a tag HTML usada para definir uma lista não ordenada?",
            answers: {
                a: "<ol>",
                b: "<ul>",
                c: "<li>",
                d: "<list>"
            },
            correctAnswer: "b"
        },
        {
            question: "Qual atributo HTML é usado para definir o texto alternativo de uma imagem?",
            answers: {
                a: "alt",
                b: "title",
                c: "src",
                d: "longdesc"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é o elemento HTML correto para inserir uma quebra de linha?",
            answers: {
                a: "<lb>",
                b: "<break>",
                c: "<br>",
                d: "<newline>"
            },
            correctAnswer: "c"
        },
        {
            question: "Como você cria uma tabela em HTML?",
            answers: {
                a: "<table><tr><td></td></tr></table>",
                b: "<table><td><tr></tr></td></table>",
                c: "<table><row><column></column></row></table>",
                d: "<table><tr><table></table></tr></table>"
            },
            correctAnswer: "a"
        },
        {
            question: "Qual é o elemento HTML usado para definir um título grande?",
            answers: {
                a: "<heading>",
                b: "<h1>",
                c: "<header>",
                d: "<head>"
            },
            correctAnswer: "b"
        },
        {
            question: "Qual é o atributo HTML usado para definir estilos embutidos?",
            answers: {
                a: "class",
                b: "font",
                c: "style",
                d: "styles"
            },
            correctAnswer: "c"
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function escapeHTML(html) {
        return html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        let answers = '';

        for (let letter in currentQuestion.answers) {
            answers += `
                <li>
                    <label>
                        <input type="radio" name="question${currentQuestionIndex}" value="${letter}">
                        ${letter}: ${escapeHTML(currentQuestion.answers[letter])}
                    </label>
                </li>
            `;
        }

        quizContainer.innerHTML = `
            <div class="question">
                <h3>Questão ${currentQuestionIndex + 1}/${questions.length}</h3>
                <h3>${currentQuestion.question}</h3>
                <ul class="answers">${answers}</ul>
            </div>
        `;

        const labels = quizContainer.querySelectorAll('.answers label');
        labels.forEach(label => {
            label.addEventListener('click', () => {
                labels.forEach(label => label.classList.remove('selected'));
                label.classList.add('selected');
            });
        });

        nextBtn.innerText = currentQuestionIndex === questions.length - 1 ? 'Enviar' : 'Próxima';
        nextBtn.style.display = 'block';
    }

    function showResults() {
        let numCorrect = 0;
        let correctAnswers = [];
        let incorrectAnswers = [];

        questions.forEach((currentQuestion, questionNumber) => {
            const userAnswer = userAnswers[questionNumber];
            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                correctAnswers.push(questionNumber + 1);
            } else {
                incorrectAnswers.push(questionNumber + 1);
            }
        });

        const percentage = (numCorrect / questions.length) * 100;
        let performance = '';

        if (percentage >= 80) {
            performance = 'Foi muito bem!';
        } else if (percentage >= 50) {
            performance = 'Foi mais ou menos.';
        } else {
            performance = 'Foi mal.';
        }

        resultsContainer.innerHTML = `
            <p>Você acertou ${numCorrect} de ${questions.length} questões.</p>
            <p>Questões corretas: ${correctAnswers.join(', ')}</p>
            <p>Questões incorretas: ${incorrectAnswers.join(', ')}</p>
            <p>${performance}</p>
        `;
        resultsContainer.style.display = 'block';
        quizContainer.style.display = 'none';
        nextBtn.style.display = 'none';
    }

    function highlightAnswers() {
        const answerContainers = quizContainer.querySelectorAll('.answers li label');
        const currentQuestion = questions[currentQuestionIndex];
        const selectedOption = document.querySelector(`input[name=question${currentQuestionIndex}]:checked`);
        const userAnswer = (selectedOption || {}).value;

        for (let label of answerContainers) {
            const input = label.querySelector('input');
            if (input.value === currentQuestion.correctAnswer) {
                label.classList.add('correct');
            } else {
                label.classList.add('incorrect');
            }
        }

        userAnswers[currentQuestionIndex] = userAnswer;
        currentQuestionIndex++;
        
        nextBtn.innerText = currentQuestionIndex === questions.length ? 'Ver Resultados' : 'Próxima';
    }

    function nextQuestion() {
        if (currentQuestionIndex < questions.length) {
            if (document.querySelector(`input[name=question${currentQuestionIndex}]:checked`)) {
                highlightAnswers();
                nextBtn.style.display = 'none';
                setTimeout(() => {
                    if (currentQuestionIndex < questions.length) {
                        showQuestion();
                    } else {
                        showResults();
                    }
                }, 2000); // Aguardar 2 segundos antes de mostrar a próxima pergunta ou resultados
            } else {
                alert('Por favor, selecione uma resposta.');
            }
        }
    }

    nextBtn.addEventListener('click', nextQuestion);

    showQuestion();
});
