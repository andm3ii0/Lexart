import { BackArrow, HeaderContainer, UserIcon } from "../Styles/Header";
import logo from '../Images/logo.png';

function Header() {
  return (
    <HeaderContainer>
      <BackArrow />
      <UserIcon>
        <img src={logo} alt="LexArts" />
        <div>
          <p>LexArts</p>
          <p>Arts Everywhere</p>
        </div>
      </UserIcon>
    </HeaderContainer>
  );
}

export default Header;
