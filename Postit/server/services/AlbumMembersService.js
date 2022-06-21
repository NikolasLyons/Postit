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

}
export const albumMembersService = new AlbumMembersService()