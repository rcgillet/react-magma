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
  title: ['explore'],
  paths: [
    {
      d:
        'M12,10.9 C11.39,10.9 10.9,11.39 10.9,12 C10.9,12.61 11.39,13.1 12,13.1 C12.61,13.1 13.1,12.61 13.1,12 C13.1,11.39 12.61,10.9 12,10.9 Z M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M14.19,14.19 L5.99999998,18 L9.80999999,9.80999999 L18,5.99999998 L14.19,14.19 Z',
      id: 'ActionsExploreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'explore',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsExploreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsExploreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsExploreIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsExploreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
