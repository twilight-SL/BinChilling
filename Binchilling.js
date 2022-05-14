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
  console.log("turn");
  document.getElementById("Risk_NFT").style.visibility = 'hidden';
  d3.select("svg").remove();
  draw_NFT_chart();
  show_risk_index('NFT');
  for(var wallet in wallet_pages){
    if(document.getElementById(btn_id).textContent == wallet_pages[wallet]) {
      var next_wallet_page = wallet_pages[wallet];
      break;
    }   
  }
  document.getElementById('wallet_overview').style.display='none';
  var next_wallet_page_id = 'wallet_'+ next_wallet_page;
  console.log(next_wallet_page_id);
  document.getElementById(next_wallet_page_id).style.display='block';
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

var show_array_pages = ['overview', 'Crypto', 'Ban_SinoPac']
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
var wallet_pages = ['overview', 'NFT', 'Bank_SinoPac']
var overview_category_totalamount = [296210.326, 175832.331, 91722.462, 30017.135, 25127.746]
var overview_category_totalamount_percentage = [];
var totalamount_all_array = [overview_category_totalamount]
var percentage_all_array = [overview_category_totalamount_percentage]
var overview_total_asset = 618910  //unit: Currency[0] = NTD
var NFT_total_asset = 296210.326 //unit: Currency[0] = NTD
var Total_asset = [618910, 296210.326]
var NFT_asset = [157435.788, 138774.538]
var overview_category_category = ['NFT', 'Stock', 'Crypto', 'CD(For)', 'CD(NTD)']
var overview_category_account = ['Bank SinoPac', 'Citibank Taiwan', 'MetaMask', 'Bank of Taiwan', 'Chunghwa Post']
var username = 'Louis'

function load_database(){
  load_username();
  load_overview_total_asset();
  load_overview_asset();
  laod_overview_category_institute(overview_category_category)
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

function load_overview_asset(){
  for(var i = 0; i<overview_category_totalamount.length; i++){
    var index = i+1;
    if(overview_category_totalamount[i] == 0){
      break;
    }
    var id = "wallet_overview_totalamount" + index;
    document.getElementById(id).textContent = '$'+String(overview_category_totalamount[i]);
  }
}

function laod_overview_category_institute(array){
  for(var i = 0; i<overview_category_totalamount.length; i++){
    var index = i+1;
    if(overview_category_totalamount[i] == 0){
      break;
    }
    var id = "wallet_overview_category" + index;
    document.getElementById(id).textContent = String(array[i]);
  }
}

function get_overview_account_totalamount(){   //--------------  undone------------------//
  for(i = 0; i<overview_category_totalamount.length; i++){
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

function load_overview_total_asset(){
  var total = 0;
  for(i = 0; i<overview_category_totalamount.length; i++){
    if(overview_category_totalamount[i] != 0){
      total += overview_category_totalamount[i];
    }
  }
  Total_asset[0] = total;
  document.getElementById('wallet_overview_whole_asset_dollor').textContent = '$' + String(total.toFixed(3));
}

function calculate_percentage_all(totalamount_arr, percentage_arr){
  for(var m in totalamount_arr){
    console.log("in ");
    switch(totalamount_arr[m]){
      case overview_category_totalamount:
        console.log("inin  ");
        calculate_percentage(overview_category_totalamount, percentage_arr[0]);
        var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.overview');
        for(k in percentage_node){
          percentage_node[k].innerHTML = String(percentage_arr[0][k]) + '%';
          console.log(percentage_arr[0][k]);
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
              document.getElementById(id).textContent = String(NFT_value);
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
    id = 'wallet_'+now_wallet_page+'_whole_asset_scrollable_dollor_menu';
    document.getElementById(id).style.display='none';
  }
}




function switch_to_wallet_overview_account(){
  document.getElementById('wallet_overview_category').textContent = 'Institution';
  //讀institution檔案到  overview_category_totalamount[];
  get_fake_overview_account_totalamount();
  switch_all_currency_to_NTD();
  load_overview_total_asset();
  load_overview_asset();
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
  document.getElementById('wallet_overview_category').textContent = 'Category';
  //讀category檔案到  overview_category_totalamount[];
  get_fake_overview_category_totalamount();
  switch_all_currency_to_NTD();
  load_overview_total_asset();
  load_overview_asset();
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
