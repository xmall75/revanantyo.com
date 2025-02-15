export interface IWorkingExperience {
  company: string;
  role: string;
  type: string;
  date: string;
  jobdesk: string[];
}

export interface IExperienceSchema {
  _id: string;
  _createdAt: Date;
  company: string;
  role: string;
  type: string;
  startDate: Date;
  endDate: Date | null;
  stillWorking: boolean;
  jobdesk: string[];
}
