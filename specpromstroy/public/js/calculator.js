function btnFirst() {
    const input = document.querySelector('.inputFirst');
    const result = document.querySelector('#resultFirst');
    const inputValue = input.value.trim();
    if (/^\d+\.?\d*$/.test(inputValue) && parseFloat(inputValue) > 1) {
        const calculation = parseFloat(inputValue) / 1430;
        const hours = Math.floor(calculation);
        const minutes = Math.floor((calculation - hours) * 60);
        let strhours = '';
        let strminute = '';
        if (hours == 1) {
            strhours = `час`;
        } else if (hours > 1 && hours <= 4) {
            strhours = `часа`;
        } else {
            strhours = `часов`;
        }
        if (minutes == 1) {
            strminute = `минута`;
        } else if (hours > 1 && hours <= 4) {
            strminute = `минуты`;
        } else {
            strminute = `минут`;
        }
        result.textContent = `${hours} ${strhours} ${minutes} ${strminute}`;
    } else {
        alert('Пожалуйста, введите значение больше 1.');
    }
}
function btnSecond() {
    const input = document.querySelector('.inputSecond');
    const result = document.querySelector('#resultSecond');
    const inputValue = input.value.trim();
    const shift16 = document.querySelector('input[name="shift"][value="16"]');
    const shift20 = document.querySelector('input[name="shift"][value="20"]');
    let calculation;
    if (shift16.checked && !shift20.checked) {
        // 16
        calculation = parseFloat(inputValue) / 16;
    } else if (shift20.checked && !shift16.checked) {
        // 20
        calculation = parseFloat(inputValue) / 20;
    }
    const hours = Math.floor(calculation);
    const minutes = Math.floor((calculation - hours) * 60);
    let strhours = '';
    let strminute = '';
    if (hours == 1) {
        strhours = `час`;
    } else if (hours > 1 && hours <= 4) {
        strhours = `часа`;
    } else {
        strhours = `часов`;
    }
    if (minutes == 1) {
        strminute = `минута`;
    } else if (hours > 1 && hours <= 4) {
        strminute = `минуты`;
    } else {
        strminute = `минут`;
    }
    result.textContent = `${hours} ${strhours} ${minutes} ${strminute}`;
}
