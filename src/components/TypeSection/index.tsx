import React, { Fragment } from 'react'

// src
import TypeHeader, { TypeHeaderProps } from '../TypeHeader'
import { MeshType } from '../../types'
import TypeEntityItem from '../TypeEntityItem'

interface TypeSectionProps extends TypeHeaderProps {
  items: MeshType[]
}

export default function TypeSection({ items, title, icon }: TypeSectionProps): JSX.Element {

  return (
    <div>
      <TypeHeader title={title} icon={icon} />

      <div className="users-list">
        {items.map((entity) => (
          <TypeEntityItem key={entity.id} entity={entity} />
        ))}
      </div>
    </div>
  )
}
