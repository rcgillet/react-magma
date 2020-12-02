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
  title: ['phonelink_erase'],
  paths: [
    {
      d:
        'M12.5,7.69999998 C12.22,7.41999998 11.78,7.41999998 11.5,7.69999998 L7.99999998,11.2 L4.49999997,7.69999998 C4.21999997,7.41999998 3.77999997,7.41999998 3.49999996,7.69999998 C3.21999996,7.97999998 3.21999996,8.41999999 3.49999996,8.69999999 L6.99999998,12.2 L3.49999996,15.7 C3.21999996,15.98 3.21999996,16.42 3.49999996,16.7 C3.77999997,16.98 4.21999997,16.98 4.49999997,16.7 L7.99999998,13.2 L11.5,16.7 C11.78,16.98 12.22,16.98 12.5,16.7 C12.78,16.42 12.78,15.98 12.5,15.7 L8.99999999,12.2 L12.5,8.69999999 C12.78,8.41999999 12.78,7.97999998 12.5,7.69999998 Z M19,0.999999954 L8.99999998,0.999999954 C7.89999998,0.999999954 6.99999998,1.89999996 6.99999998,2.99999995 L6.99999998,4.99999995 C6.99999998,5.54999997 7.44999998,5.99999995 7.99999998,5.99999995 C8.54999999,5.99999995 8.99999998,5.54999997 8.99999998,4.99999995 L8.99999998,3.99999995 L19,3.99999995 L19,20 L8.99999998,20 L8.99999998,19 C8.99999998,18.45 8.54999999,18 7.99999998,18 C7.44999998,18 6.99999998,18.45 6.99999998,19 L6.99999998,21 C6.99999998,22.1 7.89999998,23 8.99999998,23 L19,23 C20.1,23 21,22.1 21,21 L21,2.99999995 C21,1.89999996 20.1,0.999999954 19,0.999999954 Z',
      id: 'CommunicationPhonelinkEraseIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phonelink_erase',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationPhonelinkEraseIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationPhonelinkEraseIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationPhonelinkEraseIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationPhonelinkEraseIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
