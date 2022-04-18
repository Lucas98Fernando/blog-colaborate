export const simpleValidation = [
  (val: string) => (val && val.length > 0) || "Campo obrigatório",
];

export const passwordStrengthValidation = [
  (val: string) =>
    (val && val.length >= 8) || "A senha deve conter no mínimo 8 caracteres",
];
