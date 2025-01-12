/* global bootstrap: false */
(() => {
  'use strict'
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()



/*************************************************************** */

if(localStorage.getItem("isSmall")==='yes'){
  SidebarID.classList.add('small-sidebar')
}else{
  SidebarID.classList.remove('small-sidebar')
}


const toggleSidebar = ()=>{

  if(localStorage.getItem("isSmall")==='yes'){
    localStorage.setItem("isSmall",'no')
    SidebarID.classList.remove('small-sidebar')


  }else{
    localStorage.setItem("isSmall",'yes')
    SidebarID.classList.add('small-sidebar')
  }
}

