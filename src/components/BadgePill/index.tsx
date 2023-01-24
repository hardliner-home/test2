import React from 'react'

interface BadgePillProps {
  title: string
}

export default function BadgePill({ title }: BadgePillProps): JSX.Element {
  // const classes = useStyles()

  return (
    <div className="badge pill">
      <p>{title}</p>
    </div>
  )
}
