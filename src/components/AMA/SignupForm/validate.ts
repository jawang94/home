// eslint-disable-next-line consistent-return
const validate: any = (values: { password: any; password2: any }) => {
  if (values.password !== values.password2) {
    return { password2: 'passwords must match' };
  }
  return undefined;
};

export default validate;
