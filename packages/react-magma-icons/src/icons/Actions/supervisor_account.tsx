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
  title: ['supervisor_account'],
  paths: [
    {
      d:
        'M16.5,12 C17.88,12 18.99,10.88 18.99,9.49999998 C18.99,8.11999998 17.88,6.99999998 16.5,6.99999998 C15.12,6.99999998 14,8.11999998 14,9.49999998 C14,10.88 15.12,12 16.5,12 Z M8.99999998,11 C10.66,11 11.99,9.65999999 11.99,7.99999997 C11.99,6.33999998 10.66,4.99999997 8.99999998,4.99999997 C7.33999998,4.99999997 5.99999998,6.33999998 5.99999998,7.99999997 C5.99999998,9.65999999 7.33999998,11 8.99999998,11 Z M16.5,14 C14.67,14 11,14.92 11,16.75 L11,18 C11,18.55 11.45,19 12,19 L21,19 C21.55,19 22,18.55 22,18 L22,16.75 C22,14.92 18.33,14 16.5,14 Z M8.99999996,13 C6.66999998,13 1.99999996,14.17 1.99999996,16.5 L1.99999996,18 C1.99999996,18.55 2.44999996,19 2.99999996,19 L8.99999996,19 L8.99999996,16.75 C8.99999996,15.9 9.32999999,14.41 11.37,13.28 C10.5,13.1 9.65999999,13 8.99999996,13 Z',
      id: 'ActionsSupervisorAccountIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'supervisor_account',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSupervisorAccountIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSupervisorAccountIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSupervisorAccountIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSupervisorAccountIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
