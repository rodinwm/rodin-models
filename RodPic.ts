// models/RodPic.ts
import DatabaseEntity from "./DatabaseEntity";

export default class RodPic extends DatabaseEntity {
  userId: string;
  imageUrl: string;

  constructor(json: any) {
    super(json);
    this.userId = json.userId;
    this.imageUrl = json.imageUrl;
  }
}