function getPasswordChecker(password) {
    return function(pswd) {
        if (pswd === password) {
            return true;
        } else {
            return false;
        }
    }
}

const myPassword1 = 'Qwerty';
const inputPassword1 = 'Qwerty';
const checker1 = getPasswordChecker(myPassword1);
console.log(checker1(inputPassword1));

const myPassword2 = '123456';
const inputPassword2 = 'Qwerty123';
const checker2 = getPasswordChecker(myPassword2);
console.log(checker2(inputPassword2));
