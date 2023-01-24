import { Invite, TeamMember } from '../types'
import { invites, members } from '../constants'

class UserApi {
  getUsers() {
    return new Promise<TeamMember[]>((resolve, reject) => resolve(members)) // reject, but just for test case
  }

  getInvites() {
    return new Promise<Invite[]>((resolve, reject) => resolve(invites)) // reject, but just for test case
  }
}

export default UserApi
