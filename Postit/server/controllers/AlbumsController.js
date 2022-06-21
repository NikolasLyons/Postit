import { Auth0Provider } from "@bcwdev/auth0provider";
import { albumMembersService } from "../services/AlbumMembersService";
import { albumsService } from "../services/AlbumsService";
import BaseController from "../utils/BaseController";


export class AlbumsController extends BaseController{
  constructor(){
    super('api/albums')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/albumMembers', this.getAlbumMembers)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)

  }
 
  async getAll(req, res, next) {
    try {
      const albums = await albumsService.getAll(req.query)
      return res.send(albums)

    } catch (error) {
      next(error)
    }

  }
  async getById(req, res, next) {
    try {
      const album = await albumsService.getById(req.params.id)
      return res.send(album)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const album = await albumsService.create(req.body)
      return res.send(album)
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const update = await albumsService.update(req.body)
      return res.send(update)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await albumsService.delete(req.params.id, req.userInfo.id)
      return res.send({message: "Bye Bye Bye"})
    } catch (error) {
      next(error)
    }
  }
  getAlbumMembers(req, res, next) {
    try {
      const albumMembers = albumMembersService.getAlbumMembers(req.params.id)
      return res.send(albumMembers)
    } catch (error) {
      next(error)
    }
  }

}