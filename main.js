window.onload = function() {
    const quiz =
    [
        {
            question: "What is the capital of California?",
            answers:
            {
                a:"Sacramento",
                b:"Austin",
                c:"San Francisco",
                d:"Indianapolis"
            },
            correct: "a"
        },
        {
            question: "What is 2+2?",
            answers:
            {
                a:"1",
                b:"-3",
                c:"4",
                d:"14"
            },
            correct: "c"
        },
        {
            question: "When was the first moon landing?",
            answers:
            {
                a:"1969",
                b:"1950",
                c:"1945",
                d:"1983"
            },
            correct: "a"
        }
    ]


    const quizContents = []
    const card = document.getElementById("card");
    const res = document.getElementById("results");
    function buildQuiz() {

        quiz.forEach((currentQuestion,index) => {
            currQ = currentQuestion['question'];
            qHtml = `<div class="question"><p> ${currQ} </p></div>`
            quizContents.push(qHtml);
            ans = currentQuestion['answers'];
            quizContents.push('<div class="answers"><ul>');
            for(choice in ans) {
                const contents = ans[choice];
                const radio = `<li><label><input type="radio" name="question${index}" value=${choice}> ${choice}:${contents}</label></li>`
                quizContents.push(radio);
            }
            quizContents.push('</ul></div>');
        });
        card.innerHTML = quizContents.join("");
        card.innerHTML += `<button class="submit">Submit</button>`
    }
    function showResult() {
        let numCorrect = 0;
        quiz.forEach((currentQuestion,index) => {
            const correctAns = currentQuestion['correct'];
            const selected = document.querySelector(`input[name="question${index}"]:checked`);
            if(selected.value === correctAns) {
                numCorrect += 1;
            }
        });
        results.innerHTML = `<p>correct : ${numCorrect}</p>`;
    }
    buildQuiz();

    const submit = document.querySelector("button");
    submit.addEventListener('click',showResult);
}