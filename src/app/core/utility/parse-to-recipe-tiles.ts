import { Recipe } from '../models/recipes.model';
import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';

export const parseToRecipeTiles = ({
  id,
  authorName,
  time,
  name,
  photoUrl,
}: Recipe): RecipeTile => ({ id, authorName, time, name, photoUrl });
