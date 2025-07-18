const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        const value = this.getAttribute('data-value');
        if (value !== null) {
    
            if (isOperator(value) && (currentInput === '' || isOperator(currentInput.slice(-1)))) {
                return;
            }
            currentInput += value;
            display.value = currentInput;
        } else if (this.id === 'clear') {
            currentInput = '';
            display.value = '';
        } else if (this.id === 'equals') {
            try {
                
                let result = Function('return ' + currentInput)();
                display.value = result;
                currentInput = result.toString();
            } catch (e) {
                display.value = 'Error';
                currentInput = '';
            }
        }
    });
});
