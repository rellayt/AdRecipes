interface TimeStamp {
  createdAt: Date;
}

interface UserInformation {
  userId: string;
  authorName?: string;
}
export interface Uuid {
  id: string;
}

export interface RecipeEntry {
  name: string;
  time: string;
  description: string;
  preparingSteps?: string[];
  image?: Blob | File;
}

export interface Recipe extends RecipeEntry, Uuid, TimeStamp, UserInformation {
  photoUrl?: string;
}
