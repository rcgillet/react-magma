import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '23px',
  height: '24px',
  viewBox: '0 0 23 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['filter_alt'],
  paths: [
    {
      d:
        'M4.19532663,6.48615385 C6.3368651,9.23692309 9.50301896,13.3076923 9.50301896,13.3076923 L9.50301896,17.923077 C9.50301896,18.9384616 10.3337882,19.7692308 11.3491728,19.7692308 L11.3491728,19.7692308 C12.3645574,19.7692308 13.1953267,18.9384616 13.1953267,17.923077 L13.1953267,13.3076923 C13.1953267,13.3076923 16.3614805,9.23692309 18.503019,6.48615385 C18.9737882,5.87692308 18.5399421,5 17.7645575,5 L4.9245574,5 C4.15840355,5 3.7245574,5.87692308 4.19532663,6.48615385 Z',
      id: 'ActionsFilterAltIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'filter_alt',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFilterAltIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFilterAltIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFilterAltIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFilterAltIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
