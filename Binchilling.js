//import * as exchange from "./database/get_exchange_rate.js";
// const exchange = require("./databse/get_exchange_rate.js");

/*function pop_verify_email(){
  document.getElementById('verify_email_container').style.display='block';
}*/
$(document).ready(function () {
  console.log("in document ready")
  var wallet_pages = ['overview', 'NFT', 'Stock', 'MetaMask', 'Phanton', 'Crypto', 'SinoPac', 'Yuanta', 'Citibank', 'CD_NTD', 'CD_For']
  var wallet_page = 'overview';


  $("#navbar_account_add").on("click", function () {
    var recent_page = "wallet_" + wallet_page;
    document.getElementById(recent_page).style.display = 'none';
    document.getElementById('add_new_account_page').style.display = 'block';
    document.getElementById('navbar_account_dropdown_menu_container').style.display = 'none';
    document.getElementById('plan_page').style.display = 'none';
  });

  var email_verification_code = ['1', '2', '3', '4', '5', '6']
  var email_verification_code_entered = ['0', '0', '0', '0', '0', '0']
  var verify_index = 0;
  $(".verify_email_verify_text").on("keyup", function () {
    console.log(document.getElementById($(this).attr("id")).value)
    email_verification_code_entered[verify_index] = document.getElementById($(this).attr("id")).value;
    if (document.getElementById($(this).attr("id")).value.length == 1 && (verify_index != (email_verification_code.length - 1))) {
      verify_index++;
      document.forms['verify_email'].elements[verify_index].focus();
    }
  });

  /*function enter_email_verification_code(code_id, index) {
    email_verification_code_entered[index] = document.getElementById(code_id).value;
    if (document.getElementById(code_id).value.length == 1 && (index != (email_verification_code.length - 1))) {
      document.forms['verify_email'].elements[index + 1].focus();
    }
  }*/

  $("#verify_email_verify_btn").on("click", function () {
    var equal = false;
    for (var i = 0; i < 6; i++) {
      if (email_verification_code[i] == email_verification_code_entered[i]) {
        equal = true;
      }
      else {
        equal = false;
        break;
      }
    }
    if (equal) {
      document.getElementById('verify_success_img').style.display = 'block';
      setTimeout(function () {
        document.getElementById('verify_email_page').style.display = 'none';
        document.getElementById('verify_success_img').style.display = 'none';
        document.getElementById('add_new_account_page').style.display = 'block';
        document.getElementById('wallet').style.display = 'block';
        document.getElementById('wallet_navbar').style.display = 'block';
      }, 2000);
    }
    else {
      document.getElementById('verify_fail_img').style.display = 'block';
      setTimeout(function () {
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
  });

  function turn_to_wallet_page() {
    document.getElementById('signin_page').style.display = 'none';
    document.getElementById('add_new_account_page').style.display = 'none';
    document.getElementById('connect_nft_account').style.display = 'none';
    document.getElementById('plan_page').style.display = 'none';
    console.log(wallet_pages.length)
    for (var i = 1; i < wallet_pages.length; i++) {
      var now_wallet_page = wallet_pages[i];
      var id = 'wallet_' + now_wallet_page;
      document.getElementById(id).style.display = 'none';
    }
    document.getElementById('wallet_navbar').style.display = 'block';
    document.getElementById('wallet_overview').style.display = 'block';
    document.getElementById('wallet').style.display = 'block';
    document.getElementById('privacybar').style.display = 'block';
    document.getElementById('bottom_area').style.display = 'block';
    document.getElementById("Risk").style.visibility = 'hidden';
    d3.select("svg").remove();
    draw();  // Overview chart
    show_risk_index('overview');
  }

  $(".turn_to_wallet_page").on("click", function () {
    turn_to_wallet_page();
  });

  $(".turn_to_specific_wallet").on("click", function () {
    document.getElementById("Risk_NFT").style.visibility = 'hidden';
    d3.select("svg").remove();
    draw_NFT_chart();
    show_risk_index('NFT');
    for (var wallet in wallet_pages) {
      if (document.getElementById($(this).attr("id")).textContent == wallet_pages[wallet]) {
        var next_wallet_page = wallet_pages[wallet];
        wallet_page = next_wallet_page;
        break;
      }
    }
    document.getElementById('wallet_overview').style.display = 'none';
    var next_wallet_page_id = 'wallet_' + wallet_page;
    console.log(next_wallet_page_id);
    document.getElementById(next_wallet_page_id).style.display = 'block';
  });


  function turn_to_overview_page() {
    document.getElementById('wallet_NFT').style.display = 'none';
    document.getElementById('wallet_overview').style.display = 'block';
    document.getElementById("Risk").style.visibility = 'hidden';
    d3.select("svg").remove();
    draw();
    show_risk_index('overview');
  }

  $("#explore_NFT_btn").on("click", function () {
    document.getElementById('wallet_NFT').style.display = 'none';
    document.getElementById('NFT_Market').style.display = 'block';
    document.getElementById('wallet_navbar').style.display = 'none';
    document.getElementById('NFT_Market_navbar').style.display = 'block';
  });

  $("#top_creators_view_circle_left").on("click", function () {
    document.getElementById($(this).attr("id")).style.backgroundColor = '#3E619B';
    setTimeout(function () {
      document.getElementById($(this).attr("id")).style.backgroundColor = '#9BB3C6';
    }, 100);
  });

  $("#top_creators_view_circle_right").on("click", function () {
    document.getElementById($(this).attr("id")).style.backgroundColor = '#3E619B';
    setTimeout(function () {
      document.getElementById($(this).attr("id")).style.backgroundColor = '#9BB3C6';
    }, 100);
  });


  $("#navbar_NFT_Market_logo_text").on("click", function () {
    document.getElementById('wallet_NFT').style.display = 'block';
    document.getElementById('wallet_navbar').style.display = 'block';
    document.getElementById('NFT_Market').style.display = 'none';
    document.getElementById('NFT_Market_navbar').style.display = 'none';
  });

  $("#privacybar_close_container").on("click", function () {
    document.getElementById('privacybar').style.display = 'none';
  });

  $("#navbar_search_text_container").on("click", function () {
    document.getElementById('navbar_search_table').style.display = 'block';
  });

  $("#wallet_NFT_filter_btn").on("click", function () {
    document.getElementById('wallet_NFT_filter_table').style.display = 'block';
  });

  $("#navbar_search_confirm_btn").on("click", function () {
    document.getElementById('navbar_search_table').style.display = 'none';
  })


  $("#wallet_NFT_filter_confirm_btn").on("click", function () {
    document.getElementById('wallet_NFT_filter_table').style.display = 'none';
    var exchange_rate;
    console.log("NFT_filter_currency: "+NFT_filter_currency);
    if(NFT_filter_currency != null){
      exchange_rate = Currency_calculator[Currency.indexOf(NFT_filter_currency)];
    }
    else{
      exchange_rate = 1;
    }
    var NFT_filter_min;
    var NFT_filter_max;
    if ($("#wallet_NFT_filter_min_typebox").val() != "") {
      NFT_filter_min = $("#wallet_NFT_filter_min_typebox").val() * exchange_rate;
    }
    else {
      NFT_filter_min = NFT_price_min * exchange_rate;
    }
    if ($('#wallet_NFT_filter_max_typebox').val() != "") {
      NFT_filter_max = $("#wallet_NFT_filter_max_typebox").val() * exchange_rate;
    }
    else {
      NFT_filter_max = NFT_price_max * exchange_rate;
    }
    if ($('#wallet_NFT_filter_min_typebox').val() == "" && $("#wallet_NFT_filter_max_typebox").val() == "") {
      NFT_filter_min = NFT_price_min * exchange_rate;
      NFT_filter_max = NFT_price_max * exchange_rate;
    }
    console.log("Max: " + NFT_filter_max + " min: " + NFT_filter_min)
    var visibility_NFT = 0;
    $(".wallet_NFT_NFTs").css('display', 'none');
    console.log("NFT_filter_currency: "+NFT_filter_currency);
    console.log("Currency.indexOf(NFT_filter_currency): "+Currency.indexOf(NFT_filter_currency));
    

    if (NFT_filter.includes("All")) {
      for (var i = 0; i < NFT_totalamount.length; i++) {
        console.log("Total NFT amount: "+NFT_totalamount.length);
        console.log("value: "+NFT_totalamount[i] * exchange_rate);
        console.log("exchange rate: "+exchange_rate);
        if ((NFT_totalamount[i] * exchange_rate >= NFT_filter_min) && (NFT_totalamount[i] * exchange_rate <= NFT_filter_max)) {
          var id = '#wallet_NFT_NFT' + String(i + 1);
          console.log("exchanged_price: " + NFT_totalamount[i] * exchange_rate)
          $(id).css('display', 'block');
          visibility_NFT++;
        }
      }
      var width = (visibility_NFT) * 276 + (visibility_NFT - 1) * 50;
      document.getElementById("wallet_NFT_NFTs_container").style.width = width + "px";
    }
    else {
      for (var i = 0; i < NFT_totalamount.length; i++) {
        for (var j = 0; j < NFT_filter.length; j++) {
          for (var k = 0; k < NFT_category[i].length; k++) {
            var id = '#wallet_NFT_NFT' + String(i + 1);
            if ((NFT_filter[j] == NFT_category[i][k]) && (NFT_totalamount[i] * exchange_rate >= NFT_filter_min) && (NFT_totalamount[i] * exchange_rate <= NFT_filter_max)) {
              $(id).css('display', 'block');
              console.log("NFT: " + i)
              console.log("filter: " + NFT_filter[j])

              visibility_NFT++;
              console.log("Visibility_NFT: " + visibility_NFT);
            }
          }
        }
      }
    }
    if (visibility_NFT == 1) {
      document.getElementById("wallet_NFT_NFTs_container").style.width = '276px';
    }
    else {
      var width = (visibility_NFT) * 276 + (visibility_NFT - 1) * 50;
      document.getElementById("wallet_NFT_NFTs_container").style.width = width + "px";
    }
  });

  $("#wallet_NFT_filter_dollor_menu_btn").on("click", function () {
    document.getElementById('wallet_NFT_filter_scrollable_dollor_menu').style.display = 'block';
  });

  var NFT_filter = []
  $(".change_search_category_bgcolor").on("click", function () {
    if (document.getElementById($(this).attr("id")).style.backgroundColor == "rgb(40, 106, 147)") {
      document.getElementById($(this).attr("id")).style.backgroundColor = '#E5E5E5';
      NFT_filter = NFT_filter.filter(item => item != document.getElementById($(this).attr("id")).textContent)
      console.log(NFT_filter.length);
      console.log(NFT_filter);
    }
    else {
      document.getElementById($(this).attr("id")).style.backgroundColor = '#286A93';
      NFT_filter[NFT_filter.length] = document.getElementById($(this).attr("id")).textContent;
      console.log(NFT_filter.length);
      console.log(NFT_filter);
    }
  });

  $(".change_account_hover_color").on("mouseover", function () {
    document.getElementById('navbar_function_account').style.color = '#286A93';
    document.getElementById('navbar_account_triangle_down').style.borderTopColor = '#286A93';
    document.getElementById('navbar_account_dropdown_menu_container').style.display = 'block';
  });

  $(".change_back_account_hover_color").on("mouseout", function () {
    document.getElementById('navbar_function_account').style.color = "white";
    document.getElementById('navbar_account_triangle_down').style.borderTopColor = "white";
    document.getElementById('navbar_account_dropdown_menu_container').style.display = 'none';
  });

  $(".change_username_hover_color").on("mouseover", function () {
    document.getElementById('wallet_navbar_username').style.color = '#286A93';
    document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor = '#286A93';
    document.getElementById('navbar_user_dropdown_menu_container').style.display = 'block';
  });

  $(".change_back_username_hover_color").on("mouseout", function () {
    document.getElementById('wallet_navbar_username').style.color = "white";
    document.getElementById('navbar_wallet_username_triangle_down').style.borderTopColor = "white";
    document.getElementById('navbar_user_dropdown_menu_container').style.display = 'none';
  });

  $("#NFT_navbar_function3_container").on("mouseover", function () {
    document.getElementById('navbar_function_brands').style.color = '#286A93';
    document.getElementById('NFT_Market_navbar_triangle_down').style.borderTopColor = '#286A93';
  });

  $("#NFT_navbar_function3_container").on("mouseout", function () {
    document.getElementById('navbar_function_brands').style.color = "white";
    document.getElementById('NFT_Market_navbar_triangle_down').style.borderTopColor = "white";
  });

  $("#wallet_username_container").on("mouseover", function () {
    document.getElementById('NFT_Market_navbar_username').style.color = '#286A93';
    document.getElementById('NFT_Market_navbar_username_triangle_down').style.borderTopColor = '#286A93';
  });

  $("wallet_username_container").on("mouseout", function () {
    document.getElementById('NFT_Market_navbar_username').style.color = "white";
    document.getElementById('NFT_Market_navbar_username_triangle_down').style.borderTopColor = "white";
  });

  $(".pop_wallet_currency_menu").on("click", function () {
    for (var wallet in wallet_pages) {
      if ($(this).attr("id").indexOf(wallet_pages[wallet]) != -1) {
        var now_wallet_page = wallet_pages[wallet];
        break;
      }
    }
    id = 'wallet_' + now_wallet_page + '_whole_asset_scrollable_dollor_menu';
    document.getElementById(id).style.display = 'block';
    id = 'wallet_' + now_wallet_page + '_whole_asset_triangle_down'
    document.getElementById(id).style.borderTop = '0px';
    document.getElementById(id).style.borderBottom = '6px';
    document.getElementById(id).style.borderBottomStyle = 'Solid';
    document.getElementById(id).style.borderTopColor = 'transparent';
    document.getElementById(id).style.borderBottomColor = '#286A93';
  });

  var show_array_pages = ['overview', 'Stock', 'MetaMask', 'Crypto', 'Phanton', 'SinoPac', 'Yuanta', 'Citibank', 'CD_NTD', 'CD_For']
  var overview_show = ['false', 'false', 'false', 'false', 'false']
  var Stock_show = ['false', 'false', 'false', 'false', 'false']
  var MetaMask_show = ['false', 'false', 'false', 'false', 'false']
  var Crypto_show = ['false', 'false', 'false', 'false', 'false']
  var Phanton_show = ['false', 'false', 'false', 'false', 'false']
  var SinoPac_show = ['false', 'false', 'false', 'false', 'false']
  var Yuanta_show = ['false', 'false', 'false', 'false', 'false']
  var Citibank_show = ['false', 'false', 'false', 'false', 'false']
  var CD_NTD_show = ['false', 'false', 'false', 'false', 'false']
  var CD_For_show = ['false', 'false', 'false', 'false', 'false']
  var show = [overview_show, Stock_show, MetaMask_show, Crypto_show, Phanton_show, SinoPac_show, Yuanta_show, Citibank_show, CD_NTD_show, CD_For_show]
  var show_color = ['#B8CAD6', '#E9E9EB', '#528CA2', '#42506B', '#FF7582']

  $(".show_wallet_object").on("click", function () {
    for (var wallet in wallet_pages) {
      if ($(this).attr("id").indexOf(wallet_pages[wallet]) != -1) {
        var now_wallet_page = wallet_pages[wallet];
        break;
      }
    }
    var show_array = show_array_pages.indexOf(now_wallet_page);
    for (var i = 0; i < show[show_array].length; i++) {
      var contain = String(i + 1);
      if ($(this).attr("id").indexOf(contain) != -1) {
        if (show[show_array][i] == 'true') {
          show[show_array][i] = 'false';
          calculate_percentage_all(totalamount_all_array, percentage_all_array);
          var show_object_id = 'wallet_' + now_wallet_page + '_object_container' + String(i + 1);
          document.getElementById(show_object_id).style.borderColor = '#E5E5E5';
          var show_object_id = 'wallet_' + now_wallet_page + '_show_color' + String(i + 1);
          document.getElementById(show_object_id).style.backgroundColor = '#E5E5E5';
          var show_object_id = 'wallet_' + now_wallet_page + '_category' + String(i + 1);
          document.getElementById(show_object_id).style.color = '#E5E5E5';
          var show_object_id = 'wallet_' + now_wallet_page + '_totalamount' + String(i + 1);
          document.getElementById(show_object_id).style.color = '#E5E5E5';
          var show_object_id = 'wallet_' + now_wallet_page + '_earning' + String(i + 1);
          document.getElementById(show_object_id).style.opacity = '0.2';
          var show_object_id = 'wallet_' + now_wallet_page + '_currency' + String(i + 1);
          document.getElementById(show_object_id).style.color = '#E5E5E5';
          var show_object_id = 'wallet_' + now_wallet_page + '_percentage' + String(i + 1);
          document.getElementById(show_object_id).style.color = '#E5E5E5';
        }
        else {
          show[show_array][i] = 'true';
          calculate_percentage_all(totalamount_all_array, percentage_all_array);
          var show_object_id = 'wallet_' + now_wallet_page + '_object_container' + String(i + 1);
          document.getElementById(show_object_id).style.borderColor = '#286A93';
          var show_object_id = 'wallet_' + now_wallet_page + '_show_color' + String(i + 1);
          document.getElementById(show_object_id).style.backgroundColor = show_color[i];
          var show_object_id = 'wallet_' + now_wallet_page + '_category' + String(i + 1);
          if (switch_overview == 'account') {
            document.getElementById(show_object_id).style.color = '#286A93';
          }
          else {
            document.getElementById(show_object_id).style.color = 'black';
          }
          var show_object_id = 'wallet_' + now_wallet_page + '_totalamount' + String(i + 1);
          document.getElementById(show_object_id).style.color = 'black';
          var show_object_id = 'wallet_' + now_wallet_page + '_earning' + String(i + 1);
          document.getElementById(show_object_id).style.opacity = '1';
          var show_object_id = 'wallet_' + now_wallet_page + '_currency' + String(i + 1);
          document.getElementById(show_object_id).style.color = 'black';
          var show_object_id = 'wallet_' + now_wallet_page + '_percentage' + String(i + 1);
          if (now_wallet_page == 'Stock') {
            document.getElementById(show_object_id).style.color = '#286A93';
          }
          else {
            document.getElementById(show_object_id).style.color = 'black';
          }
        }
      }
    }
  });

  var switch_overview = 'category'
  var Currency = ['NTD', 'USD', 'JPY', 'ETH', 'RMB', 'EUR']
  //var Currency_calculator = [exchange.get_rate(1,"ntd","ntd"), exchange.get_rate(1, "ntd", "usd"), exchange.get_rate(1, "ntd", "jpy"), 100, exchange.get_rate(1, "ntd", "cny"), exchange.get_rate(1, "ntd", "eur")]
  //var Currency_calculator = [get_rate(1,"ntd","ntd"), get_rate(1, "ntd", "usd"), get_rate(1, "ntd", "jpy"), 100, get_rate(1, "ntd", "cny"), get_rate(1, "ntd", "eur")]
  var Currency_calculator = [1, 0.034, 4.3, 1, 1, 1]
  //var wallet_pages = ['overview', 'NFT', 'Stock', 'MetaMask', 'Phanton', 'Crypto', 'SinoPac', 'Yuanta', 'Citibank']
  var overview_category_totalamount = []
  var overview_category_totalamount_percentage = [];
  var Stock_totalamount = [];
  var Stock_totalamount_percentage = [];
  var MetaMask_totalamount = [];
  var MetaMask_totalamount_percentage = [];
  var Phanton_totalamount = [];
  var Phanton_totalamount_percentage = [];
  var Crypto_totalamount = [];
  var Crypto_totalamount_percentage = [];
  var SinoPac_totalamount = [];
  var SinoPac_totalamount_percentage = [];
  var Yuanta_totalamount = [];
  var Yuanta_totalamount_percentage = [];
  var Citibank_totalamount = [];
  var Citibank_totalamount_percentage = [];
  var CD_NTD_totalamount = [];
  var CD_NTD_totalamount_percentage = [];
  var CD_For_totalamount = [];
  var CD_For_totalamount_percentage = [];
  var NFT_totalamount = [];
  var NFT_totalamount_percentage = [];
  var totalamount_all_array = [overview_category_totalamount, Stock_totalamount, MetaMask_totalamount, Crypto_totalamount, Phanton_totalamount, NFT_totalamount, SinoPac_totalamount, Yuanta_totalamount, Citibank_totalamount, CD_NTD_totalamount, CD_For_totalamount]
  var percentage_all_array = [overview_category_totalamount_percentage, Stock_totalamount_percentage, MetaMask_totalamount_percentage, Crypto_totalamount_percentage, Phanton_totalamount_percentage, NFT_totalamount_percentage, SinoPac_totalamount_percentage, Yuanta_totalamount_percentage, Citibank_totalamount_percentage, CD_NTD_totalamount_percentage, CD_For_totalamount_percentage]
  var overview_total_asset = 618910  //unit: Currency[0] = NTD
  var Stock_original_price = [];
  var Crypto_original_price = [];
  var MetaMask_original_price = [];
  var Phanton_original_price = [];
  var original_price_all_array = [Stock_original_price, MetaMask_original_price, Phanton_original_price];
  var earnings = [];
  var Total_asset = [];
  var overview_category_category = ['Stock', 'NFT', 'Crypto', 'CD_For', 'CD_NTD']
  var overview_category_account = ['SinoPac', 'MetaMask', 'Yuanta', 'Phanton', 'Citibank']
  var plan_category_percentage = [];
  var Stock_category = ['EVAAIR', 'MTK', 'AP Memory', 'TSM'];
  var Stock_institution = ['SinoPac', 'SinoPac', 'Yuanta', 'Yuanta']
  var MetaMask_category = ['ETH', 'BTC', 'NFT'];
  var Phanton_category = ['NFT', 'ETH'];
  var Crypto_category = ['ETH', 'BTC'];
  var SinoPac_category = ['unknown1', 'unknown2'];
  var Yuanta_category = ['unknown3', 'unknown4'];
  var Citibank_category = ['CD_For', 'CD_NTD'];
  var CD_NTD_category = ['Citibank', 'Yuanta']
  var CD_For_category = ['Citibank', 'Yuanta']
  var username = 'Louis'

  function load_database() {
    load_username();
    load_overview_asset('category');
    load_overview_total_asset();
    laod_overview_category_institute(overview_category_category);
    load_Stock_asset();
    load_MetaMask_asset();
    load_Phanton_asset();
    load_SinoPac_asset();
    load_Yuanta_asset();
    load_Citibank_asset();
    load_Crypto_asset();
    load_CD_NTD_asset();
    load_CD_For_asset();
    load_NFTs_asset();
    calculate_earnings();
    calculate_percentage_all(totalamount_all_array, percentage_all_array);
  }
  function load_username() {
    document.getElementById('wallet_navbar_username').textContent = username;
    document.getElementById('NFT_Market_navbar_username').textContent = username;
  }
  function load_total_asset() {
    for (var i in wallet_pages) {
      var now_wallet_page = wallet_pages[i];
      var id = "wallet_" + now_wallet_page + "_whole_asset_dollor";
      document.getElementById(id).textContent = '$' + String(Total_asset[i]);
    }
  }

  function load_overview_asset(overview) {
    if (overview == "account") {
      get_fake_overview_account_totalamount();
    }
    else {
      get_fake_overview_category_totalamount();
      for (var i = 0; i < overview_category_category.length; i++) {
        plan_category_percentage[i] = overview_category_totalamount[i]
      }
    }

    for (var i = 0; i < overview_category_totalamount.length; i++) {
      console.log("load overview asset debug")
      var index = i + 1;
      var id = "wallet_overview_totalamount" + index;
      document.getElementById(id).textContent = '$' + String(overview_category_totalamount[i]);
    }

  }

  function load_Stock_asset() {
    get_Stock_asset();
    get_Stock_original_price();
    document.getElementById('wallet_Stock_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Stock')].toFixed(3));
  }

  function load_MetaMask_asset() {
    get_MetaMask_asset();
    get_MetaMask_original_price();
    document.getElementById('wallet_MetaMask_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('MetaMask')].toFixed(3));
  }

  function load_Phanton_asset() {
    get_Phanton_asset();
    get_Phanton_original_price();
    document.getElementById('wallet_Phanton_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Phanton')].toFixed(3));
  }

  function load_SinoPac_asset() {
    get_SinoPac_asset();
    document.getElementById('wallet_SinoPac_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('SinoPac')].toFixed(3));
  }

  function load_Yuanta_asset() {
    get_Yuanta_asset();
    document.getElementById('wallet_Yuanta_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Yuanta')].toFixed(3));
  }

  function load_Citibank_asset() {
    get_Citibank_asset();
    document.getElementById('wallet_Citibank_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Citibank')].toFixed(3));
  }

  function load_Crypto_asset() {
    get_Crypto_asset();
    get_Crypto_original_price();
    document.getElementById('wallet_Crypto_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('Crypto')].toFixed(3));
  }

  function load_CD_NTD_asset() {
    get_CD_NTD_asset();
    document.getElementById('wallet_CD_NTD_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('CD_NTD')].toFixed(3));
  }

  function load_CD_For_asset() {
    get_CD_For_asset();
    document.getElementById('wallet_CD_For_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('CD_For')].toFixed(3));
  }

  function load_NFTs_asset() {
    get_NFTs_asset();
    document.getElementById('wallet_NFT_whole_asset_dollor').textContent = '$' + String(Total_asset[wallet_pages.indexOf('NFT')].toFixed(3));
  }

  function laod_overview_category_institute(array) {
    for (var i = 0; i < overview_category_totalamount.length; i++) {
      var index = i + 1;
      var id = "wallet_overview_object_container" + index;
      overview_show[i] = 'true';
      document.getElementById(id).style.display = "block";
      id = "wallet_overview_category" + index;
      document.getElementById(id).textContent = String(array[i]);
    }
  }


  function get_fake_overview_category_totalamount() {
    overview_category_totalamount[0] = 296210.326;
    overview_category_totalamount[1] = 175832.331;
    overview_category_totalamount[2] = 91722.462;
    overview_category_totalamount[3] = 30017.135;
    overview_category_totalamount[4] = 25127.746;
  }

  function get_fake_overview_account_totalamount() {   //--------------  undone------------------//
    overview_category_totalamount[0] = 177255;
    overview_category_totalamount[1] = 5962.42;
    overview_category_totalamount[2] = 22229;
    overview_category_totalamount[3] = 19233;
    overview_category_totalamount[4] = 88888;
  }

  function get_Stock_totalamount() {
    Stock_totalamount[0] = 1758329;
    Stock_totalamount[1] = 160236;
    Stock_totalamount[2] = 146187;
    Stock_totalamount[3] = 136655;
  }

  function get_Stock_original_price() {
    Stock_original_price[0] = 148920;
    Stock_original_price[1] = 109223;
    Stock_original_price[2] = 233455;
    Stock_original_price[3] = 87221;
  }

  function get_Stock_asset() {
    get_Stock_totalamount();
    var Stock_total_asset = 0;
    for (var i = 0; i < Stock_totalamount.length; i++) {   //display NFT value on the card
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



  function calculate_earnings() {
    for (var i = 0; i < original_price_all_array.length; i++) {
      if (original_price_all_array[i].length != 0) {
        if (i == 0) {
          for (var j = 0; j < Stock_totalamount.length; j++) {
            var id = 'wallet_Stock_earning' + String(j + 1);
            var earning_percentage = (((Stock_totalamount[j] - original_price_all_array[i][j])) * 100 / (original_price_all_array[i][j])).toFixed(2);
            document.getElementById(id).style.display = 'flex';
            if (earning_percentage > 0) {
              document.getElementById(id).textContent = '+' + String(earning_percentage) + '%';
              document.getElementById(id).style.backgroundColor = '#FF0000';
            }
            else {
              document.getElementById(id).textContent = String(earning_percentage) + '%';
              document.getElementById(id).style.backgroundColor = '#91B263';
            }
          }
        }
        else if (i == 1) {
          for (var j = 0; j < MetaMask_totalamount.length; j++) {
            var id = "wallet_MetaMask_category" + (j + 1);
            if (document.getElementById(id).textContent != "NFT") {
              var id = 'wallet_MetaMask_earning' + String(j + 1);
              var earning_percentage = (((MetaMask_totalamount[j] - original_price_all_array[i][j])) * 100 / (original_price_all_array[i][j])).toFixed(2);
              console.log(MetaMask_totalamount[j]);
              console.log(original_price_all_array[1][j])
              console.log(earning_percentage);
              document.getElementById(id).style.display = 'flex';
              if (earning_percentage > 0) {
                document.getElementById(id).textContent = '+' + String(earning_percentage) + '%';
                document.getElementById(id).style.backgroundColor = '#FF0000';
              }
              else {
                document.getElementById(id).textContent = String(earning_percentage) + '%';
                document.getElementById(id).style.backgroundColor = '#91B263';
              }
            }
          }
        }
        else if (i == 2) {
          for (var j = 0; j < Phanton_totalamount.length; j++) {
            var id = "wallet_Phanton_category" + (j + 1);
            if (document.getElementById(id).textContent != "NFT") {
              var id = 'wallet_Phanton_earning' + String(j + 1);
              var earning_percentage = (((Phanton_totalamount[j] - original_price_all_array[i][j])) * 100 / (original_price_all_array[i][j])).toFixed(2);
              console.log(Phanton_totalamount[j]);
              console.log(original_price_all_array[1][j])
              console.log(earning_percentage);
              document.getElementById(id).style.display = 'flex';
              if (earning_percentage > 0) {
                document.getElementById(id).textContent = '+' + String(earning_percentage) + '%';
                document.getElementById(id).style.backgroundColor = '#FF0000';
              }
              else {
                document.getElementById(id).textContent = String(earning_percentage) + '%';
                document.getElementById(id).style.backgroundColor = '#91B263';
              }
            }
          }
        }
      }
    }
  }

  function get_MetaMask_totalamount() {
    MetaMask_totalamount[0] = 1262;
    MetaMask_totalamount[1] = 1100;
    MetaMask_totalamount[2] = 744;
  }

  function get_MetaMask_original_price() {
    MetaMask_original_price[0] = 1500;
    MetaMask_original_price[1] = 1000;
    MetaMask_original_price[1] = 1000;
  }

  function get_MetaMask_asset() {
    get_MetaMask_totalamount();
    var MetaMask_total_asset = 0;
    for (var i = 0; i < MetaMask_totalamount.length; i++) {   //display NFT value on the card
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

  function get_Phanton_totalamount() {
    Phanton_totalamount[0] = 2075;
    Phanton_totalamount[1] = 982;
  }

  function get_Phanton_original_price() {
    Phanton_original_price[0] = 1500;
    Phanton_original_price[1] = 1000;
  }

  function get_Phanton_asset() {
    get_Phanton_totalamount();
    var Phanton_total_asset = 0;
    for (var i = 0; i < Phanton_totalamount.length; i++) {   //display NFT value on the card
      Phanton_total_asset += Phanton_totalamount[i];
      Phanton_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_Phanton_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_Phanton_totalamount" + index;
      document.getElementById(id).textContent = '$' + Phanton_totalamount[i];
      id = 'wallet_Phanton_category' + index;
      document.getElementById(id).textContent = Phanton_category[i];
    }
    Total_asset[wallet_pages.indexOf('Phanton')] = Phanton_total_asset;
  }

  function get_SinoPac_totalamount() {
    SinoPac_totalamount[0] = 1923101;
    SinoPac_totalamount[1] = 123289;
  }

  function get_SinoPac_asset() {
    get_SinoPac_totalamount();
    var SinoPac_total_asset = 0;
    for (var i = 0; i < SinoPac_totalamount.length; i++) {   //display NFT value on the card
      SinoPac_total_asset += SinoPac_totalamount[i];
      SinoPac_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_SinoPac_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_SinoPac_totalamount" + index;
      document.getElementById(id).textContent = '$' + SinoPac_totalamount[i];
      id = 'wallet_SinoPac_category' + index;
      document.getElementById(id).textContent = SinoPac_category[i];
    }
    Total_asset[wallet_pages.indexOf('SinoPac')] = SinoPac_total_asset;
  }

  function get_Yuanta_totalamount() {
    Yuanta_totalamount[0] = 11123;
    Yuanta_totalamount[1] = 9822;
  }

  function get_Yuanta_asset() {
    get_Yuanta_totalamount();
    var Yuanta_total_asset = 0;
    for (var i = 0; i < Yuanta_totalamount.length; i++) {   //display NFT value on the card
      Yuanta_total_asset += Yuanta_totalamount[i];
      Yuanta_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_Yuanta_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_Yuanta_totalamount" + index;
      document.getElementById(id).textContent = '$' + Yuanta_totalamount[i];
      id = 'wallet_Yuanta_category' + index;
      document.getElementById(id).textContent = Yuanta_category[i];
    }
    Total_asset[wallet_pages.indexOf('Yuanta')] = Yuanta_total_asset;
  }

  function get_Citibank_totalamount() {
    Citibank_totalamount[0] = 11123;
    Citibank_totalamount[1] = 9822;
  }

  function get_Citibank_asset() {
    get_Citibank_totalamount();
    var Citibank_total_asset = 0;
    for (var i = 0; i < Citibank_totalamount.length; i++) {   //display NFT value on the card
      Citibank_total_asset += Citibank_totalamount[i];
      Citibank_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_Citibank_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_Citibank_totalamount" + index;
      document.getElementById(id).textContent = '$' + Citibank_totalamount[i];
      id = 'wallet_Citibank_category' + index;
      document.getElementById(id).textContent = Citibank_category[i];
    }
    Total_asset[wallet_pages.indexOf('Citibank')] = Citibank_total_asset;
  }

  function get_Crypto_totalamount() {
    Crypto_totalamount[0] = 1262;
    Crypto_totalamount[1] = 1100;
  }

  function get_Crypto_original_price() {
    Crypto_original_price[0] = 1500;
    Crypto_original_price[1] = 1000;
  }

  function get_Crypto_asset() {
    get_Crypto_totalamount();
    var Crypto_total_asset = 0;
    for (var i = 0; i < Crypto_totalamount.length; i++) {   //display NFT value on the card
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

  function get_CD_NTD_totalamount() {
    CD_NTD_totalamount[0] = 1262;
    CD_NTD_totalamount[1] = 1100;
  }

  function get_CD_NTD_asset() {
    get_CD_NTD_totalamount();
    var CD_NTD_total_asset = 0;
    for (var i = 0; i < CD_NTD_totalamount.length; i++) {   //display NFT value on the card
      CD_NTD_total_asset += CD_NTD_totalamount[i];
      CD_NTD_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_CD_NTD_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_CD_NTD_totalamount" + index;
      document.getElementById(id).textContent = '$' + CD_NTD_totalamount[i];
      id = 'wallet_CD_NTD_category' + index;
      document.getElementById(id).textContent = CD_NTD_category[i];
    }
    Total_asset[wallet_pages.indexOf('CD_NTD')] = CD_NTD_total_asset;
  }

  function get_CD_For_totalamount() {
    CD_For_totalamount[0] = 1262;
    CD_For_totalamount[1] = 1100;
  }

  function get_CD_For_asset() {
    get_CD_For_totalamount();
    var CD_For_total_asset = 0;
    for (var i = 0; i < CD_For_totalamount.length; i++) {   //display NFT value on the card
      CD_For_total_asset += CD_For_totalamount[i];
      CD_For_show[i] = 'true';
      var index = i + 1;
      var id = 'wallet_CD_For_object_container' + index;
      document.getElementById(id).style.display = "block";
      id = "wallet_CD_For_totalamount" + index;
      document.getElementById(id).textContent = '$' + CD_For_totalamount[i];
      id = 'wallet_CD_For_category' + index;
      document.getElementById(id).textContent = CD_For_category[i];
    }
    Total_asset[wallet_pages.indexOf('CD_For')] = CD_For_total_asset;
  }

  var NFT_info_subname = [];
  var NFT_info_name = [];
  var NFT_info_src = [];
  var NFT_category = [];
  var NFT_detail = [];
  var NFT_img_url = [];
  var NFT_price_max = 0;
  var NFT_price_min = 0;
  function get_NFT_info() {
    NFT_totalamount[0] = 157435.788;
    NFT_totalamount[1] = 138774.538;
    NFT_totalamount[2] = 241123.987;
    NFT_price_max = Math.max(...NFT_totalamount);
    NFT_price_min = Math.min(...NFT_totalamount);
    NFT_info_subname[0] = "Crazy bird";
    NFT_info_subname[1] = "Japanese Illustration";
    NFT_info_subname[2] = "Crazy tiger";
    NFT_info_name[0] = "Crazy bird #5487";
    NFT_info_name[1] = "Japanese Illustration";
    NFT_info_name[2] = "Crazy tiger #6771";
    NFT_info_src[0] = "MetaMask";
    NFT_info_src[1] = "Phanton";
    NFT_info_src[2] = "MetaMask";
    NFT_category[0] = ["Collectibles", "Photography"];
    NFT_category[1] = ["Art", "Collectibles"];
    NFT_category[2] = ["Collectibles", "Photography"];
    NFT_detail[0] = { "PHOTOGRAPHER": "Jonathan Joestar", "TYPE": "Macaw", "BACKGROUND": "Dark mode", "FUR COLOR": "Bright orange" };
    NFT_detail[1] = { "BACKGROUND": "Orange", "ILLUSTRATOR": "Kau", "ANIMAL": "Tiger", "COLOR": "Orange", "CLOTHES": "Traditional", "CHARACTER": "Boy" };
    NFT_detail[2] = { "PHOTOGRAPHER": "BYH", "BACKGROUND": "Black", "SCALE": "Medium" };
    NFT_img_url[0] = "url('./Img/NFT/Wallet/NFT_crazy_bird.png')";
    NFT_img_url[1] = "url('./Img/NFT/Wallet/NFT_Japaneses_Illstra.png')";
    NFT_img_url[2] = "url('./Img/NFT/Wallet/NFT_crazy_tiger.png')";
  }

  function get_NFTs_asset() {
    get_NFT_info();
    var NFT_total_asset = 0;
    for (var i = 0; i < NFT_totalamount.length; i++) {   //display NFT value on the card
      NFT_total_asset += NFT_totalamount[i];
      var index = i + 1;
      var id = "wallet_NFT_NFT" + String(index);
      document.getElementById(id).visibility = 'visible';
      var id = "wallet_NFT_NFTs_info_value" + String(index);
      document.getElementById(id).textContent = NFT_totalamount[i];
      var id = "wallet_NFT_NFTs_info_subname" + String(index);
      document.getElementById(id).textContent = NFT_info_subname[i];
      var id = "wallet_NFT_NFTs_info_name" + String(index);
      document.getElementById(id).textContent = NFT_info_name[i];
      var id = "wallet_NFT_NFTs_info_source" + String(index);
      document.getElementById(id).textContent = NFT_info_src[i];
      var id = "wallet_NFT_NFTs_info_subname" + String(index);
    }
    if (NFT_totalamount.length == 1) {
      document.getElementById("wallet_NFT_NFTs_container").style.width = '276px';
    }
    else {
      var width = NFT_totalamount.length * 276 + (NFT_totalamount.length - 1) * 50;
      document.getElementById("wallet_NFT_NFTs_container").style.width = width + "px";
    }
    //document.getElementById(id).style.width = NFT_info_src[i];
    Total_asset[wallet_pages.indexOf('NFT')] = NFT_total_asset;

    for (var i = 0; i < NFT_totalamount.length; i++) {
      var id = "wallet_NFT_NFTs_img_container" + String(i + 1);
      document.getElementById(id).style.backgroundImage = NFT_img_url[i];
    }
  }

  function load_overview_total_asset() {
    var total = 0;
    for (var i = 0; i < overview_category_totalamount.length; i++) {
      if (overview_category_totalamount[i] != 0) {
        total += overview_category_totalamount[i];
      }
    }
    Total_asset[wallet_pages.indexOf('overview')] = total;
    document.getElementById('wallet_overview_whole_asset_dollor').textContent = '$' + String(total.toFixed(3));
  }

  function calculate_percentage_all(totalamount_arr, percentage_arr) {
    for (var m in totalamount_arr) {
      switch (totalamount_arr[m]) {
        case overview_category_totalamount:
          calculate_percentage(overview_category_totalamount, percentage_arr[0], 'overview');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.overview');
          for (var k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[0][k]) + '%';
          }
          break;
        case Stock_totalamount:
          calculate_percentage(Stock_totalamount, percentage_arr[1], 'Stock');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Stock');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(Stock_institution[k]);
          }
          break;
        case MetaMask_totalamount:
          calculate_percentage(MetaMask_totalamount, percentage_arr[2], 'MetaMask');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.MetaMask');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[2][k]) + '%';
          }
          break;
        case Crypto_totalamount:
          calculate_percentage(Crypto_totalamount, percentage_arr[3], 'Crypto');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Crypto');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[3][k]) + '%';
          }
          break;
        case Phanton_totalamount:
          calculate_percentage(Phanton_totalamount, percentage_arr[4], 'Phanton');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Phanton');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[4][k]) + '%';
          }
          break;
        case NFT_totalamount:
          calculate_percentage(NFT_totalamount, percentage_arr[5], 'NFT');
          var percentage_node = document.querySelectorAll('.wallet_NFT_percentage');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[5][k]) + '%';
          }
          break;
        case SinoPac_totalamount:
          calculate_percentage(SinoPac_totalamount, percentage_arr[6], 'SinoPac');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.SinoPac');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[6][k]) + '%';
          }
          break;
        case Yuanta_totalamount:
          calculate_percentage(Yuanta_totalamount, percentage_arr[7], 'Yuanta');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Yuanta');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[7][k]) + '%';
          }
          break;
        case Citibank_totalamount:
          calculate_percentage(Citibank_totalamount, percentage_arr[8], 'Citibank');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.Citibank');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[8][k]) + '%';
          }
          break;
        case CD_NTD_totalamount:
          calculate_percentage(CD_NTD_totalamount, percentage_arr[9], 'CD_NTD');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.CD_NTD');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[9][k]) + '%';
          }
          break;
        case CD_For_totalamount:
          calculate_percentage(CD_For_totalamount, percentage_arr[10], 'CD_For');
          var percentage_node = document.querySelectorAll('.wallet_percentage_percentage.CD_For');
          for (k in percentage_node) {
            percentage_node[k].innerHTML = String(percentage_arr[10][k]) + '%';
          }
          break;
      }
    }
  }

  function calculate_percentage(total, percentage_save, page) {
    var sum = 0;
    if (page == 'NFT') {
      for (var j in total) {
        if (total[j] != 0) {
          sum += total[j];
        }
      }
      for (var j in total) {
        var percentage = ((total[j] / sum) * 100).toFixed(2);
        percentage_save[j] = percentage;
      }
    }
    else {
      var show_array = show_array_pages.indexOf(page);
      for (var j in total) {
        if (total[j] != 0 && show[show_array][j] == 'true') {
          sum += total[j];
        }
      }
      for (var j in total) {
        if (show[show_array][j] == 'true') {
          var percentage = ((total[j] / sum) * 100).toFixed(2);
          percentage_save[j] = percentage;
        }
        else {
          var percentage = 0;
          percentage_save[j] = percentage;
        }
      }
    }
  }

  var NFT_filter_currency;
  $(".close_wallet_whole_asset_currency_menu").on("click", function () {
    var chosed_currency = document.getElementById($(this).attr("id")).textContent;
    for (var currency in Currency) {
      if (chosed_currency.includes(Currency[currency])) {
        for (var wallet in wallet_pages) {
          if ($(this).attr("id").indexOf(wallet_pages[wallet]) != -1) {
            var now_wallet_page = wallet_pages[wallet];
            if (now_wallet_page == 'NFT') {
              for (var n = 0; n < NFT_totalamount.length; n++) {
                var index = n + 1;
                var id = 'wallet_NFT_NFTs_info_currency' + index;
                document.getElementById(id).textContent = Currency[currency];
                var id = "wallet_NFT_NFTs_info_value" + index;
                var NFT_value = (Currency_calculator[currency] * NFT_totalamount[n]).toFixed(3);
                document.getElementById(id).textContent = String(NFT_value);
              }
            }
            else {
              var classes_currency = '.wallet_currency_currency.' + now_wallet_page;
              var currency_node = document.querySelectorAll(classes_currency);
              var classes_totalamount = '.wallet_totalamount_totalamount.' + now_wallet_page;
              var total_anount_node = document.querySelectorAll(classes_totalamount);
              for (var i = 0, j = currency_node.length; i < j; i++) {
                currency_node[i].textContent = Currency[currency];
                switch (now_wallet_page) {
                  case 'overview':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * overview_category_totalamount[i]).toFixed(3));
                    break;
                  case 'Stock':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * Stock_totalamount[i]).toFixed(3));
                    break;
                  case 'MetaMask':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * MetaMask_totalamount[i]).toFixed(3));
                    break;
                  case 'Phanton':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * Phanton_totalamount[i]).toFixed(3));
                    break;
                  case 'Crypto':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * Crypto_totalamount[i]).toFixed(3));
                    break;
                  case 'SinoPac':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * SinoPac_totalamount[i]).toFixed(3));
                    break;
                  case 'Yuanta':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * Yuanta_totalamount[i]).toFixed(3));
                    break;
                  case 'Citibank':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * Citibank_totalamount[i]).toFixed(3));
                    break;
                  case 'CD_NTD':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * CD_NTD_totalamount[i]).toFixed(3));
                    break;
                  case 'CD_For':
                    total_anount_node[i].textContent = '$' + String((Currency_calculator[currency] * CD_For_totalamount[i]).toFixed(3));
                    break;
                }
              }
            }
            var total_asset = Currency_calculator[currency] * Total_asset[wallet];
            total_asset = total_asset.toFixed(3);
            var id = "wallet_" + now_wallet_page + "_whole_asset_dollor"
            document.getElementById(id).textContent = '$' + String(total_asset);
          }
        }
        if ($(this).attr("id").indexOf('filter') != -1) {
          NFT_filter_currency = Currency[currency];
          document.getElementById('wallet_NFT_filter_dollor_menu_text').textContent = Currency[currency];
        }
        var id = 'wallet_' + now_wallet_page + '_whole_asset_dollor_menu_text';
        document.getElementById(id).textContent = Currency[currency];
      }

    }
    if ($(this).attr("id").indexOf('filter') != -1) {
      document.getElementById('wallet_NFT_filter_scrollable_dollor_menu').style.display = 'none';
    }
    else {
      id = 'wallet_' + now_wallet_page + '_whole_asset_triangle_down'
      document.getElementById(id).style.borderTop = '6px';
      document.getElementById(id).style.borderBottom = '0px';
      document.getElementById(id).style.borderTopStyle = 'Solid';
      document.getElementById(id).style.borderTopColor = '#286A93';
      document.getElementById(id).style.borderBottomColor = 'transparent';
      id = 'wallet_' + now_wallet_page + '_whole_asset_scrollable_dollor_menu';
      document.getElementById(id).style.display = 'none';
    }

  });

  $(".slide_NFTs").on("click", function () {
    if ($(this).attr('id').indexOf('left') != -1) {  //left btn
      $("#wallet_NFT_NFTs_container").animate({ "left": "-=40.1%" });
      console.log(document.getElementById("wallet_NFT_NFTs_container").style.left);
      console.log("Left");
    }
    else {
      if (document.getElementById("wallet_NFT_NFTs_container").style.left < '0%') {     /*-----------undone-------------*/
        console.log(document.getElementById("wallet_NFT_NFTs_container").style.left);
        console.log("Right");
        $("#wallet_NFT_NFTs_container").animate({ "left": "+=40.1%" });
      }
    }
  });


  function switch_to_wallet_overview_account() {
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
    for (var i = 0; i < category_node.length; i++) {
      category_node[i].classList.replace('wallet_category_category', 'wallet_category_account');
    }

  }

  function switch_all_currency_to_NTD() {
    document.getElementById('wallet_overview_whole_asset_dollor_menu_text').textContent = 'NTD';
    for (var i = 0; i < overview_category_totalamount.length; i++) {
      var index = i + 1;
      id = "wallet_overview_currency" + String(index);
      document.getElementById(id).textContent = 'NTD';
    }
  }

  function switch_to_wallet_overview_category() {
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
    for (var i = 0; i < category_node.length; i++) {
      category_node[i].classList.replace('wallet_category_account', 'wallet_category_category');
    }
  }

  $(".wallet_NFT_NFTs").click(function () {
    for (var i = 0; i < NFT_totalamount.length; i++) {
      if ($(this).attr('id').indexOf(i + 1) != -1) {
        document.getElementById('NFT_detail_page').style.display = 'block';
        document.getElementById('wallet_NFT').style.display = 'none';
        var id = "wallet_NFT_NFTs_info_subname" + String(i + 1);
        document.getElementById('NFT_detail_name').textContent = NFT_info_name[i];

        document.getElementById('NFT_detail_img').style.backgroundImage = NFT_img_url[i];
        for (var j = 0; j < 4; j++) {
          var id = "NFT_detail_characteristic" + String(j + 1);
          document.getElementById(id).textContent = Object.keys(NFT_detail[i])[j];
        }
        for (var j = 0; j < 4; j++) {
          var id = "NFT_detail_characteristic_description" + String(j + 1);
          document.getElementById(id).textContent = Object.values(NFT_detail[i])[j];
        }
      }
    }
  });

  $("#close_NFT_detail").click(function () {
    document.getElementById('wallet_NFT').style.display = 'block';
    document.getElementById('NFT_detail_page').style.display = 'none';
  });


   /* ----------------- Scatter of NFT ---------------- */
   const hour = [ 
  ];
  
  const day = [ 
    {Date: 5.14, Amount: 3.2},
    {Date: 5.15, Amount: 2},
  ];
  
  const week = [ 
  {Date: 5.14, Amount: 3.2},
  {Date: 5.15, Amount: 2},
  {Date: 5.17, Amount: 1.8},
  ];
  
  const two_week = [ 
    {Date: 5.14, Amount: 3.2},
    {Date: 5.15, Amount: 2},
    {Date: 5.17, Amount: 1.8},
    {Date: 5.21, Amount: 2.1},
  ];
  
  const month = [ 
    {Date: 5.14, Amount: 3.2},
    {Date: 5.15, Amount: 2},
    {Date: 5.17, Amount: 1.8},
    {Date: 5.21, Amount: 2.1},
    {Date: 5.23, Amount: 2.3}
  ];

  var timesSelectClicked = 0;
  $("#scatter-selection").on("click", function(e){
    if (timesSelectClicked == 0)
    {
        timesSelectClicked += 1;
    }
    else if (timesSelectClicked == 1)
    {
      timesSelectClicked = 0;
      let slt = $('#scatter-selection option:selected').text();
      switch(slt){
        case '1 H':
          d3.select("svg").remove();
          scatter(hour, scatter_width, scatter_height);
          document.getElementById('scatter-white-bar').style.display='none';
          document.getElementById('scatter-day-scale').style.display='none';
          document.getElementById('scatter-week-scale').style.display='none';
          document.getElementById('scatter-twoWeek-scale').style.display='none';
          document.getElementById('scatter-month-scale').style.display='none';
          break;
        case '1 D':
          d3.select("svg").remove();
          scatter(day, scatter_width, scatter_height);
          document.getElementById('scatter-white-bar').style.display='block';
          document.getElementById('scatter-day-scale').style.display='block';
          document.getElementById('scatter-week-scale').style.display='none';
          document.getElementById('scatter-twoWeek-scale').style.display='none';
          document.getElementById('scatter-month-scale').style.display='none';
          break;
        case '7 D':
          d3.select("svg").remove();
          scatter(week, scatter_width, scatter_height);
          document.getElementById('scatter-white-bar').style.display='block';
          document.getElementById('scatter-week-scale').style.display='block';
          document.getElementById('scatter-day-scale').style.display='none';
          document.getElementById('scatter-twoWeek-scale').style.display='none';
          document.getElementById('scatter-month-scale').style.display='none';
          break;
        case '14 D':
          d3.select("svg").remove();
          scatter(two_week, scatter_width, scatter_height);
          document.getElementById('scatter-white-bar').style.display='block';
          document.getElementById('scatter-twoWeek-scale').style.display='block';
          document.getElementById('scatter-day-scale').style.display='none';
          document.getElementById('scatter-week-scale').style.display='none';
          document.getElementById('scatter-month-scale').style.display='none';
          break;
        case '30 D':
          d3.select("svg").remove();
          scatter(month, scatter_width, scatter_height);
          document.getElementById('scatter-white-bar').style.display='block';
          document.getElementById('scatter-month-scale').style.display='block';
          document.getElementById('scatter-day-scale').style.display='none';
          document.getElementById('scatter-week-scale').style.display='none';
          document.getElementById('scatter-twoWeek-scale').style.display='none';
          break;
      }
    }
  })

  //**********************************************   Plan page *************************************//

  var plan_category = [];

  $("#navbar_function_plan").click(function () {
    laod_plan_category();
    document.getElementById('wallet').style.display = "none";
    document.getElementById('plan_page').style.display = "block";
  });

  laod_plan_category();

  function laod_plan_category() {
    for (var i = 0; i < overview_category_category.length; i++) {
      plan_category[i] = overview_category_category[i];
      var index = i + 1;
      var id = "plan_object_container" + index;
      overview_show[i] = 'true';
      document.getElementById(id).style.display = "block";
      id = "plan_category" + index;
      document.getElementById(id).textContent = String(overview_category_category[i]);
      id = "plan_percentage" + index;
      load_overview_asset("category");
      calculate_plan_category_percentage();
    }
  }

  function calculate_plan_category_percentage() {
    var total = 0;
    for (var i = 0; i < overview_category_category.length; i++) {
      total += plan_category_percentage[i];
    }

    for (var i = 0; i < overview_category_category.length; i++) {
      plan_category_percentage[i] = (plan_category_percentage[i] * 100 / total).toFixed(2);
      var percentage_id = "plan_percentage" + String(i + 1);
      document.getElementById(percentage_id).textContent = String(plan_category_percentage[i]) + "%";
    }
  }

  var plan_estimation_amount = 0;
  var plan_estimation_time = 0;
  var plan_estimation_date = 0;
  $("#plan_estimation_amount").click(function () {
    document.getElementById('plan_estimation_amount_menu').style.display = 'flex';
  });

  $(".plan_estimation_amount_option").click(function () {
    plan_estimation_amount = 0;
    plan_estimation_amount = document.getElementById($(this).attr("id")).textContent;
    document.getElementById('plan_estimation_amount').value = plan_estimation_amount;
    document.getElementById('plan_estimation_amount_menu').style.display = 'none';
  });

  $("#plan_estimation_amount_menu").hover(function () {
  }, function () {
    $("#plan_estimation_amount_menu").css("display", "none");
  });
  
  $('#plan_estimation_amount').keypress(function(event){ 
    var keynum = (event.keyCode ? event.keyCode : event.which); 
    if(keynum == '13'){ 
      $("#plan_estimation_amount_menu").css("display", "none");
    }
  });

  $("#plan_estimation_time").click(function () {
    document.getElementById('plan_estimation_time_menu').style.display = 'flex';
  });

  $(".plan_estimation_time_option").click(function () {
    plan_estimation_time = 0;
    plan_estimation_time = document.getElementById($(this).attr("id")).textContent;
    document.getElementById('plan_estimation_time').value = plan_estimation_time;
    document.getElementById('plan_estimation_time_menu').style.display = 'none';
  });

  $("#plan_estimation_time_menu").hover(function () {
  }, function () {
    $("#plan_estimation_time_menu").css("display", "none");
  });

  $('#plan_estimation_time').keypress(function(event){ 
    var keynum = (event.keyCode ? event.keyCode : event.which); 
    if(keynum == '13'){ 
      $("#plan_estimation_time_menu").css("display", "none");
    }
  });

  $("#plan_estimation_date").click(function () {
    document.getElementById('plan_estimation_date_menu').style.display = 'flex';
  });

  $(".plan_estimation_date_option").click(function () {
    plan_estimation_date = 0;
    plan_estimation_date = document.getElementById($(this).attr("id")).textContent;
    document.getElementById('plan_estimation_date').textContent = plan_estimation_date;
    document.getElementById('plan_estimation_date_menu').style.display = 'none';
  });

  $("#plan_add_object_container").click(function () {
    if (plan_category.length + 1 <= 6) {
      var index = plan_category.length + 1;
      var id = "plan_object_container" + index;
      document.getElementById(id).style.display = "block";
      id = "plan_category_menu_category" + index;
      document.getElementById(id).style.display = "block";
      id = "plan_percentage" + index;
      document.getElementById(id).textContent = "-";
    }
    else {
      alert("Limited categories!")
    }
  });

  $(".plan_category_menu_category").click(function () {
    for (var i = 1; i <= 6; i++) {
      if ($(this).attr("id").indexOf(i) != -1) {
        var id = "plan_category_menu_container" + i;
        document.getElementById(id).style.display = "flex";
      }
    }
  });


  $(".plan_category_menu_option").click(function () {
    for (var i = 1; i <= 6; i++) {
      if ($(this).attr("id").indexOf(i) != -1) {
        var id = "plan_category_menu_category" + i;
        document.getElementById(id).textContent = document.getElementById($(this).attr("id")).textContent;
        document.getElementById(id).style.display = "flex";
        id = "plan_category_menu_container" + i;
        document.getElementById(id).style.display = "none";
        plan_category[plan_category.length] = document.getElementById($(this).attr("id")).textContent;
      }
    }
  });

  $("#plan_confirm").click(function () {
    var increase_amount;
    var increase_time;
    var increase_date;
    if($("#plan_estimation_amount").val() == ''){
      $("#plan_estimation_ammount_warn_container").css("display", "flex");
    }
    else{
      increase_amount = $("#plan_estimation_amount").val();
    }
    if($("#plan_estimation_time").val() == ''){
      $("#plan_estimation_time_warn_container").css("display", "flex");
    }
    else{
      increase_time = $("#plan_estimation_time").val();
    }
    if($("#plan_estimation_amount").val() == ''){
      increase_date = "day";
    }
    else{
      increase_date = $("#plan_estimation_amount").val();
    }
    console.log(increase_date);
  });
  /*$(".plan_category_menu_option").hover(function () {
    var id;
    var id_menu;
    for (var i = 1; i <= 6; i++) {
      if ($(this).attr("id").indexOf(i) != -1) {
        id = "plan_category_menu_option" + i;
        id_menu = "plan_category_menu_category" + i;
      }
    }
    document.getElementById(id_menu).textContent = document.getElementById(id).textContent;
  });*/

  /*************************** End Plan ***********************/
  //$(document).ready(function () {
  console.log("ready")
  $("#homepage_navbar_signin").click(function () {
    console.log("debug")
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('signin_page').style.display = 'block';
  });

  $("#homepage_navbar_signup").click(function () {
    document.getElementById('signup_page').style.display = 'block';
    document.getElementById('homepage').style.display = 'none';
  });

  $("#signin_noaccount_signup_text").on("click", function () {
    document.getElementById('signup_page').style.display = 'block';
    document.getElementById('signin_page').style.display = 'none';
  });

  $("#signup_back_container").on("click", function () {
    document.getElementById('signup_page').style.display = 'none';
    document.getElementById('signin_page').style.display = 'block';
  });

  $("#signup_haveaccount_signin_text").on("click", function () {
    document.getElementById('signup_page').style.display = 'none';
    document.getElementById('signin_page').style.display = 'block';
  });

  $("#signup_verify_confirm").on("click", function () {
    document.getElementById('signup_page').style.display = 'none';
    document.getElementById('verify_email_page').style.display = 'block';
    document.getElementById('verify_email_container').style.display = 'none';
  });

  $("#verify_email_navbar_signin").on("click", function () {
    document.getElementById('verify_email_page').style.display = 'none';
    document.getElementById('signin_page').style.display = 'block';
  });

  $("#verify_email_navbar_signup").on("click", function () {
    document.getElementById('verify_email_page').style.display = 'none';
    document.getElementById('signup_page').style.display = 'block';
  });


  $(".toTop").on("click", function (e) {
    e.preventDefault();
    $("html").animate({
      scrollTop: 0,
    }, 100)
  });
  $('[data-toggle="tooltip"]').tooltip();
  $("#wallet_account_choice").click(function () {
    $("#wallet_category_choice").css('color', '#286A93');
    $("#wallet_account_choice").css('color', 'white');
    $("#category_btw_account").animate({ left: "50%" }, { queue: false });
    $("#category_btw_account").animate({ width: "50%" }, { queue: false });
    switch_to_wallet_overview_account();
  });
  $("#wallet_category_choice").click(function () {
    $("#wallet_category_choice").css('color', 'white');
    $("#wallet_account_choice").css('color', '#286A93');
    $("#category_btw_account").animate({ left: "0%" }, { queue: false });
    $("#category_btw_account").animate({ width: "55%" }, { queue: false });
    switch_to_wallet_overview_category();
  });

  //-------------------------------- front end ---------------------------------//
  $("#textbox_homepage_03_subscribe_btn").click(function () {
    $.get('./0homepage_newEmailSubscribe', {
      emailToAdd: $("#textbox_homepage_03_subscribe_box").val()
    }, function (result) {
      alert(result)
    })
  })
  $("#signup_signup_btn").click(function () {
    console.log("Sign up");
    if ($("#signup_confirm_password_typebox").val() != $("#signup_password_typebox").val()) {
      alert("Check Password Again")
      $("#signup_confirm_password_typebox").val() = ""
      $("#signup_password_typebox").val() = ""
    } else if ($("#signup_confirm_password_typebox").val() == "" || $("#signup_email_typebox").val() == "" || $("#signup_password_typebox").val() == "" || $("#signup_username_typebox").val() == "") {
      alert("Make Sure All Blanks Are Filled!")
    }
    else if ($("#signup_checkbox").prop("checked") == false) {
      alert("Please accept privacy policy!")
    }
    else {
      console.log("Signing up");
      $.get('./sign_up', {
        email: $("#signup_email_typebox").val(),
        username: $("#signup_username_typebox").val(),
        password: $("#signup_password_typebox").val()
      }, function (result) {
        console.log("result:" + result);
        alert(result)
        if (result == 'success') {
          document.getElementById('verify_email_container').style.display = 'block';
        }
      })
    }
  })
  $("#signin_signin_btn").click(function () {
    $.get('./sign_in', {
      email: $("#signin_email_typebox").val(),
      password: $("#signin_password_typebox").val()
    }, function (result) {
      if (result == "no_such_email") {
        console.log("debug");
        alert(result)
      }
      else if (result == false) {
        alert("Wrong password")
      }
      else {
        console.log("turn to wallet page")
        turn_to_wallet_page();
      }
    })
  })

    /* ---------------------------- Stock Chart ------------------------------ */
  /* ----- Chart Type select ----- */
  $(".change-chart-btn").on("click",function(){
    $('.change-chart-btn').css({"color":"#C4C4C4", "border-bottom": "2.8px solid #C4C4C4"});// Remove Before set color to selected button
    $('.change-chart-btn').removeClass("selected");
    $(this).css({"color":"#286A93",  "border-bottom": "2.8px solid #286A93"}); // Set Color to Selected Button
    $(this).addClass("selected");
  });
  $(".change-chart-btn").click(function(){
    // console.log(this.id);
    if(this.id == "select-pie-chart-btn"){
      document.getElementById('line-month-scale').style.display='none';
      document.getElementById('line-chart-category').style.display='none';
      document.getElementById('line-week-scale').style.display='none';
      document.getElementById('line-day-scale').style.display='none';
      var scp_btn = document.getElementsByClassName("scope-btn");
      for(let i = 0; i < scp_btn.length; i++){
        scp_btn[i].style.visibility='hidden';
      }
      d3.select("svg").remove();
      draw();
    }else if(this.id == "select-line-chart-btn"){
      var scp_btn = document.getElementsByClassName("scope-btn");
      for(let i = 0; i < scp_btn.length; i++){
        scp_btn[i].style.visibility='visible';
      }
      /* ----- Line Chart Scope select ----- */
      $(".scope-btn").on("click",function(){
        $('.scope-btn').css("background","#D4D4D4");
        $('.scope-btn').removeClass("select-scope");
        $(this).css("background","linear-gradient(270deg, #528CA2 0%, #286A93 100%)");
        $(this).addClass("select-scope");
        console.log("ID: " + this.id);
        var output = ''
        switch(this.id){
          case 'day':
            output = 'D';
            break;
          case 'week':
            output = 'W';
            break;
          case 'month':
            output = 'M';
            break;
          default:
              break;
        }

        switch(this.id){
          case "day":
            $.get('./get_stock', {
              stock_code:2330,
              CEyear:2022,
              month:5
            }, function (result) {
              var data_stock = result;
              console.log(data_stock)
              var day = [
                {Date: 5.13, Amount: data_stock[8][1]},
                {Date: 5.17, Amount: data_stock[10][1]},
                {Date: 5.19, Amount: data_stock[12][1]},
                {Date: 5.20, Amount: data_stock[13][1]},
                {Date: 5.23, Amount: data_stock[14][1]}
              ];
              update(output, day);
              document.getElementById('line-month-scale').style.display='none';
              document.getElementById('line-chart-category').style.display='block';
              document.getElementById('line-week-scale').style.display='none';
              document.getElementById('line-day-scale').style.display='block';
            });
            break;
          case "week":
            var week;
            $.get('./get_stock', {
              stock_code:2330,
              CEyear:2022,
              month:3
            }, function (result) {
              var data_stock = result;
              console.log(data_stock)
              week = [
                {Date: 3.18, Amount: data_stock[13][1]}
              ];
            });
            console.log("outside week: " + week);
            $.get('./get_stock', {
              stock_code:2330,
              CEyear:2022,
              month:4
            }, function (result) {
              var data_stock = result;
              console.log("week: " + week);
              console.log(data_stock)
              var week = [
                {Date: 3.18, Amount: data_stock[data_stock.length-1][1]},
                {Date: 4.1, Amount: data_stock[data_stock.length-5][1]},
                {Date: 4.15, Amount: data_stock[data_stock.length-8][1]},
                {Date: 4.29, Amount: data_stock[data_stock.length-14][1]}
              ];
              update(output, week);
              document.getElementById('line-month-scale').style.display='none';
              document.getElementById('line-chart-category').style.display='block';
              document.getElementById('line-week-scale').style.display='block';
              document.getElementById('line-day-scale').style.display='none';
            });
            break;
          case "month":
            $.get('../get_stock_month_average', {
              stock_code:2330,
              CEyear:2022,
              month:4
            }, function (result) {
              var data_stock = result;
              var month = [
                {Date: 1, Amount: data_stock[data_stock.length-1][1]},
                {Date: 2, Amount: data_stock[data_stock.length-5][1]},
                {Date: 3, Amount: data_stock[data_stock.length-10][1]},
                {Date: 4, Amount: data_stock[data_stock.length-15][1]},
                {Date: 5, Amount: data_stock[data_stock.length-18][1]}
              ];
              update(output, month); 
              document.getElementById('line-day-scale').style.display='none';
              document.getElementById('line-week-scale').style.display='none';
              document.getElementById('line-month-scale').style.display='block';
              document.getElementById('line-chart-category').style.display='block';
            });
            break;
        }
      });
      d3.select("svg").remove();
    }});



  load_database();
});

