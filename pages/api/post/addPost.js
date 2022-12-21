import { getSession } from "next-auth/react";
import clientPromise from "../../../lib/mongodb";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("posts");

    const { user, title, body, dateInput, time, date } = req.body;

    const post = await db
      .collection("posts")
      .insertOne({
        user,
        title,
        body,
        dateInput,
        time,
        date,
      })
      .lean();

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};
