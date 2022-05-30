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

var wallet_page = 'overview';

function trun_to_add_account_page(now_page_id){
  var recent_page = "wallet_" + wallet_page;
  document.getElementById(recent_page).style.display='none';
  document.getElementById('add_new_account_page').style.display='block';
  document.getElementById('navbar_account_dropdown_menu_container').style.display = 'none';
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
      document.getElementById('add_new_account_page').style.display='block';
      document.getElementById('wallet').style.display='block';
      document.getElementById('wallet_navbar').style.display='block';
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
  document.getElementById('add_new_account_page').style.display='none';
  document.getElementById('connect_nft_account').style.display='none';
  for(var i = 1; i < wallet_pages.length; i++){
    now_wallet_page = wallet_pages[i];
    console.log(now_wallet_page);
    var id = 'wallet_' + now_wallet_page;
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

function turn_to_specific_wallet(btn_id){
  document.getElementById("Risk_NFT").style.visibility = 'hidden';
  d3.select("svg").remove();
  draw_NFT_chart();
  show_risk_index('NFT');
  for(var wallet in wallet_pages){
    if(document.getElementById(btn_id).textContent == wallet_pages[wallet]) {
      var next_wallet_page = wallet_pages[wallet];
      wallet_page = next_wallet_page;
      console.log(wallet_page);
      break;
    }  
  }
  /*
  if(btn_id.contain('Stock_category')){
    for(var i = 0; i<Stock_category.length; i++){
      if(btn_id.contain(i+1)){
        var now_stock_individual = i+1;
      }
    }
    document.getElementById('wallet_overview_category').textContent == document.getElementById(btn_id).textContent;
    document.getElementById('wallet_overview_totalamount').textContent == document.getElementById('wallet_Stock_totalamount'+String(now_stock_individual)).textContent;
    
  }
  else{*/
    document.getElementById('wallet_overview').style.display='none';
    var next_wallet_page_id = 'wallet_'+ wallet_page;
    console.log(next_wallet_page_id);
    document.getElementById(next_wallet_page_id).style.display='block';
  /*}*/
  
}

function turn_to_overview_page(){
  document.getElementById('wallet_NFT').style.display='none';
  document.getElementById('wallet_overview').style.display='block';
  document.getElementById("Risk").style.visibility = 'hidden';
  d3.select("svg").remove();
  draw();
  show_risk_index('overview');
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
  document.getElementById('navbar_account_dropdown_menu_container').style.display = 'block';
}
function change_back_account_hover_color(btn_id){
  document.getElementById('navbar_function_account').style.color="white";
  document.getElementById('navbar_account_triangle_down').style.borderTopColor="white";
  document.getElementById('navbar_account_dropdown_menu_container').style.display = 'none';
}
function change_username_hover_color(btn_id){
  document.getElementById('wallet_navbar_username').style.color='#286A93';
  document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor='#286A93';
  document.getElementById('navbar_user_dropdown_menu_container').style.display = 'block';

}
function change_back_username_hover_color(btn_id){
  document.getElementById('wallet_navbar_username').style.color="white";
  document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor="white";
  document.getElementById('navbar_user_dropdown_menu_container').style.display = 'none';
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
  id = 'wallet_'+now_wallet_page+'_whole_asset_scrollable_dollor_menu';
  document.getElementById(id).style.display='block';
  id = 'wallet_'+now_wallet_page+'_whole_asset_triangle_down'
  document.getElementById(id).style.borderTop='0px';
  document.getElementById(id).style.borderBottom='6px';
  document.getElementById(id).style.borderBottomStyle='Solid';
  document.getElementById(id).style.borderTopColor='transparent';
  document.getElementById(id).style.borderBottomColor='#286A93';
}

var show_array_pages = ['overview', 'Stock', 'MetaMask', 'Crypto', 'WalletConnect']
var overview_show = ['false', 'false', 'false', 'false', 'false']
var Stock_show = ['false', 'false', 'false', 'false', 'false']
var MetaMask_show = ['false', 'false', 'false', 'false', 'false']
var Crypto_show = ['false', 'false', 'false', 'false', 'false']
var WalletConnect_show = ['false', 'false', 'false', 'false', 'false']
var show = [overview_show, Stock_show, MetaMask_show, Crypto_show, WalletConnect_show]
var show_color = ['#B8CAD6', '#E9E9EB', '#528CA2', '#42506B', '#FF7582']

function show_wallet_object(object_id){
  for(var wallet in wallet_pages){
    if($('#'+object_id).attr('id').indexOf(wallet_pages[wallet]) != -1) {
      var now_wallet_page = wallet_pages[wallet];
      break;
    }   
  }
  var show_array = show_array_pages.indexOf(now_wallet_page);
  for(var i=0; i<show[show_array].length; i++){
    var contain = String(i+1);
    if($('#'+object_id).attr('id').indexOf(contain) != -1) {
      if(show[show_array][i] == 'true'){
        show[show_array][i] = 'false';
        calculate_percentage_all(totalamount_all_array, percentage_all_array);
        var show_object_id = 'wallet_'+now_wallet_page+'_object_container'+String(i+1);
        document.getElementById(show_object_id).style.borderColor='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_show_color'+String(i+1);
        document.getElementById(show_object_id).style.backgroundColor='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_category'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_totalamount'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_earning'+String(i+1);
        document.getElementById(show_object_id).style.opacity='0.2';
        var show_object_id = 'wallet_'+now_wallet_page+'_currency'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
        var show_object_id = 'wallet_'+now_wallet_page+'_percentage'+String(i+1);
        document.getElementById(show_object_id).style.color='#E5E5E5';
      }
      else{
        show[show_array][i] = 'true';
        calculate_percentage_all(totalamount_all_array, percentage_all_array);
        var show_object_id = 'wallet_'+now_wallet_page+'_object_container'+String(i+1);
        document.getElementById(show_object_id).style.borderColor='#286A93';
        var show_object_id = 'wallet_'+now_wallet_page+'_show_color'+String(i+1);
        document.getElementById(show_object_id).style.backgroundColor=show_color[i];
        var show_object_id = 'wallet_'+now_wallet_page+'_category'+String(i+1);
        if(now_wallet_page == 'MetaMask'){
          document.getElementById(show_object_id).style.color='#286A93';
        }
        else{
          document.getElementById(show_object_id).style.color='black';
        }
        var show_object_id = 'wallet_'+now_wallet_page+'_totalamount'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        var show_object_id = 'wallet_'+now_wallet_page+'_earning'+String(i+1);
        document.getElementById(show_object_id).style.opacity='1';
        var show_object_id = 'wallet_'+now_wallet_page+'_currency'+String(i+1);
        document.getElementById(show_object_id).style.color='black';
        var show_object_id = 'wallet_'+now_wallet_page+'_percentage'+String(i+1);
        if(now_wallet_page == 'Stock'){
          document.getElementById(show_object_id).style.color='#286A93';
        }
        else{
          document.getElementById(show_object_id).style.color='black';
        }
        
        
      }
    }
  }
}

var switch_overview = 'category'
var Currency=['NTD', 'USD', 'JPY', 'ETH', 'RMB', 'EUR']
var Currency_calculator = [1, 0.034, 4.3, 1/67568, 0.2, 0.032]
var wallet_pages = ['overview', 'NFT', 'Stock', 'MetaMask', 'WalletConnect', 'Crypto']
var overview_category_totalamount = []
var overview_category_totalamount_percentage = [];
var Stock_totalamount = [];
var Stock_totalamount_percentage = [];
var MetaMask_totalamount = [];
var MetaMask_totalamount_percentage = [];
var WalletConnect_totalamount = [];
var WalletConnect_totalamount_percentage = [];
var Crypto_totalamount = [];
var Crypto_totalamount_percentage = [];
var NFT_totalamount = [];
var NFT_totalamount_percentage = [];
var totalamount_all_array = [overview_category_totalamount, Stock_totalamount, MetaMask_totalamount, Crypto_totalamount, WalletConnect_totalamount, NFT_totalamount]
var percentage_all_array = [overview_category_totalamount_percentage, Stock_totalamount_percentage, MetaMask_totalamount_percentage, Crypto_totalamount_percentage, WalletConnect_totalamount_percentage, NFT_totalamount_percentage]
var overview_total_asset = 618910  //unit: Currency[0] = NTD
var Stock_original_price = [];
var Crypto_original_price = [];
var original_price_all_array = [Stock_original_price];
var earnings = [];
var Total_asset = [];
var overview_category_category = ['Stock', 'NFT', 'Crypto', 'CD(For)', 'CD(NTD)']
var overview_category_account = ['Bank SinoPac', 'MetaMask', 'Yuanta', 'WalletConnect', 'Citibank Taiwan']
var Stock_category = ['EVAAIR', 'MTK', 'AP Memory', 'TSM'];
var Stock_institution = ['SinoPac', 'SinoPac', 'Yuanta', 'Yuanta']
var MetaMask_category = ['ETH', 'BTC', 'NFT'];
var WalletConnect_category = ['NFT', 'ETH'];
var Crypto_category = ['ETH', 'BTC'];
var username = 'Louis'

function load_database(){
  load_username();
  load_overview_asset('category');
  load_overview_total_asset();
  laod_overview_category_institute(overview_category_category);
  load_Stock_asset();
  load_MetaMask_asset();
  load_WalletConnect_asset();
  load_Crypto_asset();
  load_NFTs_asset();
  calculate_earnings();
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

function load_overview_asset(overview){
  if(overview == "account"){
    get_fake_overview_account_totalamount();
  }
  else{
    get_fake_overview_category_totalamount();
  }
  
  for(var i = 0; i<overview_category_totalamount.length; i++){
    var index = i+1;
    var id = "wallet_overview_totalamount" + index;
    document.getElementById(id).textContent = '$'+String(overview_category_totalamount[i]);
  }
}

function load_Stock_asset(){
  get_Stock_asset();
  get_Stock_original_price();
  document.getElementById('wallet_Stock_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Stock')].toFixed(3));
}

function load_MetaMask_asset(){
  get_MetaMask_asset();
  document.getElementById('wallet_MetaMask_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('MetaMask')].toFixed(3));
}

function load_WalletConnect_asset(){
  get_WalletConnect_asset();
  document.getElementById('wallet_WalletConnect_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('WalletConnect')].toFixed(3));
}

function load_Crypto_asset(){
  get_Crypto_asset();
  get_Crypto_original_price();
  document.getElementById('wallet_Crypto_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Crypto')].toFixed(3));
}

function load_NFTs_asset(){
  get_NFTs_asset();
  document.getElementById('wallet_NFT_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('NFT')].toFixed(3));
}

function laod_overview_category_institute(array){
  for(var i = 0; i<overview_category_totalamount.length; i++){
    var index = i+1;
    var id = "wallet_overview_object_container" + index;
    overview_show[i] = 'true';
    document.getElementById(id).style.display = "block";
    id = "wallet_overview_category" + index;
    document.getElementById(id).textContent = String(array[i]);
  }
}


function get_fake_overview_category_totalamount(){
  overview_category_totalamount[0] = 296210.326;
  overview_category_totalamount[1] = 175832.331;
  overview_category_totalamount[2] = 91722.462;
  overview_category_totalamount[3] = 30017.135;
  overview_category_totalamount[4] = 25127.746;
}

function get_fake_overview_account_totalamount(){   //--------------  undone------------------//
  overview_category_totalamount[0] = 177255;
  overview_category_totalamount[1] = 5962.42;
  overview_category_totalamount[2] = 22229;
  overview_category_totalamount[3] = 19233;
  overview_category_totalamount[4] = 88888;
}

function get_Stock_totalamount(){
  Stock_totalamount[0] = 1758329;
  Stock_totalamount[1] = 160236;
  Stock_totalamount[2] = 146187;
  Stock_totalamount[3] = 136655;
}

function get_Stock_original_price(){
  Stock_original_price[0] = 148920;
  Stock_original_price[1] = 109223;
  Stock_original_price[2] = 233455;
  Stock_original_price[3] = 87221;
}

function get_Stock_asset(){
  get_Stock_totalamount();
  var Stock_total_asset = 0;
  for(var i = 0; i < Stock_totalamount.length; i++){   //display NFT value on the card
    Stock_total_asset += Stock_totalamount[i];
    Stock_show[i] = 'true';
    var index = i + 1;
    var id = 'wallet_Stock_object_container' + index;
    document.getElementById(id).style.display = "block";
    id = "wallet_Stock_totalamount" + index;
    document.getElementById(id).textContent = '$' + Stock_totalamount[i].toFixed(3);
    id = 'wallet_Stock_category' + index;
    document.getElementById(id).textContent = Stock_category[i];
  }
  Total_asset[2] = Stock_total_asset;
}



function calculate_earnings(){
  for(var i = 0; i<original_price_all_array.length; i++){
    if(original_price_all_array[i].length != 0){
      if(i == 0){
        for(var j =0; j<Stock_totalamount.length; j++){
          var id = 'wallet_Stock_earning' + String(j+1);
          var earning_percentage = (((Stock_totalamount[j] - original_price_all_array[i][j]))*100/(original_price_all_array[i][j])).toFixed(2);
          if(earning_percentage > 0){
            document.getElementById(id).textContent = '+' + String(earning_percentage) + '%';
            document.getElementById(id).style.backgroundColor = '#FF0000';
          }
          else{
            document.getElementById(id).textContent = String(earning_percentage) + '%';
            document.getElementById(id).style.backgroundColor = '#91B263';
          }
        }
      }
      else if(i == 1){
        console.log('in debug');
        for(var j =0; j<Crypto_totalamount.length; j++){
          var id = 'wallet_Crypto_earning' + String(j+1);
          var earning_percentage = (((Crypto_totalamount[j] - original_price_all_array[1][j]))*100/(original_price_all_array[1][j])).toFixed(2);    
          console.log(Crypto_totalamount[j]);
          console.log(original_price_all_array[1][j])
          console.log(earning_percentage);          
          if(earning_percentage > 0){
            document.getElementById(id).textContent = '+' + String(earning_percentage) + '%';
            document.getElementById(id).style.backgroundColor = '#FF0000';
          }
          else{
            document.getElementById(id).textContent = String(earning_percentage) + '%';
            document.getElementById(id).style.backgroundColor = '#91B263';
          }
        }
      }
    }
  }
}

function get_MetaMask_totalamount(){
  MetaMask_totalamount[0] = 1262;
  MetaMask_totalamount[1] = 1100;
  MetaMask_totalamount[2] = 744;
}

function get_MetaMask_asset(){
  get_MetaMask_totalamount();
  var MetaMask_total_asset = 0;
  for(var i = 0; i < MetaMask_totalamount.length; i++){   //display NFT value on the card
    MetaMask_total_asset += MetaMask_totalamount[i];
    MetaMask_show[i] = 'true';
    var index = i + 1;
    var id = 'wallet_MetaMask_object_container' + index;
    document.getElementById(id).style.display = "block";
    id = "wallet_MetaMask_totalamount" + index;
    document.getElementById(id).textContent = '$' + MetaMask_totalamount[i];
    id = 'wallet_MetaMask_category' + index;
    document.getElementById(id).textContent = MetaMask_category[i];
  }
  Total_asset[wallet_pages.indexOf('MetaMask')] = MetaMask_total_asset;
}

function get_WalletConnect_totalamount(){
  WalletConnect_totalamount[0] = 2075;
  WalletConnect_totalamount[1] = 982;
}

function get_WalletConnect_asset(){
  get_WalletConnect_totalamount();
  var WalletConnect_total_asset = 0;
  console.log('into walletconnect');
  for(var i = 0; i < WalletConnect_totalamount.length; i++){   //display NFT value on the card
    WalletConnect_total_asset += WalletConnect_totalamount[i];
    WalletConnect_show[i] = 'true';
    var index = i + 1;
    var id = 'wallet_WalletConnect_object_container' + index;
    document.getElementById(id).style.display = "block";
    id = "wallet_WalletConnect_totalamount" + index;
    document.getElementById(id).textContent = '$' + WalletConnect_totalamount[i];
    id = 'wallet_WalletConnect_category' + index;
    document.getElementById(id).textContent = WalletConnect_category[i];
  }
  Total_asset[wallet_pages.indexOf('WalletConnect')] = WalletConnect_total_asset;
}

function get_Crypto_totalamount(){
  Crypto_totalamount[0] = 1262;
  Crypto_totalamount[1] = 1100;
}

function get_Crypto_original_price(){
  Crypto_original_price[0] = 1500;
  Crypto_original_price[1] = 1000;
}

function get_Crypto_asset(){
  get_Crypto_totalamount();
  var Crypto_total_asset = 0;
  for(var i = 0; i < Crypto_totalamount.length; i++){   //display NFT value on the card
    Crypto_total_asset += Crypto_totalamount[i];
    Crypto_show[i] = 'true';
    var index = i + 1;
    var id = 'wallet_Crypto_object_container' + index;
    document.getElementById(id).style.display = "block";
    id = "wallet_Crypto_totalamount" + index;
    document.getElementById(id).textContent = '$' + Crypto_totalamount[i];
    id = 'wallet_Crypto_category' + index;
    document.getElementById(id).textContent = Crypto_category[i];
  }
  Total_asset[wallet_pages.indexOf('Crypto')] = Crypto_total_asset;
}

function get_NFT_totalamount(){
  NFT_totalamount[0] = 157435.788;
  NFT_totalamount[1] = 138774.538;
  NFT_totalamount[2] = 241123.987;
}

function get_NFTs_asset(){
  get_NFT_totalamount();
  var NFT_total_asset = 0;
  for(var i = 0; i < NFT_totalamount.length; i++){   //display NFT value on the card
    NFT_total_asset += NFT_totalamount[i];
    var index = i + 1;
    var id = "wallet_NFT_NFTs_info_value" + String(index);
    document.getElementById(id).textContent = NFT_totalamount[i];
  }
  Total_asset[wallet_pages.indexOf('NFT')] = NFT_total_asset;
}

function load_overview_total_asset(){
  var total = 0;
  for(i = 0; i<overview_category_totalamount.length; i++){
    if(overview_category_totalamount[i] != 0){
      total += overview_category_totalamount[i];
    }
  }
  Total_asset[wallet_pages.indexOf('overview')] = total;
  document.getElementById('wallet_overview_whole_asset_dollor').textContent = '$' + String(total.toFixed(3));
}

function calculate_percentage_all(totalamount_arr, percentage_arr){
  for(var m in totalamount_arr){
    switch(totalamount_arr[m]){
      case overview_category_totalamount:
        calculate_percentage(overview_category_totalamount, percentage_arr[0], 'overview');
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.overview');
        for(k in percentage_node){
          percentage_node[k].innerHTML = String(percentage_arr[0][k]) + '%';
        }
        break;
      case Stock_totalamount:
        calculate_percentage(Stock_totalamount, percentage_arr[1], 'Stock');
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Stock');
        for(k in percentage_node){
          percentage_node[k].innerHTML = String(Stock_institution[k]);
        }
        break;
      case MetaMask_totalamount:
        calculate_percentage(MetaMask_totalamount, percentage_arr[2], 'MetaMask');
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.MetaMask');
        for(k in percentage_node){
          percentage_node[k].innerHTML = String(percentage_arr[2][k]) + '%';
        }
        break;
      case Crypto_totalamount:
        calculate_percentage(Crypto_totalamount, percentage_arr[3], 'Crypto');
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Crypto');
        for(k in percentage_node){
        percentage_node[k].innerHTML = String(percentage_arr[3][k]) + '%';
        }
        break;
      case WalletConnect_totalamount:
        calculate_percentage(WalletConnect_totalamount, percentage_arr[4], 'WalletConnect');
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.WalletConnect');
        for(k in percentage_node){
        percentage_node[k].innerHTML = String(percentage_arr[4][k]) + '%';
        }
        break;
      case NFT_totalamount:
        calculate_percentage(NFT_totalamount, percentage_arr[5], 'NFT');
        var percentage_node = document.querySelectorAll('.wallet_NFT_percentage');
        for(k in percentage_node){
        percentage_node[k].innerHTML = String(percentage_arr[5][k]) + '%';
        }
        break;
    }
  }
}

function calculate_percentage(total, percentage_save, page){
  var sum = 0;
  if(page == 'NFT'){
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
  else{
    var show_array = show_array_pages.indexOf(page);
    for(var j in total){
      if(total[j] != 0 && show[show_array][j] == 'true'){
        sum += total[j];
      }
    }
    for(var j in total){
      if(show[show_array][j] == 'true'){
        var percentage = ((total[j] / sum)*100).toFixed(2);
        percentage_save[j] = percentage;
      }
      else{
        var percentage = 0;
        percentage_save[j] = percentage;
      }
    } 
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
            for(var n = 0; n<NFT_totalamount.length; n++){
              var index = n+1;
              var id = 'wallet_NFT_NFTs_info_currency' + index;
              document.getElementById(id).textContent=Currency[currency];
              var id = "wallet_NFT_NFTs_info_value" + index;
              var NFT_value = (Currency_calculator[currency] * NFT_totalamount[n]).toFixed(3);
              document.getElementById(id).textContent = String(NFT_value);
            }
          }
          else{
            var classes_currency = '.wallet_currency_currency.' + now_wallet_page;
            var currency_node = document.querySelectorAll(classes_currency);
            var classes_totalamount = '.wallet_totalamount_totalamount.' + now_wallet_page;
            var total_anount_node = document.querySelectorAll(classes_totalamount);
            for( var i = 0 , j = currency_node.length ; i < j ; i++ ){
              currency_node[i].textContent = Currency[currency];
              switch (now_wallet_page){
                case 'overview':
                  total_anount_node[i].textContent = '$' + String((Currency_calculator[currency]*overview_category_totalamount[i]).toFixed(3));
                  break;
                case 'Stock':
                  total_anount_node[i].textContent = '$' + String((Currency_calculator[currency]*Stock_totalamount[i]).toFixed(3));
                  break;
                case 'MetaMask':
                  total_anount_node[i].textContent = '$' + String((Currency_calculator[currency]*MetaMask_totalamount[i]).toFixed(3));
                  break;
                case 'WalletConnect':
                  total_anount_node[i].textContent = '$' + String((Currency_calculator[currency]*WalletConnect_totalamount[i]).toFixed(3));
                  break;
                case 'Crypto':
                  total_anount_node[i].textContent = '$' + String((Currency_calculator[currency]*Crypto_totalamount[i]).toFixed(3));
                  break;
              }
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
    id = 'wallet_'+now_wallet_page+'_whole_asset_scrollable_dollor_menu';
    document.getElementById(id).style.display='none';
  }
}

function slide_NFTs(btn_id){
  if($('#'+btn_id).attr('id').indexOf('left') != -1){  //left btn
    $("#wallet_NFT_NFTs_container").animate({"left": "-=40.1%"});
    console.log(document.getElementById("wallet_NFT_NFTs_container").style.left);
    console.log("Left");
  }
  else{
    if(document.getElementById("wallet_NFT_NFTs_container").style.left < '0%'){     /*-----------undone-------------*/
      console.log(document.getElementById("wallet_NFT_NFTs_container").style.left);
      console.log("Right");
      $("#wallet_NFT_NFTs_container").animate({"left": "+=40.1%"});
    }
  }
  
}


function switch_to_wallet_overview_account(){
  switch_overview = 'account';
  document.getElementById('wallet_overview_category').textContent = 'Institution';
  //讀institution檔案到  overview_category_totalamount[];
  get_fake_overview_account_totalamount();
  switch_all_currency_to_NTD();
  load_overview_total_asset();
  load_overview_asset('account');
  laod_overview_category_institute(overview_category_account);
  calculate_percentage_all(totalamount_all_array, percentage_all_array);
  var category_node = document.querySelectorAll('.wallet_category_category');
  for(var i = 0; i < category_node.length; i++){
    category_node[i].classList.replace('wallet_category_category', 'wallet_category_account');
  }
  
}

function switch_all_currency_to_NTD(){
  document.getElementById('wallet_overview_whole_asset_dollor_menu_text').textContent = 'NTD';
  for(var i = 0; i< overview_category_totalamount.length; i++){
    var index = i+1;
    id = "wallet_overview_currency" + String(index);
    document.getElementById(id).textContent = 'NTD';
  }
}

function switch_to_wallet_overview_category(){
  switch_overview = 'category';
  document.getElementById('wallet_overview_category').textContent = 'Category';
  //讀category檔案到  overview_category_totalamount[];
  get_fake_overview_category_totalamount();
  switch_all_currency_to_NTD();
  load_overview_total_asset();
  load_overview_asset('category');
  laod_overview_category_institute(overview_category_category);
  calculate_percentage_all(totalamount_all_array, percentage_all_array);
  var category_node = document.querySelectorAll('.wallet_category_account');
  for(var i = 0; i < category_node.length; i++){
    category_node[i].classList.replace('wallet_category_account', 'wallet_category_category');
  }
}

$(document).ready(function(){
  $(".toTop").on("click", function (e) {
    e.preventDefault();
    $("html").animate({
      scrollTop: 0,
    }, 100)
  });
  $('[data-toggle="tooltip"]').tooltip();
  $("#wallet_account_choice").click(function(){
    $("#wallet_category_choice").css('color', '#286A93' );
    $("#wallet_account_choice").css('color', 'white');
    $("#category_btw_account").animate({left: "50%"}, {queue: false});
    $("#category_btw_account").animate({width:"50%"}, {queue: false});
    switch_to_wallet_overview_account();
  });
  $("#wallet_category_choice").click(function(){
    $("#wallet_category_choice").css('color', 'white');
    $("#wallet_account_choice").css('color', '#286A93');
    $("#category_btw_account").animate({left:"0%"}, {queue: false});
    $("#category_btw_account").animate({width: "55%"}, {queue: false});
    switch_to_wallet_overview_category();
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

var logged_account = [];
function modify_navbar_account_menu(account){
  logged_account[logged_account.length] = account;
  var extend_height = (logged_account.length+1)*40;
  document.getElementById('navbar_account_dropdown_menu_container').style.height = extend_height + "%";
  var id = 'navbar_account_line' + logged_account.length;
  document.getElementById(id).style.display = 'block';
  var id = 'navbar_account_logged_account' + logged_account.length;
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).textContent = account;
}


/* ****** ------------------------------------------------------- Chart Animation--------------------------------------------------------- ****** */

let data = [296210.326, 175832.331, 91722.462, 30017.135, 25127.746]; // ["296210.326", "175832.331", "91722.462", "30017.135", "25127.746"];
let colors = ["#B8CAD6", "#E9E9EB", "#528CA2", "#42506B", "#FF7582"];
let NFT_data = [1651.428965, 1455.681035];
let NFT_colors = ["#E9E9EB", "#FF7582"];

let sizes = {
  innerRadius: 0,
  outerRadius: 230
};

let durations = {
  entryAnimation: 3000
};

function draw() {
  const Name = ["NFT", "Stock" , "Crypto" ,"CD (For)", "CD (NTD)"]  
  let generator = d3.pie()
    .sort(null);

  let chart = generator(data);
  let arcs = d3.select("#chart")
    .append('svg')
    .attr('width', 650)
    .attr('height', 650)
    .append("g")
    .attr("id", "piechart")
    .attr("transform", "translate(400, 230)");
  
  var path = arcs.selectAll('path')
    .data(chart)
    .enter()
    .append('path')
    .style("fill", (d, i) => colors[i]);


  /* ------------------ Tooltip ----------------- */
  let tooltips = d3.select("#chart")
      .append("div")
      .attr('class', 'tooltip')
      .style("opacity", 0)   
      .style("position", "absolute")
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

  tooltips.append('div')
    .attr('class','count');

  tooltips.append('div')
    .attr('class','percent');

  // 加上滑鼠事件
  d3.select('#piechart')
    .style('cursor', 'pointer')
    .on('mouseover', function() { 
      tooltips.style("opacity", 1) 
    })
    .on("mousemove", function(event, d) {
      var percent = ["296210.326", "175832.331", "91722.462", "30017.135", "25127.746"]
      let riskNum = [65, 54, 49, 45, 46];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total)/10;
      }          
      percent.forEach(myFunction);
      let pt = d3.pointer(event) // 抓圓點位置
      let i;

      if(pt[0] > 30){
        i = 0;
      }else if(pt[0] > -63 && pt[1] < 0){
        i = 4;
      }else if(pt[0] < 30 && pt[1] > -17){
        i = 1;
      }else if(pt[0] < 0 &&  -209 < pt[1] && pt[1] < -17){
        i = 2;
      }else {
        i = 3;
      }

      tooltips.style("opacity", 1)
        .style('left', (2* pt[0] + 450) +'px') // 設定tooltips位置
        .style('top', (2*pt[1] + 450) +'px')
        .html(" " + Name[i] + "; RI: " + riskNum[i] + "<br>(" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
      })
    .on('mouseleave', function(){ //設定滑鼠離開時tooltips隱藏
      tooltips.style("opacity", 0)
    });

  /* ------------------ Sth ------------------ */
  let angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());
  let innerRadiusInterpolation = d3.interpolate(0, sizes.innerRadius);
  let outerRadiusInterpolation = d3.interpolate(0, sizes.outerRadius);

  let arc = d3.arc();

  /* ------------------ Animation ------------------ */
  path.transition()
    .duration(durations.entryAnimation)
    .attrTween("d", d => {
      let originalEnd = d.endAngle;
      return t => {
        let currentAngle = angleInterpolation(t);
        if (currentAngle < d.startAngle) {
          return "";
        }

        d.endAngle = Math.min(currentAngle, originalEnd);

        return arc(d);
      };
    });

  d3.select("#chart")
    .transition()
    .duration(durations.entryAnimation)
    .tween("arcRadii", () => {
      return t => arc
        .innerRadius(innerRadiusInterpolation(t))
        .outerRadius(outerRadiusInterpolation(t));
    });
}

function show_risk_index(page){
  setTimeout(function () {
    switch(page){
      case "overview":
        document.getElementById("Risk").style.visibility = "visible";
        break;
      case "NFT":
        document.getElementById("Risk_NFT").style.visibility = "visible";
        break;
    }
  }, 2500);
}


function draw_NFT_chart() {
  const Name = ["Metamask", "Wallet Connect"]  
  let generator = d3.pie()
    .sort(null);

  let chart = generator(NFT_data);
  let arcs = d3.select("#chart_NFT")
    .append('svg')
    .attr('width', 650)
    .attr('height', 650)
    .append("g")
    .attr("id", "piechart_NFT")
    .attr("transform", "translate(400, 230)");
  
  var path = arcs.selectAll('path')
    .data(chart)
    .enter()
    .append('path')
    .style("fill", (d, i) => NFT_colors[i]);


  /* ------------------ Tooltip ----------------- */
  let tooltips = d3.select("#chart_NFT")
      .append("div")
      .attr('class', 'tooltip')
      .style("opacity", 0)   
      .style("position", "absolute")
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

  tooltips.append('div')
    .attr('class','count');

  tooltips.append('div')
    .attr('class','percent');

  // 加上滑鼠事件
  d3.select('#piechart_NFT')
    .style('cursor', 'pointer')
    .on('mouseover', function() { 
      tooltips.style("opacity", 1) 
    })
    .on("mousemove", function(event, d) {
      var percent = [ "1651.428965", "1455.681035"];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total)/10;
      }          
      percent.forEach(myFunction);
        
      let pt = d3.pointer(event) // 抓圓點位置

      let i;

      if(pt[0] > 0 || (-35 < pt[0] && pt[0] < 0 && pt[1] > 0)){
        i = 0;
      }else if(pt[0] < 0){
        i = 1;
      }

      tooltips.style("opacity", 1)
        .style('left', (1.8* pt[0] + 450) +'px') // 設定tooltips位置
        .style('top', (1.8*pt[1] + 450) +'px')
        .html(" " + Name[i] + " <br> (" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
      })
    .on('mouseleave', function(){ //設定滑鼠離開時tooltips隱藏
      tooltips.style("opacity", 0)
    });

  /* ------------------ Sth ------------------ */
  let angleInterpolation = d3.interpolate(generator.startAngle()(), generator.endAngle()());
  let innerRadiusInterpolation = d3.interpolate(0, sizes.innerRadius);
  let outerRadiusInterpolation = d3.interpolate(0, sizes.outerRadius);

  let arc = d3.arc();

  /* ------------------ Animation ------------------ */
  path.transition()
    .duration(durations.entryAnimation)
    .attrTween("d", d => {
      let originalEnd = d.endAngle;
      return t => {
        let currentAngle = angleInterpolation(t);
        if (currentAngle < d.startAngle) {
          return "";
        }
        d.endAngle = Math.min(currentAngle, originalEnd);
        return arc(d);
      };
    });

  d3.select("#chart_NFT")
    .transition()
    .duration(durations.entryAnimation)
    .tween("arcRadii", () => {
      return t => arc
        .innerRadius(innerRadiusInterpolation(t))
        .outerRadius(outerRadiusInterpolation(t));
    });
}

/* -------------------- Add Account Event ---------------------- */
function TurnBack_choose_account(){
  document.getElementById("add_new_account_page").style.display='block';
  document.getElementById("connect_nft_account").style.display='none';
  document.getElementById("demo-add").style.display='block';
}

function add_NFT_account(input_id){
  document.getElementById("add_new_account_page").style.display='none';
  document.getElementById("connect_nft_account").style.display='block';
}

/* --------------------  Modal Action  -------------------- */
const input_MetaMask_success_password = 456789;
var input_password;

function get_metamask_password(){
  input_password = document.querySelector("#metamask-password-input").value;
  if( input_password !== null){
      console.log("get_metamask_password: " + input_password);
  }else{
    console.log("Something error!");
  }
}

function verify_metamask_password(){
  let state = 1; // Inform which state the class 'dialog' should be closed
  let SuccessOrNot = 0; // Initialize false (which equals failed)
  $('#MetaMaskModal').modal('hide');

  if(input_password == input_MetaMask_success_password){
    console.log("Success: " + input_password);
    document.getElementById('MetaMask-wallet-success-connect').style.display='block';
    document.getElementById('dialog-success').style.display='block';
    SuccessOrNot = 1;
  }else{
    console.log("Error: " + input_password);
    document.getElementById('MetaMask-wallet-failed-connect').style.display='block';
    document.getElementById('dialog-failed').style.display='block';
  }

  $(".dialog").on("click", function(){
    console.log("you have click");
    if(state == 1){
      $(".dialog").fadeOut("normal");
      state = 0;
       if(SuccessOrNot == 1){
        console.log("TurnBack_choose_account");
         TurnBack_choose_account();
       }
    }
  });
  
  $( ".verify-modal" ).on( "click", function(event) {
    event.stopPropagation();
  });
  $("#metamask-password-input").val('');
}
