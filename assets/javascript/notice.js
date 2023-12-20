function updateNoticeBanners() {
    var noticeBanners = document.getElementsByClassName("notice-banner");
  
    for (var i = 0; i < noticeBanners.length; i++) {
      var currentBanner = noticeBanners[i];
      currentBanner.innerHTML = "<strong>Important Notice:</strong> We are currently undergoing maintenance. Some services may be temporarily unavailable. We apologize for any inconvenience.";
    }
  }
  
  window.onload = function () {
    updateNoticeBanners();
  };