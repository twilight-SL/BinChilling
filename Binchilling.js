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

function turn_to_specific_wallet(btn_id){
  for(var wallet in wallet_pages){
    if(document.getElementById(btn_id).textContent == wallet_pages[wallet]) {
      var next_wallet_page = wallet_pages[wallet];
      break;
    }   
  }
  document.getElementById('wallet_overview').style.display='none';
  var next_wallet_page_id = 'wallet_'+next_wallet_page;
  document.getElementById(next_wallet_page_id).style.display='block';
}

function turn_to_overview_page(){
  document.getElementById('wallet_NFT').style.display='none';
  document.getElementById('wallet_overview').style.display='block';
}

function turn_to_NFT_Martket(){
  document.getElementById('wallet_NFT').style.display='none';
  document.getElementById('NFT_Market').style.display='block';
  document.getElementById('wallet_navbar').style.display='none';
  document.getElementById('NFT_Market_navbar').style.display='block';
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

function pop_wallet_NFT_filer_table(btn_id){
  document.getElementById('wallet_NFT_filter_table').style.display='block';
}

function close_search_table(btn_id){
  document.getElementById('navbar_search_table').style.display='none';
}

function close_wallet_NFT_filer_table(btn_id){
  document.getElementById('wallet_NFT_filter_table').style.display='none';
}

function pop_wallet_NFT_filter_currency_menu(btn_id){
  document.getElementById('wallet_NFT_filter_scrollable_dollor_menu').style.display='block';
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

function pop_wallet_currency_menu(btn_id){
  for(var wallet in wallet_pages){
    if($('#'+btn_id).attr('id').indexOf(wallet_pages[wallet]) != -1) {
      var now_wallet_page = wallet_pages[wallet];
      break;
    }   
  }
  console.log(now_wallet_page);
  id = 'wallet_'+now_wallet_page+'_whole_asset_scrollable_dollor_menu';
  document.getElementById(id).style.display='block';
  id = 'wallet_'+now_wallet_page+'_whole_asset_triangle_down'
  document.getElementById(id).style.borderTop='0px';
  document.getElementById(id).style.borderBottom='6px';
  document.getElementById(id).style.borderBottomStyle='Solid';
  document.getElementById(id).style.borderTopColor='transparent';
  document.getElementById(id).style.borderBottomColor='#286A93';
}

var show_array_pages = ['overview', 'Crypto']
var overview_show = ['true', 'true', 'true', 'true', 'true']
var show = [overview_show]
var show_color = ['#B8CAD6', '#E9E9EB', '#528CA2', '#42506B', '#FF7582']

function show_wallet_object(object_id){
  for(var wallet in wallet_pages){
    if($('#'+object_id).attr('id').indexOf(wallet_pages[wallet]) != -1) {
      var now_wallet_page = wallet_pages[wallet];
      break;
    }   
  }
  var show_array = show_array_pages.indexOf(now_wallet_page);
  console.log(show_array);
  console.log(show[0]);
  for(var i=0; i<show[show_array].length; i++){
    var contain = String(i+1);
    if($('#'+object_id).attr('id').indexOf(contain) != -1) {
      if(show[show_array][i] == 'true'){
        var show_object_id = 'wallet_'+now_wallet_page+'_object_container'+String(i+1);
        document.getElementById(show_object_id).style.borderColor='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_show_color'+String(i+1);
        document.getElementById(show_object_id).style.backgroundColor='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_category'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_totalamount'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_currency'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_percentage'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        show[show_array][i] = 'false';
      }
      else{
        var show_object_id = 'wallet_'+now_wallet_page+'_object_container'+String(i+1);
        document.getElementById(show_object_id).style.borderColor='#286A93';
        var show_object_id = 'wallet_'+now_wallet_page+'_show_color'+String(i+1);
        document.getElementById(show_object_id).style.backgroundColor=show_color[i];
        var show_object_id = 'wallet_'+now_wallet_page+'_category'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        var show_object_id = 'wallet_'+now_wallet_page+'_totalamount'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        var show_object_id = 'wallet_'+now_wallet_page+'_currency'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        var show_object_id = 'wallet_'+now_wallet_page+'_percentage'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        show[show_array][i] = 'true';
      }
    }
  }
}

var Currency=['NTD', 'USD', 'JPY', 'ETH', 'RMB', 'EUR']
var wallet_pages = ['overview', 'NFT', 'stock']
function close_wallet_whole_asset_currency_menu(currency_id){
  var chosed_currency=document.getElementById(currency_id).textContent;
  for(var currency in Currency){
    if(chosed_currency.includes(Currency[currency])){
      for(var wallet in wallet_pages){
        if($('#'+currency_id).attr('id').indexOf(wallet_pages[wallet]) != -1) {
          var now_wallet_page = wallet_pages[wallet];
        }   
      }
      if($('#'+currency_id).attr('id').indexOf('filter') != -1){
        document.getElementById('wallet_NFT_filter_dollor_menu_text').textContent=Currency[currency];
      }
      var id = 'wallet_'+now_wallet_page+'_whole_asset_dollor_menu_text';
      document.getElementById(id).textContent=Currency[currency];
      if(now_wallet_page=='NFT'){
        document.getElementById('wallet_NFT_NFTs_info_currency1').textContent=Currency[currency];
        document.getElementById('wallet_NFT_NFTs_info_currency2').textContent=Currency[currency];
      }
      else{
        var classes = '.wallet_currency_currency.'+now_wallet_page;
        var currency_node = document.querySelectorAll(classes);
        for( var i = 0 , j = currency_node.length ; i < j ; i++ ){
          currency_node[i].textContent = Currency[currency];
        }
      }
    }
  }
  if($('#'+currency_id).attr('id').indexOf('filter') != -1){
    document.getElementById('wallet_NFT_filter_scrollable_dollor_menu').style.display='none';
  }
  else{
    id = 'wallet_'+now_wallet_page+'_whole_asset_triangle_down'
    document.getElementById(id).style.borderTop='6px';
    document.getElementById(id).style.borderBottom='0px';
    document.getElementById(id).style.borderTopStyle='Solid';
    document.getElementById(id).style.borderTopColor='#286A93';
    document.getElementById(id).style.borderBottomColor='transparent';
    id = 'wallet_'+now_wallet_page+'_whole_asset_scrollable_dollor_menu'
    document.getElementById(id).style.display='none';
  }
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
      $("#category_btw_account").animate({width: "3.8%"});
    }
    else{
      $("#category_btw_account").animate({left:"68.2%"});
      $("#category_btw_account").animate({width:"3.5%"});
    }
  });
});

