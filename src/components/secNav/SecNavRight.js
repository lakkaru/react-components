import React from 'react'
import PrimaryNavLeftLink from '../primaryNavLeft/PrimaryNavLeftLink'

export default function SecNavRight() {
  const menus=[
    {icon:'https://www.pngkey.com/png/full/831-8312641_png-file-svg-comment-icon-svg.png',
      menu:''
    },
    {icon:'https://static.thenounproject.com/png/1538906-200.png',
      menu:'Dashboard'
    },
    {icon:'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-75-512.png',
      menu:'Settings'
    }
  ];
  return (
    <div style={{display:'flex', flex:1, justifyContent:'space-between'}}>
        {menus.map((val, key)=>{
          return <PrimaryNavLeftLink key={key} icon={val.icon} menu={val.menu}/>
        })}  
    </div>
  )
}
