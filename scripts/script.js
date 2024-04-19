window.onload = function () {
    // localStorage.clear()


    let inputName = document.getElementById('name');
    let inputUsername = document.getElementById('username');
    let signIn = document.getElementById('signIn')
    let password = document.getElementById('password')
    let repeat = document.getElementById('password-repeat')
    let email = document.getElementById('mail')
    let registration = document.getElementById('registration')
    let checkbox = document.getElementById('terms')
    let checkboxBox = document.getElementById('checkbox-box')
    let errorText = document.getElementsByClassName('error-text')
    let inputError = document.getElementsByClassName('input')
    let exit = document.getElementById('exit')

    let nameError = document.getElementById('nameError')
    let usernameError = document.getElementById('usernameError')
    let emailError = document.getElementById('emailError')
    let passwordError = document.getElementById('passwordError')
    let repeatError = document.getElementById('repeatError')
    let termsError = document.getElementById('termsError')
    let unregistered = document.getElementById('unregistered')
    let wrongPassword = document.getElementById('wrongPassoword')

    // inputName.onkeydown = (e) => {
    //     let letters = /^[A-Za-z]+$/;
    //     console.log(e)
    //     if (e.key.match(letters)) {
    //         return true;
    //     } else {
    //         alert("Input letters only");
    //         return false;
    //     }
    // }

    // inputUsername.onkeydown = (e) => {
    //     let symbols = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    //     console.log(e)
    //     if (e.key.match(symbols)) {
    //         alert("No symbols allowed");
    //         return false;
    //     } else {
    //         return true
    //     }
    // }

    // checkbox.addEventListener('change', (event) => {
    //
    //     if (event.currentTarget.checked) {
    //         console.log('Согласен');
    //     } else {
    //         console.log('Не согласен');
    //     }
    // })

    signIn.onclick = function () {

        let validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$/
        let hasError = false;

        document.querySelectorAll(".error-text").forEach(a => a.style.display = "none");
        document.querySelectorAll(".detail").forEach(a => a.style.display = "none");
        document.querySelectorAll(".input").forEach(a => a.classList.remove('error'));
        // inputError.classList.remove('error');


        if (!inputName.value) {
            inputName.nextElementSibling.style.display = 'block';
            inputName.classList.add('error');
            hasError = true;
        }
        if (inputName.value && !inputName.value.match(/^[A-Za-z\s]+$/)) {
            nameError.style.display = 'block';
            inputName.classList.add('error');
            hasError = true;
        }
        if (!inputUsername.value) {
            inputUsername.nextElementSibling.style.display = 'block';
            inputUsername.classList.add('error');
            hasError = true;
        }
        if (inputUsername.value && !inputUsername.value.match(/^[a-zA-Z0-9_\-]+$/)) {
            usernameError.style.display = 'block';
            inputUsername.classList.add('error');
            hasError = true;
        }
        if (!email.value) {
            email.nextElementSibling.style.display = 'block';
            email.classList.add('error');
            hasError = true;
        }
        if (email.value && !email.value.match(validEmail)) {
            emailError.style.display = 'block';
            email.classList.add('error');
            hasError = true;
        }
        if (!password.value) {
            password.nextElementSibling.style.display = 'block';
            password.classList.add('error');
            hasError = true;
        }
        if (password.value && !password.value.match(validPassword)) {
            passwordError.style.display = 'block';
            password.classList.add('error');
            hasError = true;
        }
        if (!repeat.value) {
            repeat.nextElementSibling.style.display = 'block';
            repeat.classList.add('error');
            hasError = true;
        }
        if (repeat.value && password.value !== repeat.value) {
            repeatError.style.display = 'block';
            repeat.classList.add('error');
            hasError = true;
        }
        if (checkbox.checked === false) {
            termsError.style.display = 'block';
            checkbox.classList.add('error');
            hasError = true;
        }
        if (!hasError) {


            let client = {
                name: inputName.value,
                username: inputUsername.value,
                password: password.value,
                email: email.value,
            };

            let clients = JSON.parse(localStorage.getItem('clients')) || [];
            let clientString = JSON.stringify(client)

            clients.push(client);
            localStorage.setItem('clients', JSON.stringify(clients));

            console.log(clients)


            toggle(document.getElementById('signIn').onclick)
            inputName.value = null;
            inputUsername.value = null;
            email.value = null;
            password.value = null;
            repeat.value = null;
            checkbox.checked = false
        }

        function toggle() {
            let toggle = document.getElementById("blur")
            toggle.classList.toggle('active')
        }
    }

        document.getElementById('ok').onclick = function () {
            let disable = document.getElementById("blur")
            disable.classList.toggle('active')
            document.getElementById('main-title').innerHTML = "Log in to the system"
            document.getElementById('name-box').remove()
            document.getElementById('mail-box').remove()
            document.getElementById('repeat-box').remove()
            document.getElementById('checkbox-box').remove()
            document.getElementById('question').remove()
            registration.style.display = 'block';
            document.getElementById('signIn').remove()
            document.getElementById('logIn').classList.toggle('block')
        }

        // document.getElementById('logIn').onclick = function () {
        //     document.querySelectorAll(".detail").forEach(a => a.style.display = "none");
        //     document.querySelectorAll(".error-text").forEach(a => a.style.display = "none");
        //     document.querySelectorAll(".input").forEach(a => a.classList.remove('error'));
        //     let hasError = false;
        //
        //     if (!inputUsername.value) {
        //         inputUsername.nextElementSibling.style.display = 'block';
        //         inputUsername.classList.add('error');
        //         hasError = true
        //     }
        //     if (!password.value) {
        //         password.nextElementSibling.style.display = 'block';
        //         password.classList.add('error');
        //         hasError = true
        //     }
        //     // let user = usersData.find (user => user.inputUsername.value === username)
        //     if (!hasError) {
        //         let user = null
        //         for (let i = 0; i < usersData.length; i++) {
        //             if (inputUsername.value !== usersData[i].username) {
        //                 unregistered.style.display = 'block';
        //                 inputUsername.classList.add('error');
        //             }
        //             if (inputUsername.value === usersData[i].username && password.value !== usersData[i].password) {
        //                 wrongPassword.style.display = 'block';
        //                 password.classList.add('error');
        //                 return;
        //             }
        //             if (usersData[i].username === inputUsername.value && usersData[i].password === password.value) {
        //
        //                 document.getElementById('main-title').innerHTML = "Welcome, " + usersData[i].name;
        //                 document.getElementById('username-box').remove()
        //                 document.getElementById('password-box').remove()
        //                 document.getElementById('logIn').remove()
        //                 document.getElementById('Reg').remove()
        //                 exit.style.display = 'block';
        //                 return;
        //             }
        //         }
        //     }
        // }

        function getUsername(object) {
            return object.username
        };

        function getPassword(object) {
            return object.password
        };


        let getClientUsername = (array) => {
            for (let i = 0; i < array.length; i++) {
                console.log(getUsername(array[i]));
            }
        }

        let getClientPassword = (array) => {
            for (let i = 0; i < array.length; i++) {
                getPassword(array[i]);
            }
        }

        const usersData = JSON.parse(localStorage.getItem('clients'))


        document.getElementById('question').onclick = function logIn() {
            document.getElementById('main-title').innerHTML = "Log in to the system"
            document.getElementById('name-box').remove()
            document.getElementById('mail-box').remove()
            document.getElementById('repeat-box').remove()
            document.getElementById('checkbox-box').remove()
            document.getElementById('question').remove()
            registration.style.display = 'block';
            document.getElementById('signIn').remove()
            document.getElementById('logIn').classList.toggle('block')

            document.querySelectorAll(".detail").forEach(a => a.style.display = "none");
            document.querySelectorAll(".error-text").forEach(a => a.style.display = "none");
            document.querySelectorAll(".input").forEach(a => a.classList.remove('error'));

        }

        document.getElementById('logIn').onclick = function () {
            document.querySelectorAll(".detail").forEach(a => a.style.display = "none");
            document.querySelectorAll(".error-text").forEach(a => a.style.display = "none");
            document.querySelectorAll(".input").forEach(a => a.classList.remove('error'));
            let hasError = false;
            let isLoggedId = false

            if (!inputUsername.value) {
                inputUsername.nextElementSibling.style.display = 'block';
                inputUsername.classList.add('error');
                hasError = true
            }
            if (!password.value) {
                password.nextElementSibling.style.display = 'block';
                password.classList.add('error');
                hasError = true
            }
            // let user = usersData.find (user => user.inputUsername.value === username)
            if (!hasError) {
                for (let i = 0; i < usersData.length; i++) {
                    if (usersData[i].username === inputUsername.value && usersData[i].password === password.value) {
                        document.getElementById('main-title').innerHTML = "Welcome, " + usersData[i].name;
                        document.getElementById('username-box').remove()
                        document.getElementById('password-box').remove()
                        document.getElementById('logIn').remove()
                        document.getElementById('Reg').remove()
                        isLoggedId = true
                        exit.style.display = 'block';
                        break;
                    }
                }
                if (!isLoggedId) {
                        inputUsername.classList.add('error');
                        wrongPassword.style.display = 'block';
                        password.classList.add('error');
                    }
                }
            }

    exit.onclick = function reload() {
        window.location.reload(true)
    }


    registration.onclick = function reload() {
        window.location.reload(true)
    }



}

