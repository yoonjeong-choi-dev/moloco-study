const photoPrefix = 'layout';
const numPhoto = 12;

window.onload = () => {
  for (let i = 1; i <= numPhoto; i++) {
    let photo = `./img/${photoPrefix}${i}.jpg`;
    let test = document.createElement('img');
    test.src = photo;
    document.body.appendChild(test);
  }
}