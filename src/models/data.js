import { Schema, model } from "mongoose"

const NoteSchema = new Schema(
  {
    artist: String,
    title: String,
    link: String,
    image: String,
    year: String,
    status: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = model("MusicaLink", NoteSchema);