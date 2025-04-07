

// // Fonction pour afficher et cacher formulaire
// function afficheFormulaire() {
//     const formulaire1 = document.getElementById("form1");
//     const formulaire2 = document.getElementById("form2");
//     const formulaire3 = document.getElementById("form3");

//     // Si formulaire1 est visible, on le cache et on affiche formulaire2
//     if (formulaire1.style.display !== "none") {
//         formulaire1.style.display = "none";
//         formulaire2.style.display = "block";
//     } 
//     // Si formulaire2 est visible, on le cache et on affiche formulaire3
//     else if (formulaire2.style.display !== "none") {
//         formulaire2.style.display = "none";
//         formulaire3.style.display = "block";
//     } 
//     // Si formulaire3 est visible, on le cache 
//     else if (formulaire3.style.display !== "none") {
//         formulaire3.style.display = "none";
//     }
// }

// // Fonction qui s'assure que le DOM est complètement chargé avant d'exécuter le script
// document.addEventListener('DOMContentLoaded', function () {
//     const formulaire1 = document.getElementById("form1");
//     const formulaire2 = document.getElementById("form2");
//     const formulaire3 = document.getElementById("form3"); 

//     formulaire1.style.display = "block";
//     formulaire2.style.display = "none";
//     formulaire3.style.display = "none";

//     // Initialisation des formulaires
//     initFormulaire1();
//     initFormulaire2();
//     initFormulaire3()
// });

// // Fonction pour initialiser l'affichage des questions dans le formulaire 1
// function initFormulaire1() {
//     const questions = document.querySelectorAll("#form1 .quiz-content");
//     const buttons = document.querySelectorAll("#form1 .question-next");
//     const finalButton = document.getElementById("btn_question_suivante");
    

//     // Cacher toutes les questions sauf la première
//     questions.forEach((question, i) => {
//         if (i !== 0) {
//             question.classList.remove("question-visible");
//         }
//     });

//     // Gérer l'affichage des questions et la navigation
//     buttons.forEach((button, i) => {
//         const options = questions[i].querySelectorAll(".response");
//         button.disabled = true;

//         // Activation du bouton suivant lorsque l'utilisateur choisit une réponse
//         options.forEach((option) => {
//             option.addEventListener("change", () => {
//                 button.disabled = false;
//             });
//         });

//         // Change de question lorsqu'on clique sur le bouton "Suivant"
//         button.addEventListener("click", () => {
//             questions[i].classList.remove("question-visible");

//             if (questions[i + 1]) {
//                 questions[i + 1].classList.add("question-visible");
//             }
//         });
//     });
// }

// // Fonction pour initialiser l'affichage des questions dans le formulaire 2
// function initFormulaire2() {
//     const questions2 = document.querySelectorAll("#form2 .quiz-content");
//     const buttons2 = document.querySelectorAll("#form2 .question-next");
//     const finalButton = document.getElementById("btn_question_suivante");

//     // Cacher toutes les questions sauf la première
//     questions2.forEach((question, i) => {
//         if (i !== 0) {
//             question.classList.remove("question-visible");
//         }
//     });

//     // Gérer l'affichage des questions et la navigation
//     buttons2.forEach((button, i) => {
//         const options = questions2[i].querySelectorAll(".response");
//         button.disabled = true;

//         options.forEach((option) => {
//             option.addEventListener("change", () => {
//                 button.disabled = false;
//             });
//         });

//         button.addEventListener("click", () => {
//             questions2[i].classList.remove("question-visible");

//             if (questions2[i + 1]) {
//                 questions2[i + 1].classList.add("question-visible");
//             }
//         });
//     });
// }
// // Fonction pour initialiser l'affichage des questions dans le formulaire 3
// function initFormulaire3() {
//     const questions3 = document.querySelectorAll("#form3 .quiz-content");
//     const buttons3 = document.querySelectorAll("#form3 .question-next");
//     const finalButton = document.getElementById("btn_question_suivante");

//     // Cacher toutes les questions sauf la première
//     questions3.forEach((question, i) => {
//         if (i !== 0) {
//             question.classList.remove("question-visible");
//         }
//     });

//     // Gérer l'affichage des questions et la navigation
//     buttons3.forEach((button, i) => {
//         const options = questions3[i].querySelectorAll(".response");
//         button.disabled = true;

//         options.forEach((option) => {
//             option.addEventListener("change", () => {
//                 button.disabled = false;
//             });
//         });

//         button.addEventListener("click", () => {
//             questions3[i].classList.remove("question-visible");

//             if (questions3[i + 1]) {
//                 questions3[i + 1].classList.add("question-visible");
//             }
//         });
//     });
// }
