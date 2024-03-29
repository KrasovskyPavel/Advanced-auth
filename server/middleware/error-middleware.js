import ApiError from "../errors/api-error.js";

export default function (err, req, res, next) {
  console.log(err);
  if (err instanceof ApiError) {
    return res
      .status(err.status)
      .json({ message: err.message, err: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка" });
}
