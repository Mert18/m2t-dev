import React from 'react'

interface IListItemWithTitle {
  title: string
  text: string
}

const ListItemWithTitle = ({title, text}: IListItemWithTitle) => {
  return (
    <li>
      <b>{title}</b>
      <p>{text}</p>
      <br />
    </li>
  )
}

export default ListItemWithTitle