import { SPHttpClient } from '@microsoft/sp-http'

export interface IQuickLinksWebPartProps {
  description: string;
  numberOfLinks: number;
  httpClient: SPHttpClient;
  siteUrl: string;
}
