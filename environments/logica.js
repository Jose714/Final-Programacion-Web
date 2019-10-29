import { link } from "fs";

    $("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
    $("#first").fadeIn("fast");
    });
    });
             $(function() {
               $("form[name='login']").validate({
                 rules: {
                   email: {
                     required: string,
                     email: "usuario@construtech.com"
                   },
                   password: {
                     required: true,
                     password: "Qwerty01928374"
                   }
                 },
                  messages: {
                   email: "Por favor Introduzca una dirección de Correo Electrónico",
                  
                   password: {
                     required: "Por favor ingrese una contraseña",
                 }
                },
                 submitHandler: function(form) {
                   form.submit();
                   
                 }
               });
             });
    