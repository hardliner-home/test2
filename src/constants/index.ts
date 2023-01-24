import { Invite, TeamMember } from '../types'

const shortData = {
  id: 15,
  name: 'Vova',
  lastName: 'Shabanov',
  phone: '+353 1234567',
  email: 'vova@do.com'
}

const members: TeamMember[] = [
  { id: 11, status: 'request', role: 'Administrator', user: shortData },
  { id: 12, status: 'approved', role: 'Standard', user: shortData },
  { id: 13, status: 'invited', role: 'Standard', user: shortData },
]

const invites: Invite[] = [
  { id:  1, phone: '+353 1234567', role: 'Administrator'},
  { id:  2, phone: '+353 1234567', role: 'Standard'},
  { id:  3, phone: '+353 1234567', role: 'Standard'}
]

export {
  shortData,
  members,
  invites
}
