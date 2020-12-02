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
  title: ['face'],
  paths: [
    {
      d:
        'M8.99999999,11.75 C8.30999998,11.75 7.74999998,12.31 7.74999998,13 C7.74999998,13.69 8.30999998,14.25 8.99999999,14.25 C9.68999999,14.25 10.25,13.69 10.25,13 C10.25,12.31 9.68999999,11.75 8.99999999,11.75 Z M15,11.75 C14.31,11.75 13.75,12.31 13.75,13 C13.75,13.69 14.31,14.25 15,14.25 C15.69,14.25 16.25,13.69 16.25,13 C16.25,12.31 15.69,11.75 15,11.75 Z M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,11.71 4.01999997,11.42 4.04999997,11.14 C6.40999998,10.09 8.27999998,8.15999998 9.25999999,5.76999997 C11.07,8.32999998 14.05,9.99999999 17.42,9.99999999 C18.2,9.99999999 18.95,9.90999999 19.67,9.73999999 C19.88,10.45 20,11.21 20,12 C20,16.41 16.41,20 12,20 Z',
      id: 'ActionsFaceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'face',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFaceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFaceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFaceIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFaceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
