import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput } from './components/headerComponents';
import Content from './components/Content';

const APP_ID = `1d8831e5`;
const APP_KEY = `5d4e08e41dc17ee1c95ba132491546f0`;

const Container = styled.div`
  display:flex;
  flex-direction:column;
`;

const RecipeListContainer = styled.div`
  display:flex;
  flex-direction:row;
  padding:30px;
  justify-content:space-evenly;
  flex-wrap:wrap;
  gap:20px;
`;

const Placeholder = styled.img`
  width:120px;
  width:120px;
  margin:200px;
  opacity:0.6;

`;


function App() {
  const [timeOutId, updateTimeOutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async (searchString) => {
    const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    console.log(response);
    updateRecipeList(response.data.hits)
  }

  const onTextChange = (event) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => fetchRecipe(event.target.value), 500)
    updateTimeOutId(timeOut);
  }
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src="/hamburger.svg" />Recipe Finder</AppNameComponent>
        <SearchComponent>
          <img src="/search-icon.svg" />
          <SearchInput placeholder="Search Recipe" onChange={onTextChange} />
        </SearchComponent>
      </Header>
      <RecipeListContainer>
        {recipeList.length ? 
        recipeList.map((recipeObj) => (<Content recipeObj={recipeObj.recipe} />))
      :
      <Placeholder src="/hamburger.svg"></Placeholder>}
      </RecipeListContainer>
    </Container>
  );
}

export default App;