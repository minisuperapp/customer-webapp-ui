import React from 'react'
import { Item } from './Item'
import css from './styles.module.css'

export class LoadingList extends React.Component {
  render() {
    return (
      <div>
        <div className={css.container}>
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
}
