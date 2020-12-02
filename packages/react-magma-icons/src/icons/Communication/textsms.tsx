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
  title: ['textsms'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 2.00999996,2.89999996 2.00999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M8.99999998,11 L6.99999998,11 L6.99999998,8.99999999 L8.99999998,8.99999999 L8.99999998,11 Z M13,11 L11,11 L11,8.99999999 L13,8.99999999 L13,11 Z M17,11 L15,11 L15,8.99999999 L17,8.99999999 L17,11 Z',
      id: 'CommunicationTextsmsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'textsms',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationTextsmsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationTextsmsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationTextsmsIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationTextsmsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
