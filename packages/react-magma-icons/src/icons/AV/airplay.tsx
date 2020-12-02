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
  title: ['airplay'],
  paths: [
    {
      d:
        'M8.40999999,22 L15.58,22 C16.47,22 16.92,20.92 16.29,20.29 L12.7,16.7 C12.31,16.31 11.68,16.31 11.29,16.7 L7.69999998,20.29 C7.07999998,20.92 7.51999998,22 8.40999999,22 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,17 C0.999999954,18.1 1.89999996,19 2.99999995,19 L5.99999995,19 C6.54999998,19 6.99999995,18.55 6.99999995,18 C6.99999995,17.45 6.54999998,17 5.99999995,17 L3.99999995,17 C3.44999996,17 2.99999995,16.55 2.99999995,16 L2.99999995,5.99999996 C2.99999995,5.44999997 3.44999996,4.99999996 3.99999995,4.99999996 L20,4.99999996 C20.55,4.99999996 21,5.44999997 21,5.99999996 L21,16 C21,16.55 20.55,17 20,17 L18,17 C17.45,17 17,17.45 17,18 C17,18.55 17.45,19 18,19 L21,19 C22.1,19 23,18.1 23,17 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z',
      id: 'AVAirplayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airplay',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVAirplayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVAirplayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVAirplayIcon-path-1',
        },
      ],
    },
  ],
};

export const AVAirplayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
