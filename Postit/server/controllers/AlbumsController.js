import { Auth0Provider } from "@bcwdev/auth0provider";
import { albumsService } from "../services/AlbumsService";
import BaseController from "../utils/BaseController";


export class AlbumsController extends BaseController{
  constructor(){
    super('api/albums')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
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
      
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
 

}