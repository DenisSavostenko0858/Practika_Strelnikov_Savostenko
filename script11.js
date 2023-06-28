const brand_item = document.getElementById("marka").value;
const type_item = document.getElementById("product").value;
console.log(brand_item, type_item, );

// Вынимаем https ссылку строки
function getValue(array) {
  console.log(array);
  function cheakboks() {
    const check = document.getElementById("myCheck").checked;
    const box = document.getElementById("myCheck")
    if (check == true){
      array.sort(sortFunction);
      function sortFunction(a, b) {
        if (Number(a.price) === Number(b.price)) {
          return 0;
        } else {
          return Number(a.price) < Number(b.price) ? -1 : 1; //Цена по возрастанию
        }
      }
    }
}
  console.log(array[0]);
  document.getElementById("blokip").innerHTML = array[0].brand + "<br />"+array[0].name + "<br />"+ "Цена: " +array[0].price +"$"+ "<br />"+"Photo:"+"<br />"+"<img src=' +array[0].image_link+\' wight=\'200px\' height=\'200px\'>" + "<br />"+"<a href='"+array[0].product_link+"'>Cсылка на магазин</a>" +  "<br />"+ "<br />"+ "<br />"+ array[1].brand + "<br />"+array[1].name + "<br />"+"Цена: "+array[1].price + "$"+"<br />"+"Photo:"+"<br />"+"<img src=' +array[1].image_link+\' wight=\'200px\' height=\'200px\'>" + "<br />"+"<a href='"+array[1].product_link+"'>Cсылка на магазин</a>"+ "<br />"+ "<br />"+ "<br />"+ array[2].brand + "<br />"+array[2].name + "<br />"+"Цена: "+array[2].price +"$" + "<br />"+"Photo:"+"<br />"+"<img src=' +array[2].image_link+\' wight=\'200px\' height=\'200px\'>" + "<br />"+"<a href='"+array[2].product_link+"'>Cсылка на магазин</a>";
}
// Обращаемся к базе данных через fetch и .then
const krData = function (brand_item, type_item) {
  fetch(
    ` http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand_item}&product_type=${type_item} `
  )
    .then((response) => {
      console.log(response.status);

      if (!response.ok)
        throw new Error(`Ошибка :( ${response.status}`);
      return response.json();
    })
    .then(function (data) {
      getValue(data);
    });
     document.getElementById("blokih").innerHTML = brand_item + " " + type_item;
};
// head
function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});

// ползун
 
// const rangeInput = document.querySelectorAll(".range-input input"),
//   priceInput = document.querySelectorAll(".price-input input"),
//   range = document.querySelector(".slider .progress");
// let priceGap = 1000;
 
// priceInput.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     let minPrice = parseInt(priceInput[0].value),
//       maxPrice = parseInt(priceInput[1].value);
 
//     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//       if (e.target.className === "input-min") {
//         rangeInput[0].value = minPrice;
//         range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//       } else {
//         rangeInput[1].value = maxPrice;
//         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//       }
//     }
//   });
// });
 
// rangeInput.forEach((input) => {
//   input.addEventListener("input", (e) => {
//     let minVal = parseInt(rangeInput[0].value),
//       maxVal = parseInt(rangeInput[1].value);
 
//     if (maxVal - minVal < priceGap) {
//       if (e.target.className === "range-min") {
//         rangeInput[0].value = maxVal - priceGap;
//       } else {
//         rangeInput[1].value = minVal + priceGap;
//       }
//     } else {
//       priceInput[0].value = minVal;
//       priceInput[1].value = maxVal;
//       range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//       range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//     }
//   });
// });