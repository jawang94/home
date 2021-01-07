export const checkMaxLength = (value: string | any[], len: number) =>
  value && value.length <= len
    ? undefined
    : `must be less than ${len} characters`;

export const checkMinLength = (value: string | any[], len: number) =>
  value && value.length >= len
    ? undefined
    : `must be more than ${len} characters`;

export const checkValidChars = (value: string) =>
  /^[a-zA-Z0-9_-]+$/.test(value) ? undefined : 'contains invalid characters';

export const checkIfTrimmed = (value: string) =>
  value.trim() === value ? undefined : 'cannot start or end with whitespace';

export const validUrl = (value: string) => {
  try {
    const newURL = new URL(value);
    if (newURL) {
      return undefined;
    }
    return 'must be a valid url';
  } catch (error) {
    return 'must be a valid url';
  }
};

const max = (len: number) => (value: any) => checkMaxLength(value, len);
const min = (len: number) => (value: any) => checkMinLength(value, len);
const validChars = (value: any) => checkValidChars(value);
const trimmed = (value: any) => checkIfTrimmed(value);

export const required = (value: any) => (value ? undefined : 'required');
export const postType = (value: string) =>
  value === 'link' || value === 'text'
    ? undefined
    : 'must be link or text post';
export const usernameValidator = [required, max(32), validChars, trimmed];
export const passwordValidator = [required, min(8), max(72)];
export const titleValidator = (value: any) =>
  required(value) || checkMaxLength(value, 100);
export const textPostValidator = (value: any) =>
  required(value) || checkMinLength(value, 4);
export const urlValidator = (value: any) => required(value) || validUrl(value);
export const typeValidator = (value: any) => required(value) || postType(value);
