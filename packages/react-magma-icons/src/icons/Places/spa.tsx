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
  title: ['spa'],
  paths: [
    {
      d:
        'M15.49,9.62999999 C15.33,7.20999998 14.46,4.83999997 12.85,2.86999996 C12.44,2.36999996 11.69,2.36999996 11.28,2.86999996 C9.62999999,4.84999997 8.70999999,7.21999998 8.50999999,9.62999999 C9.78999999,10.31 10.97,11.19 12,12.26 C13.03,11.2 14.21,10.32 15.49,9.62999999 L15.49,9.62999999 Z M8.98999999,12.28 C8.84999999,12.18 8.68999999,12.09 8.53999999,11.99 C8.68999999,12.1 8.84999999,12.18 8.98999999,12.28 Z M15.41,12.03 C15.28,12.12 15.14,12.19 15.01,12.29 C15.14,12.19 15.28,12.12 15.41,12.03 Z M12,15.45 C10.05,12.48 6.85999998,10.42 3.16999996,10.06 C2.52999996,9.99999999 1.99999996,10.53 2.05999996,11.17 C2.50999996,15.97 5.70999997,19.95 10.04,21.5 C10.67,21.73 11.33,21.9 12.01,22.01 C12.69,21.89 13.34,21.72 13.98,21.5 C18.31,19.95 21.51,15.98 21.96,11.17 C22.02,10.53 21.48,9.99999999 20.85,10.06 C17.14,10.42 13.95,12.48 12,15.45 Z',
      id: 'PlacesSpaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'spa',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesSpaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesSpaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesSpaIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesSpaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
