function isStrongPassword(password) {
    const regexUppercase = /[A-Z]/;
    const regexPassword = /password/i;
  
    return (
      password.length >= 8 &&
      !regexPassword.test(password) &&
      regexUppercase.test(password)
    );
  }


 console.log(isStrongPassword("Qwerty")); // false - Too short
console.log(isStrongPassword("passwordQwerty")); // false - Contains "password"
console.log(isStrongPassword("qwerty123")); // false - No uppercase characters
console.log(isStrongPassword("Qwerty123"));  // true