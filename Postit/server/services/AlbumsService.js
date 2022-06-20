import { dbContext } from "../db/DbContext"



class AlbumsService{
 async getAll(query = {}) {
   const albums = await dbContext.Albums.find(query)
   return albums
  }

}
export const albumsService = new AlbumsService