import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import "./App.css";
import UserService from "./services/UserService";
import { IUser } from "./models/IUser";

function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  async function getUsers() {
    try {
      const res = await UserService.getAllUsers();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (store.isLoading) {
    return <div className="center">Загрузка...</div>;
  }

  if (!store.isAuth) {
    return (
      <div className="center">
        <LoginForm />
      </div>
    );
  }

  return (
    <>
      <div className="center">
        <h1>
          {store.isAuth
            ? `Пользователь авторизован ${store.user.email}`
            : "Авторизуйтесь"}
        </h1>
        <h1>
          {store.user.isActivated ? "Почта подтверждена" : "Подтвердите почту"}
        </h1>
        <button style={{ scale: "1.5" }} onClick={() => store.logout()}>
          Выйти
        </button>
        <button style={{ scale: "1.5", margin: "16px 0" }} onClick={getUsers}>
          Получить пользователей
        </button>
        {users.map((user) => (
          <div key={user.id}>{user.email}</div>
        ))}
      </div>
    </>
  );
}

export default observer(App);
