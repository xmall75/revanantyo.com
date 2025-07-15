export interface ITechStackSchema {
  _id: string;
  _createdAt: Date;
  name: string;
  icon: {
    _type: string;
    name: string;
    provider: string;
  };
}
