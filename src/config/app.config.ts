interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: [],
  tenantRoles: ['Freelancer', 'Client'],
  tenantName: 'Company',
  applicationName: 'Zrat',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage projects', 'Manage bids', 'Manage skills', 'Read reviews'],
  getQuoteUrl: 'https://app.roq.ai/proposal/0271408c-15f6-4db8-9d29-334e1d913f03',
};
