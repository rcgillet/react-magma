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
  title: ['donut_large'],
  paths: [
    {
      d:
        'M14.07,5.31999997 C16.26,5.99999997 18,7.73999998 18.68,9.92999999 C18.87,10.56 19.44,11 20.09,11 L20.13,11 C21.13,11 21.85,10.04 21.56,9.08999999 C20.59,5.90999997 18.08,3.39999996 14.9,2.42999996 C13.96,2.13999996 13,2.85999996 13,3.85999997 L13,3.89999997 C13,4.55999997 13.44,5.12999997 14.07,5.31999997 L14.07,5.31999997 Z M18.68,14.07 C18,16.27 16.26,18 14.07,18.68 C13.44,18.87 13,19.44 13,20.09 L13,20.13 C13,21.13 13.96,21.85 14.91,21.56 C18.09,20.59 20.6,18.08 21.57,14.9 C21.86,13.95 21.14,12.99 20.15,12.99 L20.1,12.99 C19.44,13 18.87,13.44 18.68,14.07 Z M11,20.11 C11,19.44 10.55,18.87 9.90999999,18.67 C7.06999998,17.78 4.99999996,15.13 4.99999996,12 C4.99999996,8.86999999 7.06999998,6.21999998 9.90999999,5.32999997 C10.55,5.12999997 11,4.55999997 11,3.88999997 L11,3.87999997 C11,2.87999996 10.03,2.13999996 9.06999999,2.43999996 C4.97999997,3.68999997 1.99999996,7.49999998 1.99999996,12 C1.99999996,16.5 4.97999997,20.31 9.06999999,21.56 C10.03,21.86 11,21.12 11,20.11 L11,20.11 Z',
      id: 'ActionsDonutLargeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'donut_large',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDonutLargeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDonutLargeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDonutLargeIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDonutLargeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
