export const ValidateData = (email,password) => {

    // Regex check for email and password
    const isValidEmail = /^([A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,})$/.test(email);
    const isValidPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isValidEmail){
        return "Email pattern is not valid. Must be a valid email address";
    }
    if(!isValidPassword){
        return "Password pattern is not valid. Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character";
    }
    return "";
}
