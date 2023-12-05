import React from 'react'

export default function Child ({gfgcolor,usercolor}){
    return(
<div>
<h4>This is a child Component</h4>
<h1 style={{color:gfgcolor}}>Leetcode</h1>
<h1 style={{color:usercolor}}>Geeksforgeeks</h1>
</div>
    );
}
  