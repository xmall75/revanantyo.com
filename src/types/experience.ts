export interface IExperienceSchema {
  _id: string;
  _createdAt: Date;
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string | null;
  stillWorking: boolean;
  jobdesk: string[];
}
