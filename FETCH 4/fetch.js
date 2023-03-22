const widthInput = document.getElementById("width");
const heightInput = document.getElementById("height");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", () => {
 const width = parseInt(widthInput.value);
 const height = parseInt(heightInput.value);

 if (isNaN(width) || isNaN(height)) {
  resultDiv.textContent = "Введите числа";
 } else if (width < 100 || width > 300 || height < 100 || height > 300) {
  resultDiv.textContent = "Одно из чисел вне диапазона от 100 до 300";
 } else {
  fetch(`https://picsum.photos/${width}/${height}`)
   .then(response => {
    resultDiv.innerHTML = `<img src="${response.url}" alt="Image">`;
   })
   .catch(error => {
    resultDiv.textContent = "Произошла ошибка при загрузке изображения";
   });
 }
});