
// Basic database entity
export default abstract class DatabaseEntity {
  id: number = 0;
  created_at: Date = new Date();
  updated_at: Date | null;
  deleted_at: Date | null;

  /*
   * Constructor for DatabaseEntity.
   * @param json JSON object to create instance of this object.
   */
  constructor(json: any) {
    this.id = json.id;
    this.created_at = new Date(json.created_at);
    this.updated_at = json.updated_at ? new Date(json.updated_at) : null;
    this.deleted_at = json.deleted_at ? new Date(json.deleted_at) : null;
  }

  /*
   * Convert calling instance of this object to JSON object.
   * @return a JSON representation of this object.
   */
  toJson(): any {
    return JSON.parse(JSON.stringify(this));
  }
}