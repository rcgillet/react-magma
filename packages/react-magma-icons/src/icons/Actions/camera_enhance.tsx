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
  title: ['camera_enhance'],
  paths: [
    {
      d:
        'M20,4.99999996 L16.83,4.99999996 L15.59,3.64999997 C15.22,3.23999996 14.68,2.99999996 14.12,2.99999996 L9.87999999,2.99999996 C9.31999999,2.99999996 8.77999999,3.23999996 8.39999998,3.64999997 L7.16999998,4.99999996 L3.99999996,4.99999996 C2.89999996,4.99999996 1.99999996,5.89999997 1.99999996,6.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L20,21 C21.1,21 22,20.1 22,19 L22,6.99999996 C22,5.89999997 21.1,4.99999996 20,4.99999996 Z M12,18 C9.23999999,18 6.99999998,15.76 6.99999998,13 C6.99999998,10.24 9.23999999,7.99999998 12,7.99999998 C14.76,7.99999998 17,10.24 17,13 C17,15.76 14.76,18 12,18 Z M12,8.99999999 L10.75,11.75 L7.99999998,13 L10.75,14.25 L12,17 L13.25,14.25 L16,13 L13.25,11.75 L12,8.99999999 Z',
      id: 'ActionsCameraEnhanceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'camera_enhance',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCameraEnhanceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCameraEnhanceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCameraEnhanceIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCameraEnhanceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
