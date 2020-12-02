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
  title: ['low_priority'],
  paths: [
    {
      d:
        'M15,4.99999997 L21,4.99999997 C21.55,4.99999997 22,5.44999997 22,5.99999997 C22,6.54999998 21.55,6.99999997 21,6.99999997 L15,6.99999997 C14.45,6.99999997 14,6.54999998 14,5.99999997 C14,5.44999997 14.45,4.99999997 15,4.99999997 Z M15,10.5 L21,10.5 C21.55,10.5 22,10.95 22,11.5 C22,12.05 21.55,12.5 21,12.5 L15,12.5 C14.45,12.5 14,12.05 14,11.5 C14,10.95 14.45,10.5 15,10.5 Z M15,16 L21,16 C21.55,16 22,16.45 22,17 C22,17.55 21.55,18 21,18 L15,18 C14.45,18 14,17.55 14,17 C14,16.45 14.45,16 15,16 Z M9.84999999,19.15 L11.64,17.36 C11.84,17.16 11.84,16.85 11.64,16.65 L9.84999999,14.86 C9.53999999,14.54 8.99999999,14.76 8.99999999,15.21 L8.99999999,18.8 C8.99999999,19.24 9.53999999,19.46 9.84999999,19.15 L9.84999999,19.15 Z M8.99999999,16 L8.69999999,16 C6.34999998,16 4.24999997,14.29 4.01999997,11.95 C3.75999997,9.26999999 5.86999997,6.99999997 8.49999999,6.99999997 L11,6.99999997 C11.55,6.99999997 12,6.54999998 12,5.99999997 C12,5.44999997 11.55,4.99999997 11,4.99999997 L8.49999999,4.99999997 C4.63999997,4.99999997 1.53999996,8.39999998 2.05999996,12.36 C2.47999996,15.64 5.42999997,18 8.72999999,18 L8.99999999,18',
      id: 'ContentLowPriorityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'low_priority',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentLowPriorityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentLowPriorityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentLowPriorityIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentLowPriorityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
