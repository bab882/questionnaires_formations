$(document).ready(function() {

    $("input[type='radio']").change(function() {

        let results = {};

        $("input[type='radio']:checked").each(function() {
            results[$(this).attr("name")] = $(this).val();
        });
        console.log(results);
        sessionStorage.setItem('quizResults', JSON.stringify(results));
    });
});