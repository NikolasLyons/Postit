import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const AlbumMembersSchema = new Schema({
  accountId:{type: ObjectId, required: true, ref:"Account"},
  albumId: {type:ObjectId, required: true, ref: "Album" }
},{timestamps: true, toJSON:{virtuals: true}})


AlbumMembersSchema.virtual('account',{
  localField: 'accountId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
AlbumMembersSchema.virtual('album',{
  localField: 'albumId',
  ref: 'Album',
  foreignField: '_id',
  justOne: true
})