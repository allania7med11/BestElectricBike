var id = "homeLink";
// function to hundle scrolling and change active link
handleScroll = function() {
  var newId;
  const tFeatures = document.getElementById("features").offsetTop;
  const tReviews = document.getElementById("reviews").offsetTop;
  const tOffer = document.getElementById("specialOffre").offsetTop;
  if (1.1 * window.pageYOffset >= tOffer) {
    newId = "offerLink";
  } else if (1.1 * window.pageYOffset >= tReviews) {
    newId = "reviewsLink";
  } else if (1.1 * window.pageYOffset >= tFeatures) {
    newId = "featuresLink";
  } else {
    newId = "homeLink";
  }
  if (newId !== id) {
    var old = document.getElementById(id);
    old.classList.remove("active");
    var nw = document.getElementById(newId);
    nw.classList.add("active");
    id = newId;
  }
};
window.addEventListener("scroll", handleScroll);

