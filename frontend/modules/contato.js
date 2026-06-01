import validator from 'validator';

export default class Contato {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    };

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate();
        });
    };

    validate(e) {
        const el = e.target;

        const nomeInput = el.querySelector('input[name="nome"]');
        const sobrenomeInput = el.querySelector('input[name="sobrenome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const telefoneInput = el.querySelector('input[name="telefone"]');

        let error = false;

        if(nomeInput.length < 3 || nomeInput.length > 15) {
            alert('O nome deve conter entre 3 à 20 caracteres!');
            error = true;
        }
        
        if(sobrenomeInput.length < 3 || sobrenomeInput.length > 15) {
            alert('O sobrenome deve conter entre 3 à 20 caracteres!');
            error = true;
        }
        
        if(!validator.isEmail(emailInput.value)){
            alert('Email inválido.!');
            error = true;
        }
        
        if(!telefoneInput.length == 9) {
            alert('O número de telefone deve conter apenas 9 digitos!');
            error = true;
        }

        if(!error) el.submit();
    }
}
