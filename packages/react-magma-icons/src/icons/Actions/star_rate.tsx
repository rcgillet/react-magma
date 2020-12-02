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
  title: ['star_rate'],
  paths: [
    {
      d:
        'M14.43,9.99999999 L12.96,5.15999997 C12.67,4.20999997 11.33,4.20999997 11.05,5.15999997 L9.56999999,9.99999999 L5.11999997,9.99999999 C4.14999997,9.99999999 3.74999997,11.25 4.53999997,11.81 L8.17999998,14.41 L6.74999998,19.02 C6.45999998,19.95 7.53999998,20.7 8.30999998,20.11 L12,17.31 L15.69,20.12 C16.46,20.71 17.54,19.96 17.25,19.03 L15.82,14.42 L19.46,11.82 C20.25,11.25 19.85,10.01 18.88,10.01 L14.43,10.01 L14.43,9.99999999 Z',
      id: 'ActionsStarRateIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'star_rate',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsStarRateIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsStarRateIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsStarRateIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsStarRateIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
