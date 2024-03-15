import userService from "../service/user-service.js";

class UserController {
  async register(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.register(email, password);

      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      console.log(error),
        res.status(500).json({ message: "Ошибка регистрации" });
    }
  }

  async login(req, res, next) {
    try {
    } catch (error) {
      console.log(error), res.status(500).json({ message: "Ошибка входа" });
    }
  }

  async logout(req, res, next) {
    try {
    } catch (error) {
      console.log(error), res.status(500).json({ message: "Ошибка выхода" });
    }
  }

  async activate(req, res, next) {
    try {
    } catch (error) {
      console.log(error), res.status(500).json({ message: "Ошибка активации" });
    }
  }

  async refresh(req, res, next) {
    try {
    } catch (error) {
      console.log(error), res.status(500).json({ message: "Ошибка токена" });
    }
  }

  async getUsers(req, res, next) {
    try {
      res.json(["123", "456"]);
    } catch (error) {
      console.log(error),
        res.status(500).json({ message: "Ошибка получения пользователей" });
    }
  }
}

export default new UserController();
