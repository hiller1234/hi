const DATA = [
    {
        question: 'Гражданином какой страны вы являетесь?',
        answers: [
            {
                id: '0',
                value: 'Таджикистан'
            },
             {
                id: '1',
                value: 'Узбекистан'
            },
             {
                id: '2',
                value: 'Киргизия'
            },
            {
                id: '3',
                value: 'Украина'
            },
            {
                id: '4',
                value: 'Другая страна'
            },
        ]
    },
    
    {
        question: 'В каком регионе Вы находитесь?',
        answers: [
            {
                id: '0',
                value: 'Москва'
            },
             {
                id: '1',
                value: 'Московская Область'
            },
             {
                id: '2',
                value: 'Другой регион'
            },
        ]
    },
    
    {
        question: 'Введите ваш возраст',
        answers: [
            {
                id: '0',
                value: '18-22'
            },
            {
                id: '1',
                value: '22-30'
            },
            {
                id: '2',
                value: '30-45'
            },
            {
                id: '3',
                value: '45-60'
            },
            {
                id: '4',
                value: '60+'
            },
        ]
    },
    
    {
        question: 'Сколько лет проживаете на территории РФ?',
        answers: [
            {
                id: '0',
                value: 'Ответ 1'
            },
             {
                id: '1',
                value: 'Ответ 2'
            },
             {
                id: '2',
                value: 'Ответ 3'
            },
        ]
    },
    
    {
        question: 'Какой вид документов вам нужен?',
        answers: [
            {
                id: '0',
                value: 'РВП'
            },
             {
                id: '1',
                value: 'ВНЖ'
            },
             {
                id: '2',
                value: 'Гражданство РФ'
            },
            {
                id: '3',
                value: 'Другой вопрос'
            },
        ]
    },
    
    {
        question: 'Есть ли у вас близкие родственники, являющиеся гражданами РФ?',
        answers: [
            {
                id: '0',
                value: 'Ответ 1'
            },
             {
                id: '1',
                value: 'Ответ 2'
            },
             {
                id: '2',
                value: 'Ответ 3'
            },
        ]
    },
];

let localResults = {
    
};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btn = document.getElementById('btn');

const renderQuestions = (index) => {
    renderIndicator (index + 1);
    
    questions.dataset.currentStep = index;
    
    const renderAnswers = () => DATA[index].answers
    .map((answer) =>
             `
                <li>
                    <label>
                        <input class="answer__input" type="radio" name=${index} value=${answer.id}>
                        ${answer.value}
                    </label>
                </li>
           `
        )
      .join('');
    questions.innerHTML = `
     <div class="quiz__questions-item">
            <div class="quiz__questions-item_question">
                ${DATA[index].question}
            </div>
            <ul class="quiz__questions-item_answers">${renderAnswers()}</ul>
            </div>
    `;
};

const renderResults = () => {};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    if (event.target.classList.contains('answer__input')) {
        localResults[event.target.name] = event.target.value;
        btn.disabled = false;
        
        
    }
})

quiz.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('btn')) {
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1
        
        if (DATA.length === nextQuestionIndex) {
            
        } else {
            renderQuestions(nextQuestionIndex);
        }
        
        btn.disabled = true; 
    }
})

renderQuestions(0);