import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("posts");

    const { title, body, author, time, date } = req.body;

    const post = await db.collection("posts").insertOne({
      title,
      body,
      author,
      dateInput,
      time,
      date,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
