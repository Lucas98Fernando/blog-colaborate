export const simpleValidation = [
  (val: string) => (val && val.length > 0) || "Campo obrigatório",
];

export const passwordStrengthValidation = [
  (val: string) =>
    (val && val.length >= 6) || "A senha deve conter no mínimo 6 caracteres",
];

export const emailValidation = [
  (val: string) => (val && /.+@.+\..+/.test(val)) || "Informe um e-mail válido",
];
