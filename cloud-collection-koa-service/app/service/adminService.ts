import Admin from '../model/Admin'

class AdminService {
  getAdmin() {
    return Admin.findOne()
  }
  getAdminById(adminId: number) {
    return Admin.findByPk(adminId)
  }
}

export default new AdminService()
