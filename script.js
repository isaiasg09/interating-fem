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

  // console.log(rating);
}
