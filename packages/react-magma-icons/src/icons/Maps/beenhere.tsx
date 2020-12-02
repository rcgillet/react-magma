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
  title: ['beenhere'],
  paths: [
    {
      d:
        'M19,0.999999954 L4.99999996,0.999999954 C3.89999997,0.999999954 3.00999996,1.89999996 3.00999996,2.99999995 L2.99999996,15.93 C2.99999996,16.62 3.34999996,17.23 3.87999997,17.59 L11.45,22.63 C11.79,22.85 12.22,22.85 12.56,22.63 L20.12,17.59 C20.65,17.23 21,16.62 21,15.93 L21,2.99999995 C21,1.89999996 20.1,0.999999954 19,0.999999954 L19,0.999999954 Z M18.3,7.69999998 L10.71,15.29 C10.32,15.68 9.68999999,15.68 9.29999999,15.29 L5.70999997,11.7 C5.31999997,11.31 5.31999997,10.68 5.70999997,10.29 C6.09999998,9.89999999 6.72999998,9.89999999 7.11999998,10.29 L9.99999999,13.17 L16.88,6.28999998 C17.27,5.89999997 17.9,5.89999997 18.29,6.28999998 C18.68,6.67999998 18.69,7.30999998 18.3,7.69999998 Z',
      id: 'MapsBeenhereIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'beenhere',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsBeenhereIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsBeenhereIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsBeenhereIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsBeenhereIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
