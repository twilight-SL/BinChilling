

$(document).ready(function () {
    $("#textbox_homepage_03_subscribe_btn").click(function () {
        $.get('./0homepage_newEmailSubscribe', {
            emailToAdd: $("#textbox_homepage_03_subscribe_box").val()
        }, function (result) {
            alert(result)
        })
    })
    console.log("in JS");
    $("#signup_signup_btn").click(function () {
        console.log("Sign up");
        if($("#signup_confirm_password_typebox").val() != $("#signup_password_typebox").val()){
            alert("Check Password Again")
            $("#signup_confirm_password_typebox").val() = ""
            $("#signup_password_typebox").val() = ""
        }else if($("#signup_confirm_password_typebox").val() == "" || $("#signup_email_typebox").val() == "" || $("#signup_password_typebox").val() == "" || $("#signup_username_typebox").val() == ""){
            alert("Make Sure All Blanks Are Filled!")
        }
        else if($("#signup_checkbox").prop("checked") == false){
            alert("Please accept privacy policy!")
        }
        else{
            console.log("Signing up");
            $.get('./sign_up', {
                email: $("#signup_email_typebox").val(),
                username: $("#signup_username_typebox").val(),
                password: $("#signup_password_typebox").val()
            }, function (result) {
                console.log("result:"+result);
                alert(result)
                if(result == 'success'){
                    document.getElementById('verify_email_container').style.display='block';
            }   
            })
        }
    })
    $("#signin_signin_btn").click(function () {
        $.get('./sign_in', {
            email: $("#signin_email_typebox").val(),
            password: $("#signin_password_typebox").val()
        }, function (result) {
            if(result == "no_such_email"){
                console.log("debug");
                alert(result)
            }
            else if(result == false){
                alert("Wrong password")
            }
            else{
                console.log("turn to wallet page")
                turn_to_wallet_page();
            }
        })
    })
})

function turn_to_wallet_page(){
    document.getElementById('signin_page').style.display='none';
    document.getElementById('add_new_account_page').style.display='none';
    document.getElementById('connect_nft_account').style.display='none';
    console.log(wallet_pages.length)
    for(var i = 1; i < wallet_pages.length; i++){
      now_wallet_page = wallet_pages[i];
      console.log(now_wallet_page);
      var id = 'wallet_' + now_wallet_page;
      console.log(i);
      console.log(id);
      document.getElementById(id).style.display='none';  
    }  
    document.getElementById('wallet_navbar').style.display='block';
    document.getElementById('wallet_overview').style.display='block';
    document.getElementById('privacybar').style.display='block';
    document.getElementById('bottom_area').style.display='block';
    document.getElementById("Risk").style.visibility = 'hidden';
    d3.select("svg").remove();
    draw();  // Overview chart
    show_risk_index('overview');
}
/*$(document).ready(function () {
    $("#signup_signup_btn").click(function () {
        console.log("Sign up");
        if($("#signup_confirm_password_typebox").val() != $("#signup_password_typebox").val()){
        alert("Check Password Again")
        $("#signup_confirm_password_typebox").val() = ""
        $("#signup_password_typebox").val() = ""
    }else if($("#signup_confirm_password_typebox").val() == "" || $("#signup_email_typebox").val() == "" || $("#signup_password_typebox").val() == "" || $("#signup_username_typebox").val()){
        alert("Make Sure All Blanks Are Filled!")
        console.log("Not all blanks are filled");
    }
    else{
        console.log("Signing up");
        $.get('./sign_up', {
            email: $("#signup_email_typebox").val(),
            username: $("#signup_username_typebox").val(),
            password: $("#signup_password_typebox").val()
        }, function (result) {
            console.log("result:"+result);
            alert(result)
            if(result == 'success'){
                document.getElementById('verify_email_container').style.display='block';
            }
        })
    }
    })
})
*/
