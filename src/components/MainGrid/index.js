import styled from 'styled-components';
const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  grid-gap: 10px;
  grid-template-areas: "welcomeArea profileRelationsArea";
  padding: 16px;
  .profileArea {
    display: none;
    max-width: 200px;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1100px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 320px;

  }

`;

export default MainGrid;