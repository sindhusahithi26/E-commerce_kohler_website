import './Header.css';
function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li href="#" style={{color:"white",marginLeft:"-15px"}}><a href="#">KOHLER INDIA</a></li>
      </ul>
      <ul className="navbar-right">
      <i className="fa fa-map-marker" style={{fontSize:22}}></i>
        <li>Find&nbsp;a&nbsp;Store</li>
        <li>India&nbsp;-&nbsp;EN</li>
        <li id='userlogo'>
        <i className="fa fa-user-o" style={{fontSize:22}}></i>
        </li>
        <li>
        <i className="fa fa-heart-o" style={{fontSize:22}}></i>
        </li>
        <li>
    
          <i className="fa fa-shopping-cart" style={{fontSize:22}}></i>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
