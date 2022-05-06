function turn_to_signup_page(btn_id){
  document.getElementById('signup_page').style.display='block';
  document.getElementById('signin_page').style.display='none';
}

function turn_to_signin_page(btn_id){
  document.getElementById('signup_page').style.display='none';
  document.getElementById('signin_page').style.display='block';
}

function turn_to_wallet_page(btn_id){
  document.getElementById('signin_page').style.display='none';
  document.getElementById('wallet_navbar').style.display='block';
  document.getElementById('wallet_overview').style.display='block';
  document.getElementById('privacybar').style.display='block';
}

/*function switch_wallet_overview_classification(){
  if(document.getElementById('category_btw_account').style.left>='65%'){
    document.getElementById('category_btw_account').style.transition = "all 1s";
    document.getElementById('category_btw_account').style.width='3.8%';
    document.getElementById('category_btw_account').style.left='64.75%';
  }
  else{

  }
}*/


function close_privacybar(btn_id){
  document.getElementById('privacybar').style.display='none';
}

function pop_search_table(btn_id){
  document.getElementById('navbar_search_table').style.display='block';
}

function close_search_table(btn_id){
  document.getElementById('navbar_search_table').style.display='none';
}

function change_search_category_bgcolor(btn_id){
  if(document.getElementById(btn_id).style.backgroundColor == "rgb(140, 140, 140)"){
    document.getElementById(btn_id).style.backgroundColor='#E5E5E5';
  }
  else{
    document.getElementById(btn_id).style.backgroundColor='#8C8C8C';
  }
}

function change_hover_color(btn_id){
  document.getElementById('navbar_function3').style.Color='#286A93';
  document.getElementById('navbar_triangle_down').style.borderTopColor='#286A93';
}
function change_back_hover_color(btn_id){
  document.getElementById('navbar_function3').style.Color="white";
  document.getElementById('navbar_triangle_down').style.borderTopColor="white";
}


$(document).ready(function(){
  $("#navbar_function3_container").mouseover(function(){
    $("#navbar_function3").css("Color",'#286A93');
    $("#navbar_triangle_down").css("border-top-color",'#286A93');
  });
  $("#navbar_function3_container").mouseout(function(){
    $("#navbar_function3").css("color","white");
    $("#navbar_triangle_down").css("border-top-color","white");
  });

  $("#wallet_account_choice").click(function(){
    console.log("wallet");
    if($("#category_btw_account").offset().left>='65%'){
      $("#category_btw_account").animate({left:"64.75%"});
      $("#category_btw_account").animate({width:"3.8%"});
    }
    else{
      $("#category_btw_account").animate({left:"68.2%"});
      $("#category_btw_account").animate({width:"3.5%"});
    }
    
  });
});

