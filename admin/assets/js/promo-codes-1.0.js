var UserLevel = document.getElementById("UserLevel").value;
var LoggedUser = document.getElementById("LoggedUser").value;
var company_id = document.getElementById("company_id").value;
var default_location = document.getElementById("default_location").value;

$(document).ready(function () {
  OpenIndex();
});

function OpenIndex() {
  document.getElementById("index-content").innerHTML = InnerLoader;
  ClosePopUP();

  function fetch_data() {
    $.ajax({
      url: "assets/content/promotion_module/promo_codes/index.php",
      method: "POST",
      data: {
        LoggedUser: LoggedUser,
        UserLevel: UserLevel,
      },
      success: function (data) {
        $("#index-content").html(data);
      },
    });
  }
  fetch_data();
}

function NewCode(promoCodeId = 0) {
  document.getElementById("loading-popup").innerHTML = InnerLoader;

  function fetch_data() {
    $.ajax({
      url: "assets/content/promotion_module/promo_codes/new-code.php",
      method: "POST",
      data: {
        LoggedUser: LoggedUser,
        UserLevel: UserLevel,
        promoCodeId: promoCodeId,
      },
      success: function (data) {
        $("#loading-popup").html(data);
        OpenPopup();
      },
    });
  }
  fetch_data();
}

function SaveNewCode(promoCodeId = 0) {
  var form = document.getElementById("promoCodeForm");

  if (form.checkValidity()) {
    showOverlay();
    var formData = new FormData(form);
    formData.append("LoggedUser", LoggedUser);
    formData.append("UserLevel", UserLevel);
    formData.append("company_id", company_id);
    formData.append("promoCodeId", promoCodeId);

    function fetch_data() {
      $.ajax({
        url: "assets/content/promotion_module/promo_codes/save-code.php",
        method: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
          var response = JSON.parse(data);
          if (response.status === "success") {
            var result = response.message;
            OpenAlert("success", "Done!", result);
            ClosePopUP();
            OpenIndex();
          } else {
            var result = response.message;
            OpenAlert("error", "Oops.. Something Wrong!", result);
          }
          hideOverlay();
        },
      });
    }
    fetch_data();
  } else {
    form.reportValidity();
    result = "Please Filled out All * marked Fields.";
    OpenAlert("error", "Oops!", result);
  }
}
