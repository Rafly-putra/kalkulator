function appendCharacter(character) {
    const resultField = document.getElementById('result');
    resultField.value += character;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value);
    } catch {
        resultField.value = 'Error';
    }
}