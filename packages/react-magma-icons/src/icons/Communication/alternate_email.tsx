import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['alternate_email'],
  paths: [
    {
      d:
        'M12.72,2.02999996 C6.62999998,1.59999996 1.59999996,6.62999998 2.02999996,12.72 C2.38999996,18.01 7.00999998,22 12.31,22 L16,22 C16.55,22 17,21.55 17,21 C17,20.45 16.55,20 16,20 L12.33,20 C8.59999999,20 5.17999997,17.58 4.24999997,13.97 C2.75999996,8.16999998 8.15999998,2.75999996 13.96,4.25999997 C17.58,5.17999997 20,8.59999999 20,12.33 L20,13.43 C20,14.22 19.29,15 18.5,15 C17.71,15 17,14.22 17,13.43 L17,12.18 C17,9.66999999 15.22,7.40999998 12.74,7.05999998 C9.33999999,6.56999998 6.46999998,9.50999999 7.07999998,12.93 C7.41999998,14.84 8.90999999,16.42 10.8,16.87 C12.64,17.3 14.39,16.71 15.54,15.54 C16.43,16.76 18.21,17.4 19.84,16.75 C21.18,16.22 22,14.85 22,13.41 L22,12.32 C22,7.00999998 18.01,2.38999996 12.72,2.02999996 Z M12,15 C10.34,15 8.99999999,13.66 8.99999999,12 C8.99999999,10.34 10.34,8.99999999 12,8.99999999 C13.66,8.99999999 15,10.34 15,12 C15,13.66 13.66,15 12,15 Z',
      id: 'CommunicationAlternateEmailIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'alternate_email',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationAlternateEmailIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationAlternateEmailIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationAlternateEmailIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationAlternateEmailIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
