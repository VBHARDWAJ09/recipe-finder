import styled from "styled-components";


export const RecipeContainer = styled.div`
  display:flex;
  flex-direction:column;
  padding:10px;
  box-shadow:0 3px 10px 0 #aaa;
  width:300px;
`;

export const CoverImage = styled.img`
  height:200px;
  object-fit:cover;
`;
export const RecipeName = styled.div`
  font-size:18px;
  font-weight:bold;
  color:black;
  margin:10px 0;
`;
export const IngredientsText = styled.div`
  font-size:18px;
  border:1px solid green;
  color:black;
  margin-bottom:12px;
  cursor:pointer;
  padding:10px 15px;
  border-radius:4px;
  color:green;
  text-align:center;
`;
export const SeeMoreText = styled(IngredientsText)`
  color:#eb3300;
  border:1px solid #eb3300;
`;