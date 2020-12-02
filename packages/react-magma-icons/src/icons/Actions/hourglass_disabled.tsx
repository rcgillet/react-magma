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
  title: ['hourglass_disabled'],
  paths: [
    {
      d:
        'M1.39999996,2.80999996 C1.78999996,2.41999996 2.41999996,2.41999996 2.80999996,2.80999996 L2.80999996,2.80999996 L21.19,21.2 C21.58,21.59 21.58,22.22 21.19,22.61 C20.8,23 20.17,23 19.78,22.61 L19.78,22.61 L17.87,20.7 C17.58,21.46 16.86,22 16,22 L16,22 L7.99999998,22 C6.89999998,22 5.99999998,21.1 5.99999998,20 L5.99999998,20 L5.99999998,16.84 C5.99999998,16.31 6.20999998,15.8 6.57999998,15.42 L6.57999998,15.42 L9.57999999,12.41 L1.38999996,4.21999997 C0.999999954,3.82999997 0.999999954,3.19999996 1.39999996,2.80999996 Z M10.84,13.66 L7.99999998,16.5 L7.99999998,19 C7.99999998,19.55 8.44999999,20 8.99999998,20 L8.99999998,20 L15,20 C15.55,20 16,19.55 16,19 L16,19 L16,18.83 L10.84,13.66 Z M16,1.99999996 C17.1,1.99999996 18,2.88999996 18,3.99999996 L18,3.99999996 L18,7.17999998 C18,7.70999998 17.79,8.21999998 17.41,8.59999999 L17.41,8.59999999 L14.41,11.59 L13.16,10.34 L16,7.49999996 L16,4.99999996 C16,4.44999997 15.55,3.99999996 15,3.99999996 L15,3.99999996 L8.99999999,3.99999996 C8.44999999,3.99999996 7.99999998,4.44999997 7.99999998,4.99999996 L7.99999998,4.99999996 L7.99999998,5.16999997 L6.12999998,3.29999996 C6.41999998,2.53999996 7.13999998,1.99999996 7.99999998,1.99999996 L7.99999998,1.99999996 Z',
      id: 'ActionsHourglassDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'hourglass_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHourglassDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHourglassDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHourglassDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHourglassDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
