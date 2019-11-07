$(document).ready(() => {
    console.log("document is ready.");
    $('#evalform').submit(function (e) {
        console.log('form submitted');
        e.preventDefault();
        if (!$('#resgroup').hasClass("hidden")) {
            $('#resgroup').addClass("hidden");
        }
        $('#loading').removeClass("hidden");
        var exptype = $('#data').find('input[name="exptype"]').val();
        var route = "/evalstr/json/float"
        if (exptype === "Integer Operands") {
            route = "/evalstr/json";
        }
        var expression = $('#evalform').find('input[name="expression"]').val();
        $.ajax({
            method: 'POST',
            url: 'http://evalstrapi.franklidev.com'+route,
            contentType: "application/json",
            dataType: 'json',
            data: JSON.stringify({
                Expression: expression
            }),
            success: (data, textStatus, jqXHR) => {
                console.log("The result is " + data);
                console.log("The result is " + textStatus);
                console.log("The result is " + jqXHR.responseText);
                console.log("The result is " + data.result);
                if (data.statusCode == "200") {
                    $('#evalform').find('input[name="result"]').val(data.result);
                    $('#evalform').find('input[name="result"]').removeClass('error');
                }
                else {
                    $('#evalform').find('input[name="result"]').val(data.errorMessage);
                    $('#evalform').find('input[name="result"]').addClass('error');
                }
                $('#loading').addClass("hidden");
                $('#resgroup').removeClass("hidden");
            },
            error: (jqXHR) => {
                console.log("Error jqXHR is " + jqXHR);
                console.log("Error status is " + jqXHR.status);
                console.log("Error is " + jqXHR.statusText);
                var statusText = (jqXHR.status === 0 ? "Connection error" : jqXHR.statusText);
                $('#evalform').find('input[name="result"]').val(statusText);
                $('#evalform').find('input[name="result"]').addClass('error');
                $('#loading').addClass("hidden");
                $('#resgroup').removeClass("hidden");
            }
       });
    });
});
/*'http://evalstrapi.franklidev.com/evalstr',*/