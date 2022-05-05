function turn_to_signup_page(btn_id){
  document.getElementById('signup_page').style.display='block';
  document.getElementById('signin_page').style.display='none';
}

function turn_to_signin_page(btn_id){
  document.getElementById('signup_page').style.display='none';
  document.getElementById('signin_page').style.display='block';
}

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
});

