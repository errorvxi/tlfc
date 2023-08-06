import React from 'react'
import { FC, ReactNode } from 'react'
// import { Link } from 'react-router-dom'
import { SiderbarWrapper } from './style'
import {
  Drawer,
  ListItem,
  ListItemIcon,
  Divider,
  List,
  ListItemText
} from '@mui/material'

import HomeIcon from '@mui/icons-material/Home'
import DeleteIcon from '@mui/icons-material/Delete'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}
const Siderbar: FC<IProps> = () => {
  const bar = ['/home', '/mydoc']
  return (
    <SiderbarWrapper>
      <div className="header"></div>
      <Drawer className="drawer" variant="permanent" anchor="left">
        <div className="outlet"></div>
        <List className="list">
          {['首页', '我的文档'].map((text, index) => (
            <Link to={'/desktop' + bar[index]} key={text}>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <HomeIcon color="action" />
                  ) : (
                    <ListAltIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List className="list">
          {['回收站'].map((text) => (
            <Link to="/desktop/trash" key={text}>
              <ListItem button key={text}>
                <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </SiderbarWrapper>
  )
}

export default Siderbar
