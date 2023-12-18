
let baseURL = "http://numbersapi.com";

// 1.
let favNumber = 4;
axios.get(`${baseURL}/${favNumber}`).then(data => {
  console.log(data);
});


// 2.
let favNumbers = [7, 11, 22];
axios.get(`${baseURL}/${favNumbers}`).then(data => {
  console.log(data);
});


// 3
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});
