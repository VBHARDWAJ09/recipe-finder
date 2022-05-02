import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import {RecipeContainer,CoverImage,IngredientsText,SeeMoreText,RecipeName} from './recipeComponent';

export default function Content(props) {
  const [show,setShow] = React.useState(false);
  const {recipeObj} = props;
  return (
    <div>
    <Dialog open={show}>
    <DialogTitle>Ingredients</DialogTitle>
    <DialogContent>
      <table>
        <thead>
            <th>Ingredients</th>
            <th>Weight</th>
        </thead>
        <tbody>
          {recipeObj.ingredients.map((ingredientsObj)=>
          <tr>
            <td>{ingredientsObj.text}</td>
            <td>{ingredientsObj.weight}</td>
          </tr>
          )}
        </tbody>
      </table>
    </DialogContent>
    <DialogActions>  
      <IngredientsText onClick={()=>window.open(recipeObj.url)} >See More</IngredientsText>
      <SeeMoreText onClick={()=>setShow(false)}>Close</SeeMoreText>
    </DialogActions>
    </Dialog>
    <RecipeContainer >
          <CoverImage src={recipeObj.image}/>
          <RecipeName>{recipeObj.label}</RecipeName>
          <IngredientsText onClick={()=>setShow(true)} >Ingredients</IngredientsText>
          <SeeMoreText onClick={()=>window.open(recipeObj.url)}>See Complete Recipe</SeeMoreText>
    </RecipeContainer>
    </div>
  )
}
