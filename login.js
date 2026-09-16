function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

// Xu ly giao dien tren trinh duyet
if (typeof document !== "undefined") {

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        let result = login(username, password);

        if (result) {
            document.getElementById("message").innerText = "Dang nhap thanh cong!";
        } else {
            document.getElementById("message").innerText = "Sai tai khoan hoac mat khau!";
        }
    });

}

// Cho phep Jest su dung ham login
if (typeof module !== "undefined") {
    module.exports = login;
}
