var x = document.getElementById("btn_oui_1");
console.log(x);


// Fonction pour ouvrir le Quiz
function openFormulaire() {
    // Récupération des champs
    const societe = document.querySelector(".societe");
    const name = document.querySelector(".name");
    const firstname = document.querySelector(".firstname");
    const alertForm = document.querySelector(".alert-form");

    const message = document.querySelector(".alert-danger");
    if(message) {
        message.remove();
    }

    // Vérification si les champs sont remplis
    if (!societe || societe.value.trim() === "") {
        const messageError = document.createElement("div");
        messageError.className = "alert alert-danger";
        messageError.textContent = "Veuillez remplir votre société";
        alertForm ? alertForm.appendChild(messageError) : document.body.appendChild(messageError);
        return;
    }
    if(!name || name.value.trim() === ""){
        const messageError = document.createElement("div");
        messageError.className = "alert alert-danger";
        messageError.textContent = "Veuillez remplir votre nom";
        alertForm ? alertForm.appendChild(messageError) : document.body.appendChild(messageError);
        return;
    }
    if(!firstname || firstname.value.trim() === ""){
        const messageError = document.createElement("div");
        messageError.className = "alert alert-danger";
        messageError.textContent = "Veuillez remplir votre prénom";
        alertForm ? alertForm.appendChild(messageError) : document.body.appendChild(messageError);
        return;
    }


    // Si le champ est rempli, on ouvre le formulaire
    window.location.href = "N1_01.html";
}

// Fonction pour afficher et cacher formulaire
function afficheFormulaire() {
    const formulaire0 = document.getElementById("form0");
    const formulaire1 = document.getElementById("form1");
    const formulaire2 = document.getElementById("form2");
    const formulaire3 = document.getElementById("form3");

    if(formulaire0.style.display !== "none") {
        formulaire0.style.display = "none";
        formulaire1.style.display = "block";
        formulaire2.style.display = "none";
        formulaire3.style.display = "none";
    }
    else if (formulaire1.style.display !== "none") {
        formulaire1.style.display = "none";
        formulaire2.style.display = "block";
        formulaire3.style.display = "none";
    } else if (formulaire2.style.display !== "none") {
        formulaire2.style.display = "none";
        formulaire3.style.display = "block";
    } else if (formulaire3.style.display !== "none"){
        alert("Tous les formulaires sont remplis.");
    }
}

// Fonction qui s'assure que le DOM est complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function () {
    const formulaire0 = document.getElementById("form0")
    const formulaire1 = document.getElementById("form1");
    const formulaire2 = document.getElementById("form2");
    const formulaire3 = document.getElementById("form3");
    
    formulaire0.style.display = "block";
    formulaire1.style.display = "none";
    formulaire2.style.display = "none";
    formulaire3.style.display = "none";

    // Initialisation des formulaires
    initFormulaire1();
    initFormulaire2();
    initFormulaire3();
});

// Fonction pour initialiser l'affichage des questions dans le formulaire 1
function initFormulaire1() {
    const questions = document.querySelectorAll("#form1 .quiz-content");
    const buttons = document.querySelectorAll("#form1 .question-next");
    const contentEnd = document.getElementById("contentEnd");
    const finalButton = document.getElementById("btn_question_suivante");
    const finalTitle = document.getElementById("endForm");

    // Cacher toutes les questions sauf la première
    questions.forEach((question, i) => {
        if (i !== 0) {
            question.classList.remove("question-visible");
        }
    });

    // Gérer l'affichage des questions et la navigation
    buttons.forEach((button, i) => {
        const options = questions[i].querySelectorAll(".response");
        button.disabled = true;
        button.style.display = 'none';

        // Activation du bouton suivant lorsque l'utilisateur choisit une réponse
        options.forEach((option) => {
            option.addEventListener("change", () => {
                button.disabled = false;
                button.style.display = 'block';
            });
        });

        // Change de question lorsqu'on clique sur le bouton "Suivant"
        button.addEventListener("click", () => {
            questions[i].classList.remove("question-visible");

            if (questions[i + 1]) {
                questions[i + 1].classList.add("question-visible");
            }

            // Vérifie si toutes les questions ont été répondues
            if (areAllQuestionsAnswered(questions)) {
                contentEnd.style.display = "block";
                finalTitle.style.display = "block"; // Affiche le titre de fin 
                finalButton.style.display = "block"; // Affiche le bouton "Suivant" final
            }
        });
    });
}

