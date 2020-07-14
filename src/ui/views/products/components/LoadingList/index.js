import React from 'react'
import { Item } from './Item'
import Style from './style'

export class LoadingList extends React.Component {
  render() {
    return (
      <Style>
        <div className="container">
          <Item />
          <Item />
          <Item />
        </div>
      </Style>
    )
  }
}
