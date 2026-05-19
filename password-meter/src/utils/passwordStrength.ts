export type PasswordStrength =
  | "vacía"
  | "débil"
  | "media"
  | "fuerte"
  | "muy fuerte";

export function getPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) return "vacía";
  if (password.length < 8) return "débil";

    const hasNumber = /\d/.test(password);  
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasNumber && hasSymbol) return "muy fuerte";
    if (hasNumber) return "fuerte";

  return "media";
}