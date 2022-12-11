import clientPromise from "../../../lib/mongodb";

export default async (req, res, next) => {
  try {
    const client = await clientPromise;
    const db = client.db("posts");
    const { name, email, password } = req.body;

    const post = await db.collection("posts").insertOne({
      name,
      email,
      password,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
