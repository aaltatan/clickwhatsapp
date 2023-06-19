let form = document.querySelector("form");

form.onsubmit = function () {
  let input = document.querySelector("input").value;
  let reNum = /09[1-9]\d{7}/g;
  let criteria = reNum.test(input);
  if (criteria) {
    console.log(input);
    let url = `https://web.whatsapp.com/send?phone=+963${input.slice(
      1,
      input.length
    )}`;
    window.open(url, "_blank");
  }
  return false;
};
