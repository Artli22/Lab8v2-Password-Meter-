import { describe, it, expect } from "vitest";
import { getPasswordStrength } from "../utils/passwordStrength";

// Archivo passwordStrength.test.ts
describe("getPasswordStrength", () => {
  it("retorna vacía si no hay contraseña", () => {
    expect(getPasswordStrength("")).toBe("vacía");
  });

  it("retorna débil si tiene menos de 8 caracteres", () => {
    expect(getPasswordStrength("abc123")).toBe("débil");
  });

  it("retorna media si tiene 8 o más caracteres sin números ni símbolos", () => {
    expect(getPasswordStrength("abcdefgh")).toBe("media");
  });

  it("retorna fuerte si tiene 8 o más caracteres y número", () => {
    expect(getPasswordStrength("abcdefg1")).toBe("fuerte");
  });

  it("retorna muy fuerte si tiene número y símbolo", () => {
    expect(getPasswordStrength("abcdef1!")).toBe("muy fuerte");
  });
});