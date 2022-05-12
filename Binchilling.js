function homepage_turn_to_signin_page(btn_id){
  document.getElementById('signin_page').style.display='block';
  document.getElementById('homepage').style.display='none';
}

function homepage_turn_to_signup_page(btn_id){
  document.getElementById('signup_page').style.display='block';
  document.getElementById('homepage').style.display='none';
}

function turn_to_signup_page(btn_id){
  document.getElementById('signup_page').style.display='block';
  document.getElementById('signin_page').style.display='none';
}

function turn_to_signin_page(btn_id){
  document.getElementById('signup_page').style.display='none';
  document.getElementById('signin_page').style.display='block';
}

function pop_verify_email(){
  document.getElementById('verify_email_container').style.display='block';
}

function turn_to_verify_email_page(){
  document.getElementById('signup_page').style.display='none';
  document.getElementById('verify_email_page').style.display='block';
  document.getElementById('verify_email_container').style.display='none';
}

function turn_to_signin_page_from_verify(){
  document.getElementById('verify_email_page').style.display='none';
  document.getElementById('signin_page').style.display='block';
}

function turn_to_signup_page_from_verify(){
  document.getElementById('verify_email_page').style.display='none';
  document.getElementById('signup_page').style.display='block';
}

var email_verification_code = ['1', '2', '3', '4', '5', '6']
var email_verification_code_entered = ['0', '0', '0', '0', '0', '0']
function enter_email_verification_code(code_id, index){
  email_verification_code_entered[index] = document.getElementById(code_id).value;
  if(document.getElementById(code_id).value.length == 1 && (index != (email_verification_code.length-1))){  
    document.forms['verify_email'].elements[index+1].focus();  
  }  
}

function check_email_verification_code(){
  var equal = false;
  for(var i = 0; i<6; i++){
    if(email_verification_code[i] == email_verification_code_entered[i]){
      equal = true;
    }
    else{
      equal = false;
      break;
    }
  }
  console.log(equal);
  if(equal){
    document.getElementById('verify_success_img').style.display='block';
    setTimeout(function(){
      document.getElementById('verify_email_page').style.display='none';
      document.getElementById('verify_success_img').style.display='none';
      document.getElementById('wallet_navbar').style.display='block';
      document.getElementById('wallet_overview').style.display='block';
      document.getElementById('privacybar').style.display='block';
      document.getElementById('bottom_area').style.display='block';
    }, 2000);
  }
  else{
    document.getElementById('verify_fail_img').style.display = 'block';
    setTimeout(function(){
      document.getElementById('verify_fail_img').style.display = 'none';
      document.getElementById('verify_email_verify_code1').value = '';
      document.getElementById('verify_email_verify_code2').value = '';
      document.getElementById('verify_email_verify_code3').value = '';
      document.getElementById('verify_email_verify_code4').value = '';
      document.getElementById('verify_email_verify_code5').value = '';
      document.getElementById('verify_email_verify_code6').value = '';
    }, 2000);
  }
  email_verification_code_entered = ['0', '0', '0', '0', '0', '0']
  
}

function turn_to_wallet_page(){
  document.getElementById('signin_page').style.display='none';
  document.getElementById('wallet_navbar').style.display='block';
  document.getElementById('wallet_overview').style.display='block';
  document.getElementById('privacybar').style.display='block';
  document.getElementById('bottom_area').style.display='block';
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

function top_creators_top_selling_left_btn_clicked(btn_id){
  document.getElementById(btn_id).style.backgroundColor = '#3E619B';
  setTimeout(function(){
    document.getElementById(btn_id).style.backgroundColor = '#9BB3C6';
  }, 100);
}

function top_creators_top_selling_right_btn_clicked(btn_id){
  document.getElementById(btn_id).style.backgroundColor = '#3E619B';
  setTimeout(function(){
    document.getElementById(btn_id).style.backgroundColor = '#9BB3C6';
  }, 100);
}

function turn_to_wallet_NFT_page(){
  document.getElementById('wallet_NFT').style.display='block';
  document.getElementById('wallet_navbar').style.display='block';
  document.getElementById('NFT_Market').style.display='none';
  document.getElementById('NFT_Market_navbar').style.display='none';
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

function change_account_hover_color(btn_id){
  document.getElementById('navbar_function_account').style.color='#286A93';
  document.getElementById('navbar_account_triangle_down').style.borderTopColor='#286A93';
}
function change_back_account_hover_color(btn_id){
  document.getElementById('navbar_function_account').style.color="white";
  document.getElementById('navbar_account_triangle_down').style.borderTopColor="white";
}
function change_username_hover_color(btn_id){
  document.getElementById('wallet_navbar_username').style.color='#286A93';
  document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor='#286A93';
}
function change_back_username_hover_color(btn_id){
  document.getElementById('wallet_navbar_username').style.color="white";
  document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor="white";
}
function change_NFT_Market_brands_hover_color(btn_id){
  document.getElementById('navbar_function_brands').style.color='#286A93';
  document.getElementById('NFT_Market_navbar_triangle_down').style.borderTopColor='#286A93';
}
function change_back_NFT_Market_brands_hover_color(btn_id){
  document.getElementById('navbar_function_brands').style.color="white";
  document.getElementById('NFT_Market_navbar_triangle_down').style.borderTopColor="white";
}
function change_NFT_Market_username_hover_color(btn_id){
  document.getElementById('NFT_Market_navbar_username').style.color='#286A93';
  document.getElementById('NFT_Market_navbar_username_triangle_down').style.borderTopColor='#286A93';
}
function change_back_NFT_Market_username_hover_color(btn_id){
  document.getElementById('NFT_Market_navbar_username').style.color="white";
  document.getElementById('NFT_Market_navbar_username_triangle_down').style.borderTopColor="white";
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
        show[show_array][i] = 'false';
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
      }
      else{
        show[show_array][i] = 'true';
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
      }
    }
  }
}

