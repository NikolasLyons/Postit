import { Auth0Provider } from "@bcwdev/auth0provider";
import { albumMembersService } from "../services/AlbumMembersService";
import BaseController from "../utils/BaseController";

export class AlbumMembersController extends BaseController{
  constructor(){
    super('api/albumMembers')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.create)
    .put('/:id', this.edit)
    .delete('/:id',this.delete)
  }
  async create(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id
      const albumMembers = await albumMembersService.create(req.body)
      return res.send(albumMembers)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      await albumMembersService.delete(req.params.id, req.userInfo.id)
    } catch (error) {
      next(error)
    }
  }

  edit(req,res,next){
    try {
      
    } catch (error) {
      
    }
  }
  
}

