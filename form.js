class Form {
    constructor(id) {
        this.form = document.getElementById(id);
    }

    // I. Получение всех значений формы
    getValues() {
        const formData = new FormData(this.form);
        const values = {};

        for (const [key, value] of formData.entries()) {
            values[key] = value;
        }

        return values;
    }

    // II. Проверка валидности формы (true/false)
    isValid() {
        return this.form.checkValidity();
    }

    // III. Сброс значений формы
    reset() {
        this.form.reset();
    }
}

export default Form;