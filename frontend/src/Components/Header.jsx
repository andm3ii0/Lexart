import { BackArrow, HeaderContainer, UserIcon } from "../Styles/Header";

function Header() {
  return (
    <HeaderContainer>
      <BackArrow />
      <UserIcon>
        <img src="" alt="User" />
        <div>
          <p>Name</p>
          <p>Description</p>
        </div>
      </UserIcon>
    </HeaderContainer>
  );
}

export default Header;
