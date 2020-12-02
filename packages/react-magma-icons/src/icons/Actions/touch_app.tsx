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
  title: ['touch_app'],
  paths: [
    {
      d:
        'M8.78999998,9.23999999 L8.78999998,5.49999995 C8.78999998,4.11999997 9.90999999,2.99999995 11.29,2.99999995 C12.67,2.99999995 13.79,4.11999997 13.79,5.49999995 L13.79,9.23999999 C15,8.42999999 15.79,7.05999998 15.79,5.49999995 C15.79,3.00999996 13.78,0.999999954 11.29,0.999999954 C8.79999999,0.999999954 6.78999998,3.00999996 6.78999998,5.49999995 C6.78999998,7.05999998 7.57999998,8.42999999 8.78999998,9.23999999 Z M14.29,11.71 C14.01,11.57 13.71,11.5 13.4,11.5 L12.79,11.5 L12.79,5.49999997 C12.79,4.66999997 12.12,3.99999997 11.29,3.99999997 C10.46,3.99999997 9.78999999,4.66999997 9.78999999,5.49999997 L9.78999999,16.24 L6.34999998,15.52 C5.97999997,15.44 5.58999997,15.56 5.31999997,15.83 C4.88999997,16.27 4.88999997,16.97 5.31999997,17.41 L9.32999999,21.42 C9.70999999,21.79 10.22,22 10.75,22 L16.85,22 C17.85,22 18.69,21.27 18.83,20.28 L19.46,15.81 C19.58,14.96 19.14,14.12 18.37,13.74 L14.29,11.71 Z',
      id: 'ActionsTouchAppIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'touch_app',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTouchAppIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTouchAppIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTouchAppIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTouchAppIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
