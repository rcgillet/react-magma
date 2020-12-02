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
  title: ['drive_eta'],
  paths: [
    {
      d:
        'M18.92,5.00999997 C18.72,4.41999997 18.16,3.99999997 17.5,3.99999997 L6.49999996,3.99999997 C5.83999997,3.99999997 5.28999997,4.41999997 5.07999997,5.00999997 L3.10999996,10.68 C3.03999996,10.89 2.99999996,11.11 2.99999996,11.34 L2.99999996,18.5 C2.99999996,19.33 3.66999997,20 4.49999996,20 C5.32999997,20 5.99999996,19.33 5.99999996,18.5 L5.99999996,18 L18,18 L18,18.5 C18,19.32 18.67,20 19.5,20 C20.32,20 21,19.33 21,18.5 L21,11.34 C21,11.12 20.96,10.89 20.89,10.68 L18.92,5.00999997 Z M6.49999997,15 C5.66999997,15 4.99999997,14.33 4.99999997,13.5 C4.99999997,12.67 5.66999997,12 6.49999997,12 C7.32999998,12 7.99999997,12.67 7.99999997,13.5 C7.99999997,14.33 7.32999998,15 6.49999997,15 Z M17.5,15 C16.67,15 16,14.33 16,13.5 C16,12.67 16.67,12 17.5,12 C18.33,12 19,12.67 19,13.5 C19,14.33 18.33,15 17.5,15 Z M4.99999997,9.99999997 L6.26999998,6.17999998 C6.40999998,5.77999997 6.78999998,5.49999997 7.21999998,5.49999997 L16.78,5.49999997 C17.21,5.49999997 17.59,5.77999997 17.73,6.17999998 L19,9.99999997 L4.99999997,9.99999997 Z',
      id: 'NotificationsDriveEtaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'drive_eta',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsDriveEtaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsDriveEtaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsDriveEtaIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsDriveEtaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
