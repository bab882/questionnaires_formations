$(document).ready(function() {
    

    $("#society, #name, #firstname").on("blur", saveData);
    $("input[type='radio']").change(saveData);
    function saveData() {
        var results = {};

        // Récupération des données avec le name
        

        // Récupération des données avec l'id
        results["society"] = $("#society").val().trim();
        results["name"] = $("#name").val().trim();
        results["firstname"] = $("#firstname").val().trim();

        $("input[type='radio']:checked").each(function() {
            results[$(this).attr("name")] = $(this).val();
        });

        sessionStorage.setItem("quizResults", JSON.stringify(results));
        console.log("Données sauvegardées :", results);
    }

});
