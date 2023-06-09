const thankYouElement = document.querySelector(".thank-you");
const ratingElement = document.querySelector(".rating");
var rating;

function handleSubmit(form) {
  form.preventDefault();
  var ele = document.getElementsByName("rating");

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      if (isNaN(ele[i].value)) {
        rating = 1;
      } else {
        rating = Number(ele[i].value) + 1;
      }
    }
  }

  if (!rating) {
    alert("Please select a rating!");
  } else {
    changeState();
  }
}

function changeState() {
  const ratingSpanElement = document.getElementById("rating-span");

  ratingElement.style.animation = "fadeOut 0.7s forwards";

  setTimeout(() => {
    thankYouElement.style.display = "block";
    ratingElement.style.display = "none";
    thankYouElement.style.animation = "fadeIn 0.7s forwards";
  }, 700);

  ratingSpanElement.innerHTML = rating;
}
