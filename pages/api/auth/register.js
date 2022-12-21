/////////// Second alternative
import clientPromise from "../../../lib/mongodb";
const bcrypt = require("bcryptjs");

export default async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const client = await clientPromise;
    const db = client.db("usersCredentials");

    const { username, email } = req.body;

    const checkUsername = await db
      .collection("usersCredentials")
      .findOne({ username });

    const checkEmail = await db
      .collection("usersCredentials")
      .findOne({ email });

    if (checkUsername) {
      return res.status(422).json({ message: "User already exist" });
    }

    if (checkEmail) {
      return res.status(422).json({ message: "Email already exist" });
    }

    const post = await db.collection("usersCredentials").insertOne({
      username: username,
      email: email,
      password: hash,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
