import React from 'react'

export interface TypeHeaderProps {
  title: string
  icon: string
}

export default function TypeHeader({ title, icon }: TypeHeaderProps): JSX.Element {

  return (
    <div className="type-header-container">
      <img
        src={icon}
        alt="User Type Icon"
        className="type-header-icon"
        width={16}
        height={16}
      />
      <h3 className="type-header-title">{title}</h3>
    </div>
  )
}
