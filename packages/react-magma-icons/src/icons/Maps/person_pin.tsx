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
  title: ['person_pin'],
  paths: [
    {
      d:
        'M19,1.99999996 L4.99999996,1.99999996 C3.88999997,1.99999996 2.99999996,2.89999996 2.99999996,3.99999996 L2.99999996,18 C2.99999996,19.1 3.89999997,20 4.99999996,20 L8.99999996,20 L11.29,22.29 C11.68,22.68 12.31,22.68 12.7,22.29 L15,20 L19,20 C20.1,20 21,19.1 21,18 L21,3.99999996 C21,2.89999996 20.1,1.99999996 19,1.99999996 Z M12,5.29999997 C13.49,5.29999997 14.7,6.50999998 14.7,7.99999998 C14.7,9.48999999 13.49,10.7 12,10.7 C10.51,10.7 9.29999999,9.48999999 9.29999999,7.99999998 C9.29999999,6.50999998 10.51,5.29999997 12,5.29999997 Z M18,16 L5.99999997,16 L5.99999997,15.1 C5.99999997,13.1 9.99999997,12 12,12 C14,12 18,13.1 18,15.1 L18,16 Z',
      id: 'MapsPersonPinIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'person_pin',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsPersonPinIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsPersonPinIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsPersonPinIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsPersonPinIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
