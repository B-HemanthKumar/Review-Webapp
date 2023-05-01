import "./Navbar.css"
import React from 'react'

const Navbar = () => {
  return (
<>
  <div className="wrapper">
    <nav>
      <input type="checkbox" id="show-search"/>
       
      <input type="checkbox" id="show-menu"/>
      <label for="show-menu" className="menu-icon"><i class="fas fa-bars"></i></label>
      
      <div className="content">
      {/* <div className="logo"><a href="">Menu </a></div> */}
        <ul className="links">
          <li><a href="">Write a review</a></li>
          {/* <li><a href="">Agencies</a></li> */}
          <li>
            <a href="#" className="desktop-link">Agencies <i class="fa fa-angle-down icon"></i> </a>
            
            <input type="checkbox" id="show-features"/>
            <label for="show-features">Agencies  <i class="fa fa-angle-down icon"></i> </label>
            <ul>
              <li><a href="">Drop Menu 1</a></li>
              <li><a href="">Drop Menu 2</a></li>
              <li><a href="">Drop Menu 3</a></li>
              <li><a href="">Drop Menu 4</a></li>
            </ul>
           
          </li>
          {/* <li>
            <a href="" className="desktop-link">Services  <i class="fa fa-angle-down icon"></i> </a>
            <input type="checkbox" id="show-services" />
            <label for="show-services">Services <i class="fa fa-angle-down icon"></i> </label>
            <ul>
              <li><a href="">Drop Menu 1</a></li>
              <li><a href="">Drop Menu 2</a></li>
              <li><a href="">Drop Menu 3</a></li>
              <li>
                <a href="" className="desktop-link">More Items   <i class="fa fa-angle-right icon"></i> </a>
                <input type="checkbox" id="show-items"/>
                <label for="show-items">More Items  <i class="fa fa-angle-right icon"></i> </label>
                <ul>
                  <li><a href="">Sub Menu 1</a></li>
                  <li><a href="">Sub Menu 2</a></li>
                  <li><a href="">Sub Menu 3</a></li>
                </ul>
              
              </li>
            </ul>
           
          </li> */}
          <li><a href="">Apply for listing</a></li>
        </ul>
    </div>
      <label for="show-search" className="search-icon"><i class="fas fa-search"></i></label>
     
      <form action="" className="search-box">
        <input type="text" placeholder="Type Something to Search..." required/>
        <button type="submit" className="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
        
        </form>
        
    </nav>
</div>

  {/* <div className="dummy-text">
    <h2>Responsive Dropdown Menu Bar with Searchbox</h2>
    <h2>using only HTML & CSS - Flexbox</h2>
  </div> */}


</>
  )
}

export default Navbar