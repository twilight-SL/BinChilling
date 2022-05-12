function TurnBack_choose_account(){
  document.getElementById("add_new_account_page").style.display='block';
  document.getElementById("connect_nft_account").style.display='none';
  document.getElementById("demo-add").style.display='block';
}

function add_NFT_account(input_id){
  document.getElementById("add_new_account_page").style.display='none';
  document.getElementById("connect_nft_account").style.display='block';
}

/* --------------  Add account Scroll Top  -------------- */
$(document).ready(function () {
  $(".toTop").on("click", function (e) {
    e.preventDefault();
    $("html").animate({
      scrollTop: 0,
    }, 100)
  });
});


/* --------------------  Modal Action  -------------------- */
const input_MetaMask_success_password = 456789;
var input_password;


function get_metamask_password(){
  input_password = document.querySelector("#metamask-password-input").value;
  if( input_password !== null){
      console.log("get_metamask_password: " + input_password);
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
    if(state === 1){
      $(".dialog").fadeOut("normal");
      state = 0;
       if(SuccessOrNot === 1){
         TurnBack_choose_account();
       }
    }
  });
  
  $( ".verify-modal" ).on( "click", function(event) {
    event.stopPropagation();
  });
  $("#metamask-password-input").val('');
}
