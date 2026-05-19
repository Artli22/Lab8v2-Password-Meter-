export type PasswordStrength =
  | "vacía"
  | "débil"
  | "media";

export function getPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) return "vacía";
  if (password.length < 8) return "débil";

  return "media";
}