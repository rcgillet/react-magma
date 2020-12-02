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
  title: ['rowing'],
  paths: [
    {
      d:
        'M4.74999997,18.25 C4.33999997,18.66 4.33999997,19.34 4.74999997,19.75 C5.15999997,20.16 5.83999997,20.16 6.24999998,19.75 L8.99999999,17 L11,17 L8.49999999,14.5 L4.74999997,18.25 Z M15,4.99999995 C16.1,4.99999995 17,4.09999997 17,2.99999995 C17,1.89999996 16.1,0.999999954 15,0.999999954 C13.9,0.999999954 13,1.89999996 13,2.99999995 C13,4.09999997 13.9,4.99999995 15,4.99999995 Z M20.29,20.3 L18.29,18.29 C18.11,18.11 17.85,18 17.58,18 L16.5,18 L10.21,11.71 C11,11.38 11.87,10.84 12.5,10.32 L12.5,12.59 L16.08,16.17 C16.65,15.62 17,14.85 17,14.01 L17,8.25999998 C17,7.01999998 15.98,5.99999998 14.74,5.99999998 L14.72,5.99999998 C14.38,5.99999998 14.05,6.08999998 13.76,6.22999998 C13.5,6.34999998 13.26,6.51999998 13.07,6.72999998 L11.67,8.27999998 C10.61,9.44999999 8.65999999,10.35 6.99999998,10.32 C6.39999998,10.32 5.91999997,10.8 5.91999997,11.4 C5.91999997,12 6.39999998,12.48 6.99999998,12.48 C7.30999998,12.48 7.60999998,12.45 7.89999998,12.41 L15.01,19.5 L15.01,20.58 C15.01,20.84 15.11,21.1 15.3,21.28 L17.29,23.29 C17.68,23.68 18.31,23.68 18.71,23.29 L20.29,21.71 C20.68,21.33 20.68,20.69 20.29,20.3 Z',
      id: 'ActionsRowingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'rowing',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsRowingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsRowingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsRowingIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsRowingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
