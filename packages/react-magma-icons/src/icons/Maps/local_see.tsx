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
  title: ['local_see'],
  paths: [
    {
      d:
        'M14.12,1.99999996 C14.68,1.99999996 15.22,2.23999996 15.59,2.64999996 L15.59,2.64999996 L16.83,3.99999996 L20,3.99999996 C21.1,3.99999996 22,4.89999997 22,5.99999996 L22,5.99999996 L22,18 C22,19.1 21.1,20 20,20 L20,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,18 L1.99999996,5.99999996 C1.99999996,4.89999997 2.89999996,3.99999996 3.99999996,3.99999996 L3.99999996,3.99999996 L7.16999998,3.99999996 L8.39999999,2.64999996 C8.77999999,2.23999996 9.31999999,1.99999996 9.87999999,1.99999996 L9.87999999,1.99999996 Z M12,6.99999998 C9.23999999,6.99999998 6.99999998,9.23999999 6.99999998,12 C6.99999998,14.76 9.23999999,17 12,17 C14.76,17 17,14.76 17,12 C17,9.23999999 14.76,6.99999998 12,6.99999998 Z M12,8.79999999 C13.7673112,8.79999999 15.2,10.2326888 15.2,12 C15.2,13.7673112 13.7673112,15.2 12,15.2 C10.2326888,15.2 8.79999999,13.7673112 8.79999999,12 C8.79999999,10.2326888 10.2326888,8.79999999 12,8.79999999 Z',
      id: 'MapsLocalSeeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_see',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalSeeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalSeeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalSeeIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalSeeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