var logged_account = [];
function modify_navbar_account_menu(account) {
  logged_account[logged_account.length] = account;
  var extend_height = (logged_account.length + 1) * 40;
  document.getElementById('navbar_account_dropdown_menu_container').style.height = extend_height + "%";
  var id = 'navbar_account_line' + logged_account.length;
  document.getElementById(id).style.display = 'block';
  var id = 'navbar_account_logged_account' + logged_account.length;
  document.getElementById(id).style.display = 'block';
  document.getElementById(id).textContent = account;
}

/* ****** ------------------------------------------------------- Chart Animation--------------------------------------------------------- ****** */
let data = [296210.326, 175832.331, 91722.462, 30017.135, 25127.746];
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
  const Name = ["NFT", "Stock", "Crypto", "CD (For)", "CD (NTD)"]
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
    .attr('class', 'count');

  tooltips.append('div')
    .attr('class', 'percent');

  // 加上滑鼠事件
  d3.select('#piechart')
    .style('cursor', 'pointer')
    .on('mouseover', function () {
      tooltips.style("opacity", 1)
    })
    .on("mousemove", function (event, d) {
      var percent = ["296210.326", "175832.331", "91722.462", "30017.135", "25127.746"]
      let riskNum = [65, 54, 49, 45, 46];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total) / 10;
      }
      percent.forEach(myFunction);
      let pt = d3.pointer(event) // 抓圓點位置
      let i;

      if (pt[0] > 30) {
        i = 0;
      } else if (pt[0] > -63 && pt[1] < 0) {
        i = 4;
      } else if (pt[0] < 30 && pt[1] > -17) {
        i = 1;
      } else if (pt[0] < 0 && -209 < pt[1] && pt[1] < -17) {
        i = 2;
      } else {
        i = 3;
      }

      tooltips.style("opacity", 1)
        .style('left', (2 * pt[0] + 450) + 'px') // 設定tooltips位置
        .style('top', (2 * pt[1] + 450) + 'px')
        .html(" " + Name[i] + "; RI: " + riskNum[i] + "<br>(" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
    })
    .on('mouseleave', function () { //設定滑鼠離開時tooltips隱藏
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

function show_risk_index(page) {
  setTimeout(function () {
    switch (page) {
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
    .attr('class', 'count');

  tooltips.append('div')
    .attr('class', 'percent');

  // 加上滑鼠事件
  d3.select('#piechart_NFT')
    .style('cursor', 'pointer')
    .on('mouseover', function () {
      tooltips.style("opacity", 1)
    })
    .on("mousemove", function (event, d) {
      var percent = ["1651.428965", "1455.681035"];
      var total = d3.sum(percent);
      function myFunction(item, index, arr) {
        arr[index] = Math.round(1000 * item / total) / 10;
      }
      percent.forEach(myFunction);

      let pt = d3.pointer(event) // 抓圓點位置

      let i;

      if (pt[0] > 0 || (-35 < pt[0] && pt[0] < 0 && pt[1] > 0)) {
        i = 0;
      } else if (pt[0] < 0) {
        i = 1;
      }

      tooltips.style("opacity", 1)
        .style('left', (1.8 * pt[0] + 450) + 'px') // 設定tooltips位置
        .style('top', (1.8 * pt[1] + 450) + 'px')
        .html(" " + Name[i] + " <br> (" + percent[i] + "%)") // 抓到綁定在DOM元素的資料  
        .style("font-family", "SFProDisplay-Heavy")
        .style("font-size", "20px")
    })
    .on('mouseleave', function () { //設定滑鼠離開時tooltips隱藏
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

/* ------------------------- Scatter ------------------------- */
// set the dimensions and scatter_margins of the graph
var scatter_margin = {top: 25, right: 25, bottom: 20, left: 20},
    scatter_width = 620 - scatter_margin.left - scatter_margin.right,
    scatter_height = 300 - scatter_margin.top - scatter_margin.bottom;

function scatter(data, width, height){
  const svg = d3.select("#scatter-chart")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 300)
    .append("g")
    .attr("transform", `translate(${scatter_margin.left + 250} , 40)`);

  if(data == ''){
    document.getElementById('nodata').style.display='block';
    document.getElementById('scatter-chart').style.display='none';
  }else{
    console.log("Have data");
    document.getElementById('nodata').style.display='none';
    document.getElementById('scatter-chart').style.display='block';
    // Add X axis
    const x = d3.scaleLinear()
    .domain([d3.min(data, function(d) { return d.Date })-0.01, d3.max(data, function(d) { return d.Date }) ])
    .range([ 0, width ]);
    const xAxis = d3.axisBottom().scale(x).ticks(6);
    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(xAxis);
    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, d3.max(data, function(d) { return d.Amount  })+1 ])
    .range([ height, 0]);
    const yAxis = d3.axisLeft().scale(y).ticks(4);
    svg.append("g")
    .call(yAxis);

    svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -11+"%")
    .attr("x", -7.5+"%")
    .style("font-family","SFProDisplay-Semibold")
    .style("font-size",20)
    .style("fill","#42506B")
    .text("Amount (ETH)")

    // grid line
    // function make_y_gridlines() {		
    //   return d3.axisLeft(y)
    //       .ticks(3)
    // }
    // svg.append("g")			
    // .attr("class", "grid")
    // .call(make_y_gridlines()
    //     .tickSize(-scatter_width)
    //     .tickFormat("")
    // )

    // Add a tooltip div
    var tooltip = d3.select("#scatter-chart")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("z-index", "10")
    // Add dots
    svg.append('g')
    .selectAll("dot")
    .data(data)
    .join("circle")
        .attr("cx", function (d) { return x(d.Date); } )
        .attr("cy", function (d) { return y(d.Amount); } )
        .attr("r", 5)
        .style("fill", "#528CA2")
    .on('mouseover', function (d, i) {
      var random_seed = Math.floor(Math.random() * 5);
      switch(random_seed){
        case 0:
          tooltip.style('background-image','url("./Img/scatter/Group\ 416.png")')
          break;
        case 1:
          tooltip.style('background-image','url("./Img/scatter/Group\ 417.png")')
          break;
        case 2:
          tooltip.style('background-image','url("./Img/scatter/Group\ 418.png")')
          break;
        case 3:
          tooltip.style('background-image','url("./Img/scatter/Group\ 419.png")')
          break;
        case 4:
          tooltip.style('background-image','url("./Img/scatter/Group\ 420.png")')
          break;
      }
      d3.select(this).transition()
          .duration('100')
          .attr("r", 7.5);
      tooltip.transition()
          .duration(100)
          .style("opacity", 1);
     })
    .on('mousemove', function(d, i){
      console.log("X: " + d3.pointer(event)[0])
      console.log("Y: " + d3.pointer(event)[1])
      tooltip
      .style("left", (d3.pointer(event)[0]+135) + "px")
      .style("top", (d3.pointer(event)[1]-100) + "px")
    })
    .on('mouseout', function (d, i) {
          d3.select(this).transition()
               .duration('200')
               .attr("r", 5);
          tooltip.transition()
          .duration('200')
          .style("opacity", 0);
     });
  }
}

/* -------------------- Add Account Event ---------------------- */
function TurnBack_choose_account(SuccessOrNot){
  document.getElementById("add_new_account_page").style.display='block';
  document.getElementById("connect_nft_account").style.display='none';
  document.getElementById("connect_bank_account").style.display='none';
 switch(SuccessOrNot){
  case 1:
    document.getElementById("demo-metamask").style.display='block';
    break;
  case 2:
    document.getElementById("demo-phantom").style.display='block';
    break;
  case 3:
    document.getElementById("demo-citibank").style.display='block';
    break;
  case 4:
    document.getElementById("demo-sinoPac").style.display='block';
    break;
  case 5:
    document.getElementById("demo-yuanta").style.display='block';
    break;
 }
}

function add_NFT_account(input_id) {
  document.getElementById("add_new_account_page").style.display = 'none';
  document.getElementById("connect_nft_account").style.display = 'block';
}

function add_Bank_account(input_id){
  document.getElementById("add_new_account_page").style.display='none';
  document.getElementById("connect_bank_account").style.display='block';
}
/* --------------------  Modal Action  -------------------- */
// NFT & Crypto account
const input_MetaMask_success_password = 456789;
const input_Phantom_success_password = 878787;
// Bank account
const input_CitiBank_success_password = 4747474747;
const input_SinoPac_success_password = 5050505050;
const input_Yuanta_success_password = 1122334455;
var input_password;

function get_password(id) {
  input_password = document.querySelector("#" + id).value;
  if( input_password !== null){
    switch(id){
      case "metamask-password-input":
        console.log("metamask_password:  " + input_password);
        break;
      case "phantom-password-input":
        console.log("phantom_password:  " + input_password);
        break;
      case "Citi-password-input":
        console.log("Citi_password:  " + input_password);
        break;
      case "SinoPac-password-input":
        console.log("SinoPac_password:  " + input_password);
        break;
      case "Yuanta-password-input":
        console.log("Yuanta_password:  " + input_password);
        break;
      default:
        break;
    }
  }
}

function verify_password(id) {
  let state = 1; // Inform which state the class 'dialog' should be closed
  let SuccessOrNot = 0; // Initialize false (which equals failed)
  /*
    1 -> Success to MetaMask
    2 -> Success to Phantom
    3 -> Success to CitiBank
    4 -> Success to SinoPacBank
    5 -> Success to Yuanta
   */
  // NFT & Crypto
  $('#MetaMaskModal').modal('hide');
  $('#PhantomModal').modal('hide');
  // Bank
  $('#CitiBankModal').modal('hide');
  $('#SinoPacModal').modal('hide');
  $('#YuantaModal').modal('hide');

  switch(id){
    case "metamask-unlock":
      if(input_password == input_MetaMask_success_password){
        SuccessOrNot = 1;
        document.getElementById('MetaMask-connect-success').style.display='block';
        document.getElementById('MetaMask-dialog-success').style.display='block';
      }else {
        SuccessOrNot = 0;
        document.getElementById('MetaMask-connect-failed').style.display='block';
        document.getElementById('MetaMask-dialog-failed').style.display='block';
      }
      break;
    case "phantom-unlock":
      if(input_password == input_Phantom_success_password){
        SuccessOrNot = 2;
        document.getElementById('Phantom-connect-success').style.display='block';
        document.getElementById('Phantom-dialog-success').style.display='block';
      }else {
        SuccessOrNot = 0;
        document.getElementById('Phantom-connect-failed').style.display='block';
        document.getElementById('Phantom-dialog-failed').style.display='block';
      }
      break;
    case "Citi-unlock":
      if(input_password == input_CitiBank_success_password){
        SuccessOrNot = 3;
        document.getElementById('Citi-connect-success').style.display='block';
        document.getElementById('Citi-dialog-success').style.display='block';
      }else {
        SuccessOrNot = 0;
        document.getElementById('Citi-connect-failed').style.display='block';
        document.getElementById('Citi-dialog-failed').style.display='block';
      }
      break;
    case "SinoPac-unlock":
      if(input_password == input_SinoPac_success_password){
        SuccessOrNot = 4;
        document.getElementById('SinoPac-connect-success').style.display='block';
        document.getElementById('SinoPac-dialog-success').style.display='block';
      }else {
        SuccessOrNot = 0;
        document.getElementById('SinoPac-connect-failed').style.display='block';
        document.getElementById('SinoPac-dialog-failed').style.display='block';
      }
      break;
    case "Yuanta-unlock":
      if(input_password == input_Yuanta_success_password){
        SuccessOrNot = 5;
        document.getElementById('SinoPac-connect-success').style.display='block';
        document.getElementById('SinoPac-dialog-success').style.display='block';
      }else {
        SuccessOrNot = 0;
        document.getElementById('SinoPac-connect-failed').style.display='block';
        document.getElementById('SinoPac-dialog-failed').style.display='block';
      }
      break;
  }
  $(".dialog").on("click", function () {
    if (state === 1) {
      $(".dialog").fadeOut("normal");
      state = 0;
      if (SuccessOrNot !== 0) {
        TurnBack_choose_account(SuccessOrNot);
      }
    }
  });
  $(".verify-modal").on("click", function (event) {
    event.stopPropagation();
  });
  // NFT & Crypto
  $("#metamask-password-input").val('');
  $("#phantom-password-input").val('');
  // Bank
  $("#Citi-userid-input").val('');
  $("#Citi-password-input").val('');
   $("#SinoPac-userid-input").val('');
  $("#SinoPac-password-input").val('');
  $("#Yuanta-userid-input").val('');
  $("#Yuanta-password-input").val('');
}
