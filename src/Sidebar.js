import React from 'react'
import "./Sidebar.css"
import SidebarChat from "./SidebarChat.js"
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__header">
          <Avatar />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className='sidebar__search'>
          <div className='sidebar__searchContainer'>
            <SearchOutlined />
            <input type="text" placeholder="Search or start new chat" />
          </div>
        </div>
        <div className="sidebar__chats">
          <SidebarChat />
        </div>

    </div>
  )
}

export default Sidebar