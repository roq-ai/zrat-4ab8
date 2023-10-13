import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  date?: any;
  client_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  user_review_client_idTouser?: UserInterface;
  user_review_freelancer_idTouser?: UserInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  client_id?: string;
  freelancer_id?: string;
}
