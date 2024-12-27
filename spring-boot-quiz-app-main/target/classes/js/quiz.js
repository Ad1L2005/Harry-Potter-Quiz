

document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container"); 
    const submitButton = document.querySelector("form button[type='submit']"); 

    function highlightCorrectAnswers(correctAnswers) {
        const questionElements = document.querySelectorAll(".ques-box");

        questionElements.forEach((question, index) => {
            const options = question.querySelectorAll(".option input");

            options.forEach(option => {
                const optionValue = parseInt(option.value);
                const isCorrect = correctAnswers[index] === optionValue;

                if (isCorrect) {
                    option.parentElement.style.backgroundColor = "#28a745"; 
                } else if (option.checked) {
                    option.parentElement.style.backgroundColor = "#dc3545"; 
                }
            });
        });
    }

    function submitAnswers(event) {
        event.preventDefault();

        const form = event.target.closest("form");
        const formData = new FormData(form);
        const answers = [];

        for (let [key, value] of formData.entries()) {
            if (key.includes("chose")) {
                answers.push(parseInt(value));
            }
        }

        fetch("/api/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ answers }),
        })
            .then(response => response.json())
            .then(data => {
                highlightCorrectAnswers(data.correctAnswers);
                alert("Your score: " + data.score);
            })
            .catch(error => console.error("Error submitting answers:", error));
    }

    function showModal(message) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <p>${message}</p>
                <button id="close-modal">OK</button>
            </div>`;
        document.body.appendChild(modal);
    
        document.getElementById('close-modal').addEventListener('click', () => {
            modal.remove();
        });
    }

    submitButton.addEventListener("click", submitAnswers);
});
