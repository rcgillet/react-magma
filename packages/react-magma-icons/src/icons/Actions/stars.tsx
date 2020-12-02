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
  title: ['stars'],
  paths: [
    {
      d:
        'M11.99,1.99999996 C6.46999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.46999998,22 11.99,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 11.99,1.99999996 Z M15.22,17.39 L12,15.45 L8.77999999,17.39 C8.39999999,17.62 7.92999998,17.28 8.02999998,16.85 L8.87999999,13.19 L6.04999998,10.74 C5.71999997,10.45 5.89999997,9.89999999 6.33999998,9.85999999 L10.08,9.53999999 L11.54,6.08999998 C11.71,5.67999997 12.29,5.67999997 12.46,6.08999998 L13.92,9.52999999 L17.66,9.84999999 C18.1,9.88999999 18.28,10.44 17.94,10.73 L15.11,13.18 L15.96,16.85 C16.06,17.28 15.6,17.62 15.22,17.39 L15.22,17.39 Z',
      id: 'ActionsStarsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'stars',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsStarsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsStarsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsStarsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsStarsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
