export interface User {
  id?:number;
	user_name: string;
  email: string;
	password: string;
  photo?:string;
  age?: number;
	role?: string;
  comments?: string[];
  enrolled?: number[];
  progress?: string[];
  firstAccess?: string;
  lastAccess?: string;
}
