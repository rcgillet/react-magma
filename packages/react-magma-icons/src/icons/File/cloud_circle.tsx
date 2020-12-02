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
  title: ['cloud_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M16.5,16 L7.99999997,16 C6.33999998,16 4.99999997,14.66 4.99999997,13 C4.99999997,11.34 6.33999998,9.99999998 7.99999997,9.99999998 L8.13999998,9.99999998 C8.57999999,8.26999998 10.13,6.99999998 12,6.99999998 C14.21,6.99999998 16,8.78999999 16,11 L16.5,11 C17.88,11 19,12.12 19,13.5 C19,14.88 17.88,16 16.5,16 Z',
      id: 'FileCloudCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'cloud_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileCloudCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileCloudCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileCloudCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const FileCloudCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
