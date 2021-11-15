import { Uuid } from '../../base/models/uuid.model';
import { TimeStamp } from '../../base/models/timestamp.model';
import { Ingredient } from '../ingredients/ingredients.model';
import { UserInformation } from '../../base/models/userId.model';

export interface Recipe extends Uuid, TimeStamp, UserInformation {
  name: string;
  time: string;
  description: string;
  ingredients?: Ingredient[];
  preparingSteps?: string[] | string;
  photoUrl: string;
}
