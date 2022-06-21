import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"

class AlbumMembersService{
 

 async create(albumMembersData) {
    const isCollaborating = await dbContext.AlbumMembers.create(albumMembersData)
    await isCollaborating.populate('account')
    await isCollaborating.populate('album')
    return isCollaborating
    
  }

  async getById(id){
    const albumMembers = await dbContext.AlbumMembers.findById(id)
    if(!albumMembers){
      throw new BadRequest("invalid id")
    }
    return albumMembers
  }

  async delete(id, userId) {
    const albumMembers = await this.getById(id)
    if (albumMembers.accountId.toString() != userId){
      throw new Forbidden("Cannot remove another users collaboration")
    }
    await albumMembers.remove()
  }
  async getMyAlbumMembers(accountId) {
   const albumMembers = await dbContext.AlbumMembers.find({accountId})
   .populate('album')
   return albumMembers
  }
  async getAlbumMembers(albumId) {
    const albumMembers = await dbContext.AlbumMembers.find({albumId})
    .populate('account', 'name picture')
    return albumMembers
  }
  

}
export const albumMembersService = new AlbumMembersService()