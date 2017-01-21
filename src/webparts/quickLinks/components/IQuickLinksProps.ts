import { SPHttpClient } from '@microsoft/sp-http'


export interface IQuickLinksProps {
  description: string;
  numberOfLinks: number;
  httpClient: SPHttpClient;
  siteUrl: string;
}
