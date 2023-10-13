import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BidInterface {
  id?: string;
  proposal?: string;
  amount?: number;
  date?: any;
  project_id: string;
  freelancer_id: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BidGetQueryInterface extends GetQueryInterface {
  id?: string;
  proposal?: string;
  project_id?: string;
  freelancer_id?: string;
}
