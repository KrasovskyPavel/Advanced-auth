import React, { useState, useContext } from "react";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        scale: "1.5",
      }}
    >
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => store.login(email, password)}>Логин</button>
      <button onClick={() => store.register(email, password)}>
        Регистрация
      </button>
    </div>
  );
};

export default observer(LoginForm);
