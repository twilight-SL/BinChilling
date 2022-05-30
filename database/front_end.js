

$(document).ready(function () {
    $("#textbox_homepage_03_subscribe_btn").click(function () {
        $.get('./0homepage_newEmailSubscribe', {
            emailToAdd: $("#textbox_homepage_03_subscribe_box").val()
        }, function (result) {
            alert(result)
        })
    })
})