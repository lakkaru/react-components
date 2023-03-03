import React from 'react'
import BrandLogo from '../../components/brandLogo/BrandLogo'
import DashBoard from '../../components/dashBoard/DashBoard'
import MenuSection from '../../components/leftMenu/MenuSection';

export default function LeftMenu() {
  const components=[
     {comName:'Theme',
      links:[
        {leftIcon:'leftIco',
          menu:'Colors',
          rightIcon:'rightIco'},
        {leftIcon:'leftIco',
        menu:'Typography',
        rightIcon:'rightIco'},
          ]    
    },
    {comName:'Component',
    links:[
      {leftIcon:'leftIco',
        menu:'Base',
        rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Buttons',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Charts',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
        menu:'Editors',
        rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Forms',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Google Maps',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
        menu:'Icons',
        rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Notifications',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Plugins',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Tables',
      rightIcon:'rightIco'},
      {leftIcon:'leftIco',
      menu:'Widgets',
      rightIcon:'rightIco'},
        ]     
    },
    {comName:'Extras',
      links:[
        {leftIcon:'leftIco',
          menu:'Pages',
          rightIcon:'rightIco'},
        {leftIcon:'leftIco',
        menu:'Apps',
        rightIcon:'rightIco'},
          ]    
    },

  ];

  return (
    <div style={{flex:1}}>
      <BrandLogo/>
      <DashBoard/>
      {components.map((val, key)=>{
        return <MenuSection key={key} secName={val.comName} links={val.links}/> 
      })}
    </div>
  )
}
