// filepath: c:\Users\yaoda\OneDrive\Desktop\WebProjects\bucks2bar\js\scripts.test.js

describe('Username Validation', () => {
    const isValidUsername = (username) => {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(username);
    };

    test('should return true for a valid username', () => {
        expect(isValidUsername('Valid1!')).toBe(false); // Less than 8 characters
        expect(isValidUsername('ValidUser1!')).toBe(true); // Valid username
    });

    test('should return false for a username without an uppercase letter', () => {
        expect(isValidUsername('validuser1!')).toBe(false);
    });

    test('should return false for a username without a number', () => {
        expect(isValidUsername('ValidUser!')).toBe(false);
    });

    test('should return false for a username without a special character', () => {
        expect(isValidUsername('ValidUser1')).toBe(false);
    });

    test('should return false for a username less than 8 characters long', () => {
        expect(isValidUsername('Val1!')).toBe(false);
    });
});