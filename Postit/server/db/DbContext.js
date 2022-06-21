import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { AlbumSchema } from '../models/Album';
import { AlbumMembersSchema } from '../models/AlbumMembers';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts')

  Albums = mongoose.model('Album', AlbumSchema)

  AlbumMembers = mongoose.model('AlbumMembers', AlbumMembersSchema)


}

export const dbContext = new DbContext()
