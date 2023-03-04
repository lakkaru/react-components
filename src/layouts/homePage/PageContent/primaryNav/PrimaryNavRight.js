import React from 'react'
import PrimaryNavRightLink from '../../../../components/primaryNavRight/PrimaryNavRightLink'

const links=[
  {image:'https://static.thenounproject.com/png/4066359-200.png', count:{}},
  {image:'https://www.pngfind.com/pngs/m/74-745493_png-file-svg-png-notification-icon-free-transparent.png', count:{num:'9', color:'red'}},
  {image:'https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg', count:{num:'35', color:'yellow'}},
  {image:'https://www.nicepng.com/png/detail/400-4000824_direct-mail-icon-attachment-in-email-icon.png', count:{num:'7', color:'blue'}},
  {image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH2P21SKcXYr5iTuBeLe8-ZFv_gv42oZBA5WcStlqf1DOe6a53sYXP3pYVKH3groOqTCE&usqp=CAU', count:[]},
  {image:'https://pngfreepic.com/wp-content/uploads/2022/12/f83589ad.png?v=1670037474', count:[]}
];
export default function PrimaryNavRight() {
  return (
    <div style={{display:'flex',flex:1, justifyContent:'space-between'}}>
        {links.map((val, key)=>{
          return <PrimaryNavRightLink key={key} image={val.image} count={val.count}/>
        })}
        
    </div>
  )
}
