$(document).ready(function () {
    // Валидация формы в Секции нас  поддержали
    $('.partner__form').validate({
        rules: {
            // строчное правило
            userName: {
                required: true,
                maxlength: 15,
                minlength: 2
            },
            checkboxModal: {
                required: true
            },
            userPhone: "required",
            // правило обьект
            userEmail: {
                required: true,
                email: true
            }
        },// сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не должно быть короче 2 символов",
                maxlength: "Имя не должно превышать 15 символов"
            },
            checkboxModal: {
                required: "Отметьте галочку",
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите e-mail",
                email: "Введите корректный email Пример: name@domain.com"
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        errorElement: "div",
        errorClass: "invalid",

        // Jquery Ajax form
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    let ownModal = document.getElementById('ownModal');
                    ownModal.classList.add('active-own');
                    const RemoveOwnModal = () => {
                        ownModal.classList.remove('active-own')
                    };
                    setTimeout(RemoveOwnModal, 3000);
                    $(form)[0].reset();
                    modalJuvinaliTwo.removeClass('active-own--visible');
                },
                error: function (response) {
                    console.error('Ошибка запроса! ' + response);
                    ym('65026879', 'reachGoal', 'button'); return true;
                }
            });
        },
    });

    // Валидация формы в Секции Footer
    $('.footer__form').validate({
        rules: {
            // строчное правило
            userName: {
                required: true,
                maxlength: 15,
                minlength: 2
            },
            checkboxModal: {
                required: true
            },
            userPhone: "required",
            // правило обьект
            userEmail: {
                required: true,
                email: true
            }
        },// сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не должно быть короче 2 символов",
                maxlength: "Имя не должно превышать 15 символов"
            },
            checkboxModal: {
                required: "Отметьте галочку",
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите e-mail",
                email: "Введите корректный email Пример: name@domain.com"
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        errorElement: "div",
        errorClass: "invalid",

        // Jquery Ajax form
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    let ownModal = document.getElementById('ownModal');
                    ownModal.classList.add('active-own');
                    const RemoveOwnModal = () => {
                        ownModal.classList.remove('active-own')
                    };
                    setTimeout(RemoveOwnModal, 3000);
                    $(form)[0].reset();
                    modalJuvinaliTwo.removeClass('active-own--visible');
                },
                error: function (response) {
                    console.error('Ошибка запроса! ' + response);
                    ym('65026879', 'reachGoal', 'button'); return true;
                }
            });
        },
    });

     // Валидация формы в Модальном окне
     $('.modal__form').validate({
        rules: {
            // строчное правило
            userName: {
                required: true,
                maxlength: 15,
                minlength: 2
            },
            checkboxModal: {
                required: true
            },
            userPhone: "required",
            // правило обьект
            userEmail: {
                required: true,
                email: true
            }
        },// сообщения
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя не должно быть короче 2 символов",
                maxlength: "Имя не должно превышать 15 символов"
            },
            checkboxModal: {
                required: "Отметьте галочку",
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите e-mail",
                email: "Введите корректный email Пример: name@domain.com"
            }
        },
        errorPlacement: function (error, element) {
            if (element.attr("type") == "checkbox") {
                return element.next('label').append(error);
            }

            error.insertAfter($(element));
        },
        errorElement: "div",
        errorClass: "invalid",

        // Jquery Ajax form
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    let ownModal = document.getElementById('ownModal');
                    ownModal.classList.add('active-own');
                    const RemoveOwnModal = () => {
                        ownModal.classList.remove('active-own')
                    };
                    setTimeout(RemoveOwnModal, 3000);
                    $(form)[0].reset();
                    modalJuvinaliTwo.removeClass('active-own--visible');
                },
                error: function (response) {
                    console.error('Ошибка запроса! ' + response);
                    ym('65026879', 'reachGoal', 'button'); return true;
                }
            });
        },
    });

});