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
  title: ['save_alt'],
  paths: [
    {
      d:
        'M19,13 L19,18 C19,18.55 18.55,19 18,19 L5.99999996,19 C5.44999997,19 4.99999996,18.55 4.99999996,18 L4.99999996,13 C4.99999996,12.45 4.54999997,12 3.99999996,12 C3.44999996,12 2.99999996,12.45 2.99999996,13 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,12.45 20.55,12 20,12 C19.45,12 19,12.45 19,13 Z M13,12.67 L14.88,10.79 C15.27,10.4 15.9,10.4 16.29,10.79 C16.68,11.18 16.68,11.81 16.29,12.2 L12.7,15.79 C12.31,16.18 11.68,16.18 11.29,15.79 L7.69999998,12.2 C7.30999998,11.81 7.30999998,11.18 7.69999998,10.79 C8.08999998,10.4 8.71999999,10.4 9.10999999,10.79 L11,12.67 L11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 L13,12.67 Z',
      id: 'ContentSaveAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'save_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentSaveAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentSaveAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentSaveAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentSaveAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
