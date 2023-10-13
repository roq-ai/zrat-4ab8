import { BidInterface } from 'interfaces/bid';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  title: string;
  description?: string;
  deadline?: any;
  budget?: number;
  client_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;
  bid?: BidInterface[];
  user_project_client_idTouser?: UserInterface;
  user_project_freelancer_idTouser?: UserInterface;
  _count?: {
    bid?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  client_id?: string;
  freelancer_id?: string;
}
