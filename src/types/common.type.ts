export interface ICommonDataSchema {
  _id: string;
  _createdAt: Date;
  name: string;
  icon: {
    _type: string;
    name: string;
    provider: string;
  };
  url: string;
}
