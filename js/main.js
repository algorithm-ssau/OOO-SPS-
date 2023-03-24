
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



const numberInput = document.getElementById('number-input');
const result = document.getElementById('result');
const errorMsg = document.querySelector('.error-msg'); // получаем элемент поля об ошибке

numberInput.addEventListener('input', () => {
const inputValue = numberInput.value.trim(); // удаляем пробелы с начала и конца введенного значения
if (inputValue === '') { // проверяем, является ли строка пустой
result.style.display = 'none'; // скрываем результат
errorMsg.style.display = 'none'; // скрываем поле об ошибке
} else {
const number = Number(inputValue);
if (isNaN(number) || number < 1 || number > 10000) {
errorMsg.style.display = 'block'; // показываем поле об ошибке
errorMsg.textContent = 'Разрешенный диапозон для ввода от 1 до 10000';
result.style.display = 'none'; // скрываем результат
} else {
const resultValue = (number * Math.PI).toFixed(2);
result.innerHTML = `Результат: ${resultValue}`;
result.classList.remove('error');
result.classList.add('success');
result.style.display = 'block'; // показываем результат
errorMsg.textContent = '';
errorMsg.style.display = 'none'; // скрываем поле об ошибке
}
}
});
