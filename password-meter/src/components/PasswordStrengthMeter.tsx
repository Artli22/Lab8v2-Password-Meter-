import { useState } from "react";

export default function PasswordStrengthMeter() {
  const [password, setPassword] = useState("");

  return (
    <section>
      <label htmlFor="password">Contraseña</label>

      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <p>{password.length === 0 ? "vacía" : ""}</p>
    </section>
  );
}