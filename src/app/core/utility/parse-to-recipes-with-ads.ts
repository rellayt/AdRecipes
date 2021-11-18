import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';
import { generateRandomNumberByRange } from './generate-random-number';
import { Ad } from '../models/ad';
import { RecipeTileOrAd } from '../types/recipe-tile-or-ad';

const ADS_RATIO = 4;

export const parseToRecipesWithAds = (
  recipes: RecipeTile[] | Ad[]
): RecipeTileOrAd[] => {
  const adsToAddQuantity = Math.round(recipes.length / ADS_RATIO);
  [...Array(adsToAddQuantity)].forEach((_) => {
    const adIndex = generateRandomNumberByRange(0, recipes.length - 1);
    recipes.splice(adIndex, 0, { isAd: true } as Ad);
  });
  return recipes as unknown as RecipeTileOrAd[];
};
