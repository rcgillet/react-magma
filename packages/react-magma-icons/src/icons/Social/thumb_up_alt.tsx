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
  title: ['thumb_up_alt'],
  paths: [
    {
      d:
        'M13.12,2.05999996 L7.57999998,7.59999998 C7.20999998,7.96999998 6.99999998,8.47999999 6.99999998,9.00999999 L6.99999998,19 C6.99999998,20.1 7.89999998,21 8.99999998,21 L18,21 C18.8,21 19.52,20.52 19.84,19.79 L23.1,12.18 C23.94,10.2 22.49,7.99999998 20.34,7.99999998 L14.69,7.99999998 L15.64,3.41999996 C15.74,2.91999996 15.59,2.40999996 15.23,2.04999996 C14.64,1.46999996 13.7,1.46999996 13.12,2.05999996 Z M2.99999995,21 C4.09999997,21 4.99999995,20.1 4.99999995,19 L4.99999995,11 C4.99999995,9.89999999 4.09999997,8.99999999 2.99999995,8.99999999 C1.89999996,8.99999999 0.999999954,9.89999999 0.999999954,11 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 Z',
      id: 'SocialThumbUpAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'thumb_up_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialThumbUpAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialThumbUpAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialThumbUpAltIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialThumbUpAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
