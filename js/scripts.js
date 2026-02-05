// current year in footer
const rightNow = new Date();
console.log(rightNow.getFullYear());
document.querySelector('#year').textContent = rightNow.getFullYear();