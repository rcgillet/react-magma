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
  title: ['portrait'],
  paths: [
    {
      d:
        'M12,12.25 C13.24,12.25 14.25,11.24 14.25,9.99999999 C14.25,8.75999999 13.24,7.74999998 12,7.74999998 C10.76,7.74999998 9.74999999,8.75999999 9.74999999,9.99999999 C9.74999999,11.24 10.76,12.25 12,12.25 Z M16.5,16.25 C16.5,14.75 13.5,14 12,14 C10.5,14 7.49999998,14.75 7.49999998,16.25 L7.49999998,17 L16.5,17 L16.5,16.25 Z M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,18 C19,18.55 18.55,19 18,19 Z',
      id: 'ImagePortraitIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'portrait',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImagePortraitIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImagePortraitIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImagePortraitIcon-path-1',
        },
      ],
    },
  ],
};

export const ImagePortraitIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
