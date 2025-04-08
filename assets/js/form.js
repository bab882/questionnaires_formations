$(document).ready(function() {
    $("input[type='radio']").change(saveData);

    $("#society, #name, #firstname").on("blur", saveData);

    function saveData() {
        var results = {};

        // Récupération des données avec le name
        $("input[type='radio']:checked").each(function() {
            results[$(this).attr("name")] = $(this).val();
        });

        // Récupération des données avec l'id
        results["society"] = $("#society").val().trim();
        results["name"] = $("#name").val().trim();
        results["firstname"] = $("#firstname").val().trim();

        sessionStorage.setItem("quizResults", JSON.stringify(results));
        console.log("Données sauvegardées :", results);
    }

});
