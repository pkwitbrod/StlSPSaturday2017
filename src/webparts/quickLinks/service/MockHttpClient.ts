import { ISPLink } from "../components/QuickLinks";

export default class MockHttpClient {

    private static _items: ISPLink[] = [
      { Title: "Google", URL: "http://www.google.com", Id: 1 },
      { Title: "Microsoft", URL: "http://www.microsoft.com", Id: 2 },
      { Title: "TypeScript", URL: "https://www.typescriptlang.org/", Id: 3},
      { Title: "Yahoo", URL: "http://www.yahoo.com", Id: 4},
      { Title: "Yahoo", URL: "http://www.yahoo.com", Id: 5},
      { Title: "Yahoo", URL: "http://www.yahoo.com", Id: 6}
    ];

    public static get(restUrl: string, options?: any): Promise<ISPLink[]> {
      return new Promise<ISPLink[]>((resolve) => {
            resolve(MockHttpClient._items);
        });
    }
};
