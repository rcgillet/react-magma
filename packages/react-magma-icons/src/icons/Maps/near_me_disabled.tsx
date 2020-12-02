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
  title: ['near_me_disabled'],
  paths: [
    {
      d:
        'M12,6.33999998 L18.95,3.75999997 C19.75,3.45999996 20.53,4.23999997 20.24,5.04999997 L17.66,12 L12,6.33999998 Z M21.9,19.07 L4.92999997,2.09999996 C4.53999997,1.70999996 3.90999997,1.70999996 3.51999996,2.09999996 C3.12999996,2.48999996 3.12999996,3.11999996 3.51999996,3.50999996 L7.87999998,7.86999998 L3.67999997,9.42999999 C3.26999996,9.58999999 2.99999996,9.96999999 2.99999996,10.4 C2.99999996,10.82 3.25999996,11.2 3.64999997,11.36 L10.07,13.93 L12.64,20.35 C12.8,20.74 13.18,21 13.6,21 C14.03,21 14.42,20.73 14.57,20.33 L16.13,16.13 L20.49,20.49 C20.88,20.88 21.51,20.88 21.9,20.49 C22.29,20.09 22.29,19.46 21.9,19.07 Z',
      id: 'MapsNearMeDisabledIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'near_me_disabled',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsNearMeDisabledIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsNearMeDisabledIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsNearMeDisabledIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsNearMeDisabledIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
