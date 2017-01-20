import * as React from 'react';
import { css } from 'office-ui-fabric-react';
// import { SPHttpClient } from '@microsoft/sp-http'

import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';
import MockHttpClient from '../service/MockHttpClient';




export interface IQuickLinksState {
  items: ISPLinks;
}

export interface ISPLinks {
  value: ISPLink[];
}

export interface ISPLink {
  Title: string;
  URL: string;
  Id: number;
}


export default class QuickLinks extends React.Component<IQuickLinksProps, IQuickLinksState> {
  private _getMockListData(): Promise<ISPLinks> {
   return MockHttpClient.get("this.context.pageContext.web.absoluteUrl")
     .then((data: ISPLink[]) => {
       var listData: ISPLinks = { value: data };
       return listData;
     }) as Promise<ISPLinks>;
  }

  constructor(props: IQuickLinksProps, state: IQuickLinksState) {
     super(props);
     let testItem : ISPLink[] = [{Title: "Google", URL: "http://www.google.com", Id: 1 } as ISPLink]
     let testItems: ISPLinks = {value: testItem};
     this.state = {
       items: testItems
     };
   }

  public componentDidMount(): void {
    this._getMockListData().then((response) => {
      const mockItems: ISPLinks = {value: response.value}
      this.setState({items: mockItems});
    });
  }

  public render(): React.ReactElement<IQuickLinksProps> {
    const items: JSX.Element[] = this.state.items.value.map((item: ISPLink, i: number): JSX.Element => {
      return (
        <li key={item.Id}><a href={item.URL}>{item.Title}</a></li>
      );
    });

    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={css('ms-Grid-row ms-bgColor-themeDark ms-fontColor-white', styles.row)}>
            <div className='ms-Grid-col ms-u-lg10 ms-u-xl8 ms-u-xlPush2 ms-u-lgPush1'>
              <span className='ms-font-xl ms-fontColor-white'>
                Helpful links!
              </span>
              <p className='ms-font-l ms-fontColor-white'>
                The following links will help you learn more about SharePoint!
              </p>
                <ul className={styles.links}>
                  {items}
                </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
