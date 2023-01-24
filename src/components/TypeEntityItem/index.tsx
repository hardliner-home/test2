import React from 'react'

// src
import { MeshType } from '../../types'
import BadgePill from '../BadgePill'

interface TypeEntityItemProps {
  entity: MeshType
}

export default function TypeEntityItem({ entity }: TypeEntityItemProps): JSX.Element {

  return (
    <>
      <div key={entity.id} className="users-list-item">
        {'user' in entity
          ? <p>{entity.user.name} {entity.user.lastName}</p>
          : <div className="invite-list-item">
              <p>{entity.phone}</p>
              <BadgePill title="Invited" />
            </div>
        }

        <img
          src="../../../public/assets/chevron.png"
          alt="Action Right"
          width={16}
          height={16}
        />
      </div>
      <hr />
    </>
  )
}
