import { HeaderStyled, NavLinkStyled, UlStyled } from './AppBar.styled';

export const AppBar = () => {
  return (
    <HeaderStyled>
      <nav>
        <UlStyled>
          <li>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
          </li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};
