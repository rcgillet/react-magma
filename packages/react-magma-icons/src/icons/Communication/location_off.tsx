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
  title: ['location_off'],
  paths: [
    {
      d:
        'M2.70999996,3.55999996 C2.31999996,3.94999997 2.31999996,4.57999997 2.70999996,4.96999997 L5.17999997,7.43999998 C5.06999997,7.94999998 4.99999997,8.46999999 4.99999997,8.99999999 C4.99999997,13.17 9.41999999,18.92 11.23,21.11 C11.63,21.59 12.36,21.59 12.76,21.11 C13.41,20.33 14.38,19.1 15.37,17.65 L18.02,20.3 C18.41,20.69 19.04,20.69 19.43,20.3 C19.82,19.91 19.82,19.28 19.43,18.89 L4.11999997,3.55999996 C3.72999997,3.16999996 3.09999996,3.16999996 2.70999996,3.55999996 Z M12,1.99999996 C10.16,1.99999996 8.49999999,2.70999996 7.24999998,3.85999997 L10.44,7.04999998 C10.87,6.70999998 11.41,6.49999996 12,6.49999996 C13.38,6.49999996 14.5,7.61999998 14.5,8.99999996 C14.5,9.58999999 14.29,10.13 13.94,10.56 L17.49,14.11 C18.37,12.36 19,10.57 19,8.99999996 C19,5.12999997 15.87,1.99999996 12,1.99999996 Z',
      id: 'CommunicationLocationOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'location_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationLocationOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationLocationOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationLocationOffIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationLocationOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
