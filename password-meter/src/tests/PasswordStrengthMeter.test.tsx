import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

// Archivo PasswordStrengthMeter.test.tsx
describe("PasswordStrengthMeter", () => {
  it("renderiza un input de contraseña", () => {
    render(<PasswordStrengthMeter />);
    expect(screen.getByLabelText(/contraseña/i)).toHaveAttribute("type", "password");
  });

  it("muestra inicialmente vacía", () => {
    render(<PasswordStrengthMeter />);
    expect(screen.getByText("vacía")).toBeInTheDocument();
  });

  it("muestra débil al escribir contraseña corta", async () => {
    render(<PasswordStrengthMeter />);
    await userEvent.type(screen.getByLabelText(/contraseña/i), "abc");
    expect(screen.getByText("débil")).toBeInTheDocument();
  });

  it("muestra media con 8 caracteres sin números ni símbolos", async () => {
    render(<PasswordStrengthMeter />);
    await userEvent.type(screen.getByLabelText(/contraseña/i), "abcdefgh");
    expect(screen.getByText("media")).toBeInTheDocument();
  });

  it("muestra fuerte con número", async () => {
    render(<PasswordStrengthMeter />);
    await userEvent.type(screen.getByLabelText(/contraseña/i), "abcdefg1");
    expect(screen.getByText("fuerte")).toBeInTheDocument();
  });

  it("muestra muy fuerte con número y símbolo", async () => {
    render(<PasswordStrengthMeter />);
    await userEvent.type(screen.getByLabelText(/contraseña/i), "abcdef1!");
    expect(screen.getByText("muy fuerte")).toBeInTheDocument();
  });

  it("vuelve a vacía al borrar la contraseña", async () => {
    render(<PasswordStrengthMeter />);
    const input = screen.getByLabelText(/contraseña/i);

    await userEvent.type(input, "abcdef1!");
    await userEvent.clear(input);

    expect(screen.getByText("vacía")).toBeInTheDocument();
  });
});