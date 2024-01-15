window.addEventListener('load', function () {
    var submit = document.querySelector(".user-button");
    submit.addEventListener('click', function () {
        var username = document.getElementById("login");
        var userpsd = document.getElementById("password");
        if (username.value == "admin") {
            if (userpsd.value == "admin") {
                alert("Welcome!admin");
            }
            else {
                alert("username or password error!");
            }
        }
        else {
            alert("username or password error!");
        }
    })
})