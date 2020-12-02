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
  title: ['timelapse'],
  paths: [
    {
      d:
        'M16.24,7.75999998 C15.07,6.58999998 13.54,5.99999998 12,5.99999998 L12,12 L7.75999998,16.24 C10.1,18.58 13.9,18.58 16.25,16.24 C18.59,13.9 18.59,10.1 16.24,7.75999998 Z M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,20 C7.57999998,20 3.99999997,16.42 3.99999997,12 C3.99999997,7.57999998 7.57999998,3.99999997 12,3.99999997 C16.42,3.99999997 20,7.57999998 20,12 C20,16.42 16.42,20 12,20 Z',
      id: 'ImageTimelapseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'timelapse',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTimelapseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTimelapseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTimelapseIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTimelapseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
