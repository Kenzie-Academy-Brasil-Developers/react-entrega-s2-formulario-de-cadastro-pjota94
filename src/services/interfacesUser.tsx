export interface IAxiosProfile {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

export interface IAxiosLogin {
  user: IAxiosProfile;
  token: string;
}

export interface IAxiosCreate {
  status: string;
  message: string;
}

export interface IAxiosUpdate {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}
