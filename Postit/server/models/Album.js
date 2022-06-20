import mongoose from "mongoose";
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const AlbumSchema = new Schema({
  name: { type: 'string', required: true},
  coverImg:{ type: 'string', required: true},
  creatorId: { type: ObjectId, required: true, ref: 'Account'}
},
{ timestamps: true, toJSON: {virtuals: true}
})

AlbumSchema.virtual('creator',{
  localField:'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true

})