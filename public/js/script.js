document.addEventListener("DOMContentLoaded", function () {
    const signUpLink = document.querySelector(".login-form-subscribe a");
    const loginLink = document.querySelector(".sign-up-form-login a");
    const loginForm = document.querySelector("#login");
    const signUpForm = document.querySelector("#sign-up");
    const loginErrorMessage = document.querySelector("#login-error-message");
    const signUpErrorMessage = document.querySelector("#sign-up-error-message");

    const showFormSignUp = () => {
        document.querySelector(".login-form").style.display = "none";
        document.querySelector(".sign-up-form").style.display = "flex";
        document.querySelector(".login-text-content h2").innerHTML =
            "Olá! <br />Seja bem-vindo(a).";
        document.querySelector(".login-text-content p").innerHTML =
            "Crie sua conta para acessar a plataforma.";
    };

    const showFormLogin = () => {
        document.querySelector(".login-form").style.display = "flex";
        document.querySelector(".sign-up-form").style.display = "none";
        document.querySelector(".login-text-content h2").innerHTML =
            "Olá! <br />Seja bem-vindo(a) de volta.";
        document.querySelector(".login-text-content p").innerHTML =
            "Faça login para continuar acessando a página.";

    };

    signUpLink.addEventListener("click", function (event) {
        event.preventDefault();
        showFormSignUp();

    });

    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        showFormLogin();

    });

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const emailInput = this.querySelector('#login input[name="email"]');
        const passwordInput = this.querySelector('#login input[name="password"]');
        let errors = [];

        if (passwordInput.value.trim().length < 8) {
            passwordInput.classList.add("error");
            errors.push("A senha deve ter pelo menos 8 caracteres.");
        } else {
            passwordInput.classList.remove("error");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            errors.push("Por favor, insira um e-mail válido.");
        } else {
            emailInput.classList.remove("error");
        }

        if (errors.length > 0) {
            loginErrorMessage.style.display = "block";
            loginErrorMessage.innerText = errors.join("\n");

        } else {
            loginErrorMessage.style.display = "none";
            loginErrorMessage.innerText = "";
             const userData = {
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        fetch(`http://localhost:4000/users?email=${emailInput.value}&password=${passwordInput.value}`, )
        .then((response) => response.json())
        .then((users) => {
            if (users.length > 0) {
                window.location = "https://refatorando.com.br"
            } else {
                loginErrorMessage.style.display = "block";
                loginErrorMessage.innerText = "E-mail ou senha inválidos.";
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
        }
    });

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = this.querySelector('#sign-up input[name="name"]');
        const emailInput = this.querySelector('#sign-up input[name="email"]');
        const passwordInput = this.querySelector('#sign-up input[name="password"]');
        const rePasswordInput = this.querySelector('#sign-up input[name="re-password"]');

        let errors = [];

        if (nameInput.value.trim() === "") {
            nameInput.classList.add("error");
            errors.push("Por favor, insira seu nome.");
        } else {
            nameInput.classList.remove("error");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add("error");
            errors.push("Por favor, insira um e-mail válido.");
        } else {
            emailInput.classList.remove("error");
        }

        if (passwordInput.value.trim().length < 8) {
            passwordInput.classList.add("error");
            errors.push("A senha deve ter pelo menos 8 caracteres.");
        } else {
            passwordInput.classList.remove("error");
        }

        if (passwordInput.value !== rePasswordInput.value) {
            rePasswordInput.classList.add("error");
            errors.push("As senhas não coincidem.");
        } else {
            rePasswordInput.classList.remove("error");
        }

        if (errors.length > 0) {
            signUpErrorMessage.style.display = "block";
            signUpErrorMessage.innerText = errors.join("\n");
        } else {
            signUpErrorMessage.style.display = "none";
            signUpErrorMessage.innerText = "";
        }

        const userData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        };

        fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify(userData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Success:", data);
            alert("Cadastrado com sucesso!");
            signUpForm.reset();
            showFormLogin();
        })

        .catch((error) => {
            console.error("Error:", error);
        });
    });
});
