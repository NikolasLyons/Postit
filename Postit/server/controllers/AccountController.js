import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { albumMembersService } from '../services/AlbumMembersService'
import { albumsService } from '../services/AlbumsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/albums', this.getAlbums)
      .get('/albumMembers', this.getAlbumMembers)
  }
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getAlbums(req, res, next) {
    try {
      const albums = await albumsService.getAll({creatorId: req.userInfo.id})
      return res.send(albums)
    } catch (error) {
      next(error)
    }
  }
  
  async getAlbumMembers(req, res, next) {
    try {
      const userInfo = req.userInfo
      const albumMembers = await albumMembersService.getMyAlbumMembers(userInfo.id)
      return req.send(albumMembers)
    } catch (error) {
      next(error)
    }
  }
}
