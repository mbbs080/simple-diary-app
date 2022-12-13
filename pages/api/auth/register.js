import clientPromise from "../../../lib/mongodb";
const bcrypt = require("bcryptjs");

export default async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const client = await clientPromise;
    const db = client.db("users");

    const post = await db.collection("users").insertOne({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
