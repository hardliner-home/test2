export type Role = "Administrator" | "Standard"

export type Status = "request" | "pending" | "approved" | "declined" | "invited"

export type MeshType = TeamMember | Invite

export interface UserShortData {
  id: number
  name: string
  lastName: string
  phone: string
  email: string
}

export interface TeamMember {
  id: number
  status: Status
  user: UserShortData
  role: Role
}

export interface Invite {
  id: number
  phone: string
  role: Role
}
