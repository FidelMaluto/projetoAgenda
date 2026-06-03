import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    };

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    };

    validate(e, campo) {
        const el = e.target;

        const nomeInput = campo.el.querySelector('input[name="nome"]');
        const sobrenomeInput = campo.el.querySelector('input[name="sobrenome"]');
        const emailInput = campo.el.querySelector('input[name="email"]');
        const telefoneInput = campo.el.querySelector('input[name="telefone"]');

        let error = false;

        if (nomeInput.value.length < 3 || nomeInput.value.length > 15) {
            this.showErro(campo, 'O nome deve conter entre 3 à 20 caracteres!');
            error = true;
        }

        if (sobrenomeInput.value.length < 3 || sobrenomeInput.value.length > 15) {
            this.showErro(campo, 'O sobrenome deve conter entre 3 à 20 caracteres!');
            error = true;
        }

        if (!validator.isEmail(emailInput.value)) {
            this.showErro(campo, 'Email inválido.!');
            error = true;
        }

        if (telefoneInput.value.length !== 9) {
            this.showErro(campo, 'O número de telefone deve conter apenas 9 digitos!');
            error = true;
        }

        if (!error) el.submit();

    }

    showErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('erroTxt');
        campo.insertAdjacentElement('afterend', div);
    }

}
