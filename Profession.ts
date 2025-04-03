// models/Profession.ts
import DatabaseEntity from "./DatabaseEntity";

export default class Profession extends DatabaseEntity {
  name: string;
  description?: string;

  constructor(json: any) {
    super(json);
    this.name = json.name;
    this.description = json.description;
  }
}