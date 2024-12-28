import {EMAIL_REGEX, PASSWORD_REGEX} from './constants';

export const validateEmail = (email: string) =>
  EMAIL_REGEX.test(email) ? true : 'Please enter a valid email address';

export const validatePassword = (password: string) =>
  PASSWORD_REGEX.test(password)
    ? true
    : 'Password must include at least one uppercase letter, one lowercase letter, and one number.';
