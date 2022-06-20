
$(document).ready(function () {
  var uname = "b"

  $("#metamask-unlock").click(function () {
      alert($("#metamask-userid-input").val());
      $.get('./new_bank_account', {
          username: uname,
          hostname: "metamask",
          bank_account_id: $("#metamask-userid-input").val(),
          deposit_currency: "ntd",
          deposit_amount: 100,
          account_type:"nft"
      }, function (result) {
          alert(result);
      })
  })

  $("#phantom-unlock").click(function () {
      alert($("#phantom-userid-input").val());
      $.get('./new_bank_account', {
          username: uname,
          hostname: "phantom",
          bank_account_id: $("#phantom-userid-input").val(),
          deposit_currency: "ntd",
          deposit_amount: 590,
          account_type:"nft"
      }, function (result) {
          alert(result);
      })
  })

  $("#Citi-unlock").click(function () {
      alert($("#Citi-userid-input").val());
      console.log($("#Citi-userid-input").val());
      $.get('./new_bank_account', {
          username: uname,
          hostname: "citibank",
          bank_account_id: $("#Citi-userid-input").val(),
          deposit_currency: "ntd",
          deposit_amount: 590000,
          account_type:"bank"
      }, function (result) {
          alert(result);
      })
  })

  $("#SinoPac-unlock").click(function () {
      alert($("#SinoPac-userid-input").val());
      console.log($("#SinoPac-userid-input").val());
      $.get('./new_bank_account', {
          username: uname,
          hostname: "SinoPacBank",
          bank_account_id: $("#SinoPac-userid-input").val(),
          deposit_currency: "ntd",
          deposit_amount: 3008000,
          account_type:"bank"
      }, function (result) {
          alert(result);
      })
  })

  $("#Yuanta-unlock").click(function () {
      alert($("#Yuanta-userid-input").val());
      console.log($("#Yuanta-userid-input").val());
      $.get('./new_bank_account', {
          username: uname,
          hostname: "YuantaBank",
          bank_account_id: $("#Yuanta-userid-input").val(),
          deposit_currency: "ntd",
          deposit_amount: 75000,
          account_type:"bank"
      }, function (result) {
          alert(result);
      })
  })
})
  