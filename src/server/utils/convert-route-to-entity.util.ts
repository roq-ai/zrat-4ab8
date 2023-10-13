const mapping: Record<string, string> = {
  bids: 'bid',
  companies: 'company',
  projects: 'project',
  reviews: 'review',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