// Fonction pour vérifier si toutes les questions dans le formulaire 1 ont été répondues
function areAllQuestionsAnswered(questions) {
    return Array.from(questions).every((question) => {
        const options = question.querySelectorAll(".response");
        return Array.from(options).some(option => option.checked); // Vérifie si au moins une option est sélectionnée
    });
}

// Fonction pour initialiser l'affichage des questions dans le formulaire 2
function initFormulaire2() {
    const questions2 = document.querySelectorAll("#form2 .quiz-content");
    const buttons2 = document.querySelectorAll("#form2 .question-next");
    const finalButton = document.getElementById("btn_question_suivante");

    // Cacher toutes les questions sauf la première
    questions2.forEach((question, i) => {
        if (i !== 0) {
            question.classList.remove("question-visible");
        }
    });

    // Gérer l'affichage des questions et la navigation
    buttons2.forEach((button, i) => {
        const options = questions2[i].querySelectorAll(".response");
        button.disabled = true;

        options.forEach((option) => {
            option.addEventListener("change", () => {
                button.disabled = false;
            });
        });

        button.addEventListener("click", () => {
            questions2[i].classList.remove("question-visible");

            if (questions2[i + 1]) {
                questions2[i + 1].classList.add("question-visible");
            }

            // Vérifie si toutes les questions ont été répondues
            if (areAllQuestionsAnswered(questions2)) {
                finalButton.style.display = "block"; // Affiche le bouton "Suivant" final
            }

            if (areAllQuestionsAnswered(questions2)) {
                finalButton.style.display = "block"; // Affiche le bouton "Suivant" final
            }
        });
    });
}

function initFormulaire3() {
    const questions2 = document.querySelectorAll("#form3 .quiz-content");
    const buttons2 = document.querySelectorAll("#form3 .question-next");
    const finalButton = document.getElementById("btn_question_suivante");

    // Cacher toutes les questions sauf la première
    questions2.forEach((question, i) => {
        if (i !== 0) {
            question.classList.remove("question-visible");
        }
    });

    // Gérer l'affichage des questions et la navigation
    buttons2.forEach((button, i) => {
        const options = questions2[i].querySelectorAll(".response");
        button.disabled = true;

        options.forEach((option) => {
            option.addEventListener("change", () => {
                button.disabled = false;
            });
        });

        button.addEventListener("click", () => {
            questions2[i].classList.remove("question-visible");

            if (questions2[i + 1]) {
                questions2[i + 1].classList.add("question-visible");
            }

            // Vérifie si toutes les questions ont été répondues
            if (areAllQuestionsAnswered(questions2)) {
                finalButton.style.display = "block"; // Affiche le bouton "Suivant" final
            }

            if (areAllQuestionsAnswered(questions2)) {
                finalButton.style.display = "block"; // Affiche le bouton "Suivant" final
            }
        });
    });
}

function areAllQuestionsAnswered(questions2) {
    return Array.from(questions2).every((questions2) => {
        const options = questions2.querySelectorAll(".response");
        return Array.from(options).some(option => option.checked); // Vérifie si au moins une option est sélectionnée
    });
}


$(document).ready(function() {

    $("input[type='radio']").change(function() {

        const results = {};

        $("input[type='radio']:checked").each(function() {
            results[$(this).attr("name")] = $(this).val();
        });
        console.log(results);
        sessionStorage.setItem('quizResults', JSON.stringify(results));
    });
});