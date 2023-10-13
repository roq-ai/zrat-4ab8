import queryString from 'query-string';
import { BidInterface, BidGetQueryInterface } from 'interfaces/bid';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getBids = async (query?: BidGetQueryInterface): Promise<PaginatedInterface<BidInterface>> => {
  return fetcher('/api/bids', {}, query);
};

export const createBid = async (bid: BidInterface) => {
  return fetcher('/api/bids', { method: 'POST', body: JSON.stringify(bid) });
};

export const updateBidById = async (id: string, bid: BidInterface) => {
  return fetcher(`/api/bids/${id}`, { method: 'PUT', body: JSON.stringify(bid) });
};

export const getBidById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/bids/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteBidById = async (id: string) => {
  return fetcher(`/api/bids/${id}`, { method: 'DELETE' });
};