var Currency=['NTD', 'USD', 'JPY', 'ETH', 'RMB', 'EUR']
var Currency_calculator = [1, 0.034, 0.32, 1/67568, 0.2, 0.032]
var wallet_pages = ['overview', 'NFT']
var overview_category_totalamount = [296210.326, 175832.331, 91722.462, 30017.135, 25127.746, 0]
var overview_category_totalamount_percentage = [];
var totalamount_all_array = [overview_category_totalamount]
var percentage_all_array = [overview_category_totalamount_percentage]
var overview_total_asset = 618910  //unit: Currency[0] = NTD
var NFT_total_asset = 296210.326 //unit: Currency[0] = NTD
var Total_asset = [618910, 296210.326]
var NFT_asset = [157435.788, 138774.538]
var username = 'Louis'

function load_database(){
  load_username();
  load_total_asset();
  calculate_percentage_all(totalamount_all_array, percentage_all_array);
}
function load_username(){
  document.getElementById('wallet_navbar_username').textContent = username;
  document.getElementById('NFT_Market_navbar_username').textContent = username;
}
function load_total_asset(){
  for(var i in wallet_pages){
    var now_wallet_page = wallet_pages[i];
    var id = "wallet_" + now_wallet_page + "_whole_asset_dollor";
    document.getElementById(id).textContent = '$'+String(Total_asset[i]);
  }
} 

function calculate_percentage_all(totalamount_arr, percentage_arr){
  for(var m in totalamount_arr){
    switch(totalamount_arr[m]){
      case overview_category_totalamount:
        calculate_percentage(overview_category_totalamount, percentage_arr[0]);
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.overview');
        for(k in percentage_node){
          percentage_node[k].innerHTML = String(percentage_arr[0][k]) + '%';
        }
        break;
    }
  }
}

function calculate_percentage(total, percentage_save){
  var sum = 0;

  for(var j in total){
    if(total[j] != 0){
      sum += total[j];
    }
  }
  for(var j in total){
    var percentage = ((total[j] / sum)*100).toFixed(2);
    percentage_save[j] = percentage;
  }
}

function close_wallet_whole_asset_currency_menu(currency_id){
  var chosed_currency=document.getElementById(currency_id).textContent;
  for(var currency in Currency){
    if(chosed_currency.includes(Currency[currency])){
      for(var wallet in wallet_pages){
        if($('#'+currency_id).attr('id').indexOf(wallet_pages[wallet]) != -1) {
          var now_wallet_page = wallet_pages[wallet]; 
          if(now_wallet_page=='NFT'){
            document.getElementById('wallet_NFT_NFTs_info_currency1').textContent=Currency[currency];
            document.getElementById('wallet_NFT_NFTs_info_currency2').textContent=Currency[currency];
            for(var k = 0; k < NFT_asset.length; k++){
              var NFT_value = (Currency_calculator[currency] * NFT_asset[k]).toFixed(3);
              var index = k+1;
              var id = "wallet_NFT_NFTs_info_value" + index;
              console.log(id)
              document.getElementById(id).textContent = String(NFT_value)
            }
          }
          else{
            var currency_node = document.querySelectorAll('.wallet_currency_currency.overview');
            var total_anount_node = document.querySelectorAll('.wallet_totalamount_totalamount.overview');
            for( var i = 0 , j = currency_node.length ; i < j ; i++ ){
              currency_node[i].textContent = Currency[currency];
              total_anount_node[i].textContent = String((Currency_calculator[currency]*overview_category_totalamount[i]).toFixed(3))
            }
          }
          var total_asset = Currency_calculator[currency]*Total_asset[wallet];
          total_asset = total_asset.toFixed(3);
          var id = "wallet_" + now_wallet_page + "_whole_asset_dollor"
          document.getElementById(id).textContent = '$'+String(total_asset); 
        }   
      }
      if($('#'+currency_id).attr('id').indexOf('filter') != -1){
        document.getElementById('wallet_NFT_filter_dollor_menu_text').textContent=Currency[currency];
      }
      var id = 'wallet_'+now_wallet_page+'_whole_asset_dollor_menu_text';
      document.getElementById(id).textContent=Currency[currency];
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


function homepage_turn_to_signin_page(btn_id){
  document.getElementById('signin_page').style.display='block';
  document.getElementById('homepage').style.display='none';
}

function homepage_turn_to_signup_page(btn_id){
  document.getElementById('signup_page').style.display='block';
  document.getElementById('homepage').style.display='none';
}


