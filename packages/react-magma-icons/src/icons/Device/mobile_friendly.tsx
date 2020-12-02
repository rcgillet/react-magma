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
  title: ['mobile_friendly'],
  paths: [
    {
      d:
        'M19,0.999999954 L8.99999998,0.999999954 C7.89999998,0.999999954 6.99999998,1.89999996 6.99999998,2.99999995 L6.99999998,4.99999995 C6.99999998,5.54999997 7.44999998,5.99999995 7.99999998,5.99999995 C8.54999999,5.99999995 8.99999998,5.54999997 8.99999998,4.99999995 L8.99999998,3.99999995 L19,3.99999995 L19,20 L8.99999998,20 L8.99999998,19 C8.99999998,18.45 8.54999999,18 7.99999998,18 C7.44999998,18 6.99999998,18.45 6.99999998,19 L6.99999998,21 C6.99999998,22.1 7.89999998,23 8.99999998,23 L19,23 C20.1,23 21,22.1 21,21 L21,2.99999995 C21,1.89999996 20.1,0.999999954 19,0.999999954 Z M7.00999998,13.47 L5.08999997,11.55 C4.73999997,11.2 4.16999997,11.2 3.81999997,11.55 C3.46999996,11.9 3.46999996,12.47 3.81999997,12.82 L6.28999998,15.29 C6.67999998,15.68 7.30999998,15.68 7.69999998,15.29 L13.55,9.43999999 C13.9,9.08999999 13.9,8.51999999 13.55,8.16999998 C13.2,7.81999998 12.63,7.81999998 12.28,8.16999998 L7.00999998,13.47 L7.00999998,13.47 Z',
      id: 'DeviceMobileFriendlyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'mobile_friendly',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceMobileFriendlyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceMobileFriendlyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceMobileFriendlyIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceMobileFriendlyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
