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
  title: ['contacts'],
  paths: [
    {
      d:
        'M19,-5.00003736e-08 L4.99999997,-5.00003736e-08 C4.44999997,-5.00003736e-08 3.99999997,0.449999952 3.99999997,0.99999995 C3.99999997,1.54999996 4.44999997,1.99999995 4.99999997,1.99999995 L19,1.99999995 C19.55,1.99999995 20,1.54999996 20,0.99999995 C20,0.449999952 19.55,-5.00003736e-08 19,-5.00003736e-08 Z M4.99999997,24 L19,24 C19.55,24 20,23.55 20,23 C20,22.45 19.55,22 19,22 L4.99999997,22 C4.44999997,22 3.99999997,22.45 3.99999997,23 C3.99999997,23.55 4.44999997,24 4.99999997,24 Z M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M12,6.74999998 C13.24,6.74999998 14.25,7.75999998 14.25,8.99999999 C14.25,10.24 13.24,11.25 12,11.25 C10.76,11.25 9.74999999,10.24 9.74999999,8.99999999 C9.74999999,7.75999998 10.76,6.74999998 12,6.74999998 Z M17,17 L6.99999998,17 L6.99999998,15.5 C6.99999998,13.83 10.33,13 12,13 C13.67,13 17,13.83 17,15.5 L17,17 Z',
      id: 'CommunicationContactsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'contacts',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationContactsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationContactsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationContactsIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationContactsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
