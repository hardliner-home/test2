import React, { useMemo, useEffect, useState } from 'react'

// src
import { Invite, MeshType, TeamMember } from './types'
import TypeSection from './components/TypeSection'
import UserApi from './api'

const Users = new UserApi()

function App(): JSX.Element {
  const [members, setMembers] = useState<TeamMember[]>([])
  const [invites, setInvites] = useState<Invite[]>([])
  // isLoading

  const sortedUsers = useMemo(() => {
    const defaultValue = {
      admins: [] as MeshType[],
      default: [] as MeshType[]
    }

    const reduceCallback = (acc: typeof defaultValue, current: MeshType) => {
      if (current.role === 'Administrator') acc.admins.push(current)
      else acc.default.push(current)
      return acc
    }

    // non-trivial mutation of defaultValue within reduce's accumulator
    if (members.length) members.reduce(reduceCallback, defaultValue)
    if (invites.length) invites.reduce(reduceCallback, defaultValue)

    return defaultValue
  }, [members, invites])

  useEffect(() => {
    // Can be run with Promise.all ->
    // In this case we can work with array of arrays, but has a risk (in abstraction)
    //   - to lose hole render

    Users.getUsers().then((response) => setMembers(response)) // then/catch
    Users.getInvites().then((response) => setInvites(response)) // then/catch
  }, [])

  return (
    <main className="main-container">
      <TypeSection
        items={sortedUsers.admins}
        title="Administrators"
        icon="../assets/admin.png"
      />

      <TypeSection
        items={sortedUsers.default}
        title="Standard Users"
        icon="../assets/person.png"
      />
    </main>
  )
}

export default App
