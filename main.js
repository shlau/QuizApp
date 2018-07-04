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
            correct: "Sacramento"
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
            correct: "4"
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
            correct: "1969"
        }
    ]


    const quizContents = []
    
    function buildQuiz() {
        const card = document.getElementById("card");
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
        
    }
    buildQuiz();
    showResult();
}