const numberInput = document.getElementById('numberInput');
const submitButton = document.getElementById('submitButton');
const imageContainer = document.getElementById('imageContainer');

submitButton.addEventListener('click', () => {
  const number = parseInt(numberInput.value);

  if (number >= 1 && number <= 10) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://picsum.photos/v2/list?limit=${number}`);
    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      imageContainer.innerHTML = '';
      response.forEach(function(item) {
          let image = document.createElement('img');
          image.className = 'image-for-number';
          image.src = item.download_url;
          imageContainer.appendChild(image);
        });
    };
    xhr.send();
  } else {
    imageContainer.innerHTML = 'Число вне диапазона';
  }
});