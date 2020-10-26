import { Schema, model } from "mongoose"

const linksS = new Schema({
  server:String,
  serverUrl:String
},{ _id : false })

const NoteSchema = new Schema(
  {
    artists: [String],
    title: String,
    url: String,
    img: String,
    linksServer: [linksS],
    status: Boolean
  },
  {
    timestamps: true
  }
);

module.exports = model("MusicaLinkV2", NoteSchema);