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
  title: ['delete_sweep'],
  paths: [
    {
      d:
        'M16,16 L18,16 C18.55,16 19,16.45 19,17 C19,17.55 18.55,18 18,18 L16,18 C15.45,18 15,17.55 15,17 C15,16.45 15.45,16 16,16 Z M16,7.99999998 L21,7.99999998 C21.55,7.99999998 22,8.44999999 22,8.99999998 C22,9.54999999 21.55,9.99999998 21,9.99999998 L16,9.99999998 C15.45,9.99999998 15,9.54999999 15,8.99999998 C15,8.44999999 15.45,7.99999998 16,7.99999998 Z M16,12 L20,12 C20.55,12 21,12.45 21,13 C21,13.55 20.55,14 20,14 L16,14 C15.45,14 15,13.55 15,13 C15,12.45 15.45,12 16,12 Z M2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L11,20 C12.1,20 13,19.1 13,18 L13,7.99999998 L2.99999996,7.99999998 L2.99999996,18 Z M13,4.99999997 L11,4.99999997 L10.29,4.28999997 C10.11,4.10999997 9.84999999,3.99999997 9.58999999,3.99999997 L6.40999998,3.99999997 C6.14999998,3.99999997 5.88999997,4.10999997 5.70999997,4.28999997 L4.99999996,4.99999997 L2.99999996,4.99999997 C2.44999996,4.99999997 1.99999996,5.44999997 1.99999996,5.99999997 C1.99999996,6.54999998 2.44999996,6.99999997 2.99999996,6.99999997 L13,6.99999997 C13.55,6.99999997 14,6.54999998 14,5.99999997 C14,5.44999997 13.55,4.99999997 13,4.99999997 Z',
      id: 'ContentDeleteSweepIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'delete_sweep',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentDeleteSweepIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentDeleteSweepIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentDeleteSweepIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentDeleteSweepIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
