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
  title: ['read_more'],
  paths: [
    {
      d:
        'M21,15 C21.55,15 22,15.45 22,16 C22,16.55 21.55,17 21,17 L21,17 L14,17 C13.45,17 13,16.55 13,16 C13,15.45 13.45,15 14,15 L14,15 Z M7.99999996,8.20999998 C7.99999996,7.75999998 8.53999999,7.53999998 8.84999999,7.84999998 L8.84999999,7.84999998 L12.64,11.64 C12.84,11.84 12.84,12.15 12.64,12.35 L12.64,12.35 L8.84999999,16.14 C8.53999999,16.46 7.99999996,16.24 7.99999996,15.79 L7.99999996,15.79 L7.99999996,13 L2.99999996,13 C2.44999996,13 1.99999996,12.55 1.99999996,12 C1.99999996,11.45 2.44999996,11 2.99999996,11 L2.99999996,11 L7.99999996,11 Z M21,11 C21.55,11 22,11.45 22,12 C22,12.55 21.55,13 21,13 L21,13 L17,13 C16.45,13 16,12.55 16,12 C16,11.45 16.45,11 17,11 L17,11 Z M21,6.99999998 C21.55,6.99999998 22,7.44999998 22,7.99999998 C22,8.54999999 21.55,8.99999998 21,8.99999998 L21,8.99999998 L14,8.99999998 C13.45,8.99999998 13,8.54999999 13,7.99999998 C13,7.44999998 13.45,6.99999998 14,6.99999998 L14,6.99999998 Z',
      id: 'CommunicationReadMoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'read_more',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationReadMoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationReadMoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationReadMoreIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationReadMoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
