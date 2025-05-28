export class PlantModel {
  id: string;
  name: string;

  constructor(partial: Partial<PlantModel>) {
    Object.assign(this, partial);
  }
}
