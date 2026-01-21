let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('special-btn')) return;

        const value = e.target.innerHTML;
        input.style.color = '';

        if (value == '=') {
            if (string === '1+') {
                string = "never settle";
                input.value = string;
                input.classList.add('never-settle');

                setTimeout(() => {
                    input.classList.remove('never-settle');
                    string = "";
                    input.value = string;
                    input.style.backgroundColor = '';
                }, 1000);
                return;
            }
            try {
                let expression = string
                    .replace(/sin/g, 'Math.sin')
                    .replace(/cos/g, 'Math.cos')
                    .replace(/tan/g, 'Math.tan')
                    .replace(/\^/g, '**');

                string = eval(expression);
                if (string === undefined) {
                    input.style.color = 'red';
                    input.value = "undefined";
                    string = "";
                } else {
                    input.value = string;
                }
            } catch (error) {
                input.value = "Error";
                input.style.color = 'red';
                string = "";
            }
        }
        else if (value == 'AC') {
            string = "";
            input.value = string;
        }
        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (value == 'sin' || value == 'cos' || value == 'tan') {
            string += value + "(";
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }

    })
})

function toggleSideMenu(btn) {
    const sideMenu = document.getElementById('side-menu');

    sideMenu.classList.toggle('is-open');

    if (sideMenu.classList.contains('is-open')) {
        btn.innerHTML = '✕';
        btn.classList.add('is-active');
    } else {
        btn.innerHTML = '☰';
        btn.classList.remove('is-active');
    }
}
