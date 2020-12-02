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
  title: ['straighten'],
  paths: [
    {
      d:
        'M21,5.99999998 L2.99999995,5.99999998 C1.89999996,5.99999998 0.999999954,6.89999998 0.999999954,7.99999998 L0.999999954,16 C0.999999954,17.1 1.89999996,18 2.99999995,18 L21,18 C22.1,18 23,17.1 23,16 L23,7.99999998 C23,6.89999998 22.1,5.99999998 21,5.99999998 Z M20,16 L3.99999996,16 C3.44999996,16 2.99999996,15.55 2.99999996,15 L2.99999996,8.99999998 C2.99999996,8.44999999 3.44999996,7.99999998 3.99999996,7.99999998 L4.99999996,7.99999998 L4.99999996,11 C4.99999996,11.55 5.44999997,12 5.99999996,12 C6.54999998,12 6.99999996,11.55 6.99999996,11 L6.99999996,7.99999998 L8.99999996,7.99999998 L8.99999996,11 C8.99999996,11.55 9.44999999,12 9.99999996,12 C10.55,12 11,11.55 11,11 L11,7.99999998 L13,7.99999998 L13,11 C13,11.55 13.45,12 14,12 C14.55,12 15,11.55 15,11 L15,7.99999998 L17,7.99999998 L17,11 C17,11.55 17.45,12 18,12 C18.55,12 19,11.55 19,11 L19,7.99999998 L20,7.99999998 C20.55,7.99999998 21,8.44999999 21,8.99999998 L21,15 C21,15.55 20.55,16 20,16 Z',
      id: 'ImageStraightenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'straighten',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageStraightenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageStraightenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageStraightenIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageStraightenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
