function updateItem(link) {
  var $feedbackOverlay = document.getElementById("feedback-popup");
  $feedbackOverlay.className += " is-active";
  var $sendButton = document.getElementById("send-feedback-button");
  var $notNowButton = document.getElementById("not-now-feedback-button");
  $sendButton.href = link;
  $notNowButton.href = link;
  console.log(link)
};

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);


  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });

    var $closeFeedbackPopup = document.getElementById("close-feedback")

    $closeFeedbackPopup.addEventListener('click', () => {
      document.getElementById("feedback-popup").className = "modal"
    })
  }


  // var $listItems = Array.prototype.slice.call(document.getElementsByClassName("incomplete"));
  // var $feedbackOverlay = document.getElementById("feedback-popup");
  //
  // if ($listItems.length > 0) {
  //
  //   console.log($listItems);
  //
  //   // $listItems.forEach(function ($item) {
  //   //   console.log($item.className);
  //   //   $item.addEventListener('click', () => {
  //   //     $feedbackOverlay.className += " is-active";
  //   //
  //   //   });
  //   // });
  //
  // };

});
