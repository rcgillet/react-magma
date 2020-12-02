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
  title: ['add_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M16,13 L13,13 L13,16 C13,16.55 12.55,17 12,17 C11.45,17 11,16.55 11,16 L11,13 L7.99999998,13 C7.44999998,13 6.99999998,12.55 6.99999998,12 C6.99999998,11.45 7.44999998,11 7.99999998,11 L11,11 L11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 L13,11 L16,11 C16.55,11 17,11.45 17,12 C17,12.55 16.55,13 16,13 Z',
      id: 'ContentAddCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'add_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentAddCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentAddCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentAddCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentAddCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
