import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';


import * as strings from 'quickLinksStrings';
import QuickLinks from './components/QuickLinks';
import { IQuickLinksProps } from './components/IQuickLinksProps';
import { IQuickLinksWebPartProps } from './IQuickLinksWebPartProps';


export default class QuickLinksWebPart extends BaseClientSideWebPart<IQuickLinksWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IQuickLinksProps > = React.createElement(
      QuickLinks,
      {
        description: this.properties.description,
        numberOfLinks: this.properties.numberOfLinks,
      }
    );
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
              PropertyPaneTextField('description', {
                label: 'Description'
              }),
              PropertyPaneDropdown('numberOfLinks', {
                label: 'Number of links to display?',
                options: [
                  { key: 1, text: '1'},
                  { key: 3, text: '3' },
                  { key: 5, text: '5' },
                  { key: 10, text: '10'}
                ],
                selectedKey: '3'
            })
            ]
            }
          ]
        }
      ]
    };
  }

}
