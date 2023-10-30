function validateForm() {

    var name = document.forms[0]["Name"].value;
    var email = document.forms[0]["E-mail"].value;
    var phoneNumber = document.forms[0]["Phone-Number"].value;
    var address = document.forms[0]["Address"].value;

    var illegalCharacters = /[<(!#$%^&*_-+=)>]/;
    if (illegalCharacters.test(name) || illegalCharacters.test(email) || illegalCharacters.test(phoneNumber) || illegalCharacters.test(address)) {
        alert("Please enter valid information.");
        return false;
    }

    return true;
}
