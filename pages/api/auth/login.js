import { MdCompare } from "react-icons/md";
import clientPromise from "../../../lib/mongodb";
const bcrypt = require("bcryptjs");

export default async (req, res, next) => {
  try {
    const client = await clientPromise;
    const db = client.db("users");

    const user = await db.collection("users").findOne({
      email: req.body.email,
    });

    if (!user) {
      return next(404, "User not found!");
    }

    const passwordCheck = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!passwordCheck) {
      return next(404, "Wrong password or user name!");
    }

    res.status(200).send(user);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
