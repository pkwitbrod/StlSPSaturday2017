import * as React from 'react';
import { css } from 'office-ui-fabric-react';
import styles from './QuickLinks.module.scss';
import { IQuickLinksProps } from './IQuickLinksProps';

export default class QuickLinks extends React.Component<IQuickLinksProps, void> {
  public render(): React.ReactElement<IQuickLinksProps> {
    console.log(this.props.selectedDropdown);
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
              <p className='ms-font-l ms-fontColor-white'>
                {this.props.description}
              </p>
              <a className={css('ms-Button', styles.button)}
                 href='https://github.com/SharePoint/sp-dev-docs/wiki'>
                <span className='ms-Button-label'>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
