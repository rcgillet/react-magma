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
  title: ['accessible'],
  paths: [
    {
      d:
        'M11.75,7.02999998 C12.22,6.96999998 12.63,7.06999998 13,7.27999998 L13,7.27999998 L13.01,7.27999998 L13.01,7.27999998 L13.03,7.28999998 C13.26,7.39999998 13.47,7.54999998 13.64,7.73999998 L13.64,7.73999998 L14.93,9.16999999 C15.73,10.05 16.91,10.72 18.16,10.93 C18.64,11.01 19,11.41 19,11.9 C19,12.53 18.42,13 17.8,12.87 C16.4,12.59 15,11.88 14,11.05 L14,11.05 L14,14.5 L17,14.5 C18.1,14.5 19,15.4 19,16.5 L19,16.5 L19,21 C19,21.55 18.55,22 18,22 C17.45,22 17,21.55 17,21 L17,21 L17,17 L12,17 C10.9,17 9.99999999,16.1 9.99999999,15 L9.99999999,15 L9.99999999,9.09999999 C9.99999999,8.06999998 10.73,7.14999998 11.75,7.02999998 Z M8.99999997,12.1 L8.99999997,14.17 C7.83999998,14.59 6.99999997,15.69 6.99999997,17 C6.99999997,18.66 8.33999998,20 9.99999997,20 C11.31,20 12.42,19.16 12.83,18 L12.83,18 L14.9,18 C14.44,20.28 12.42,22 9.99999997,22 C7.23999998,22 4.99999997,19.76 4.99999997,17 C4.99999997,14.58 6.71999998,12.56 8.99999997,12.1 L8.99999997,12.1 Z M12,1.99999996 C13.1045695,1.99999996 14,2.89543046 14,3.99999996 C14,5.10456947 13.1045695,5.99999996 12,5.99999996 C10.8954305,5.99999996 9.99999999,5.10456947 9.99999999,3.99999996 C9.99999999,2.89543046 10.8954305,1.99999996 12,1.99999996 Z',
      id: 'ActionsAccessibleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'accessible',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAccessibleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAccessibleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAccessibleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAccessibleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
