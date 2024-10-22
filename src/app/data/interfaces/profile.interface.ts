export interface Profile {
  id: number;
  username: string;
  avatarUrl: string | null;
  subscriptionsAmount: number;
  fname: string;
  lname: string;
  description: string;
  isActive: boolean;
  stack: string[];
  city: string;
}
