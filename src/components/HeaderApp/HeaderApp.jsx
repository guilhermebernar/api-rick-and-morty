import logo from "./logo.png";
import {HeaderContainer, LogoImg} from "./style.js"

const HeaderApp = () => {
    return (
      <HeaderContainer>
        <LogoImg src={logo} alt="logo"/>
      </HeaderContainer>
    );
  };
  
  export default HeaderApp;