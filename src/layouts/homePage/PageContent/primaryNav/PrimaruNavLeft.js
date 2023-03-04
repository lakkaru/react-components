import React from 'react'
import PrimaryNavLeftLink from '../../../../components/primaryNavLeft/PrimaryNavLeftLink'

const menus=[
  {icon:'https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg',
    menu:''
  },
  {icon:'',
    menu:'Dashboard'
  },
  {icon:'',
    menu:'Users'
  },
  {icon:'',
    menu:'Settings'
  }
];

export default function PrimaruNavLeft() {
  return (
    <div style={{display:'flex', flex:1, justifyContent:'space-between'}}>
        {menus.map((val, key)=>{
          return <PrimaryNavLeftLink key={key} icon={val.icon} menu={val.menu}/>
        })}
        
    </div>
  )
}
