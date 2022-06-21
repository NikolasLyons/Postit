import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"



class AlbumsService{
  
  async getAll(query = {}) {
    const albums = await dbContext.Albums.find(query)
    return albums
  }
  async getById(id) {
    const album = await dbContext.Albums.findById(id).populate('creator','name picture')
    if(!album){
      throw new BadRequest("Invalid Id")
    }
    return album
    
  }
  async create(albumData) {
    const album = await dbContext.Albums.create(albumData)
    await album.populate('creator', 'picture name')
    return album
  }

  async update(update) {
const original = await this.getById(update.id)
if(original.creatorId.toString() != update.creatorId){
  throw new Forbidden('Not yo shit!')
}
original.name = update.name || original.name
original.coverImg = update.coverImg || original.coverImg

await original.save()
return original
  }

  async delete(albumId, userId) {
    const album = await this.getById(albumId)
    if (album.creatorId.toString() != userId){
    throw new BadRequest("This aint yours")
    }
    await album.remove()
  }

}
export const albumsService = new AlbumsService