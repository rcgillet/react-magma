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
  title: ['offline_pin'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.49999996,1.99999996 1.99999996,6.49999996 1.99999996,12 C1.99999996,17.5 6.49999996,22 12,22 C17.5,22 22,17.5 22,12 C22,6.49999996 17.5,1.99999996 12,1.99999996 Z M16,18 L7.99999998,18 C7.44999998,18 6.99999998,17.55 6.99999998,17 C6.99999998,16.45 7.44999998,16 7.99999998,16 L16,16 C16.55,16 17,16.45 17,17 C17,17.55 16.55,18 16,18 Z M9.58999999,13.29 L7.69999998,11.4 C7.30999998,11.01 7.30999998,10.39 7.69999998,9.99999999 C8.08999998,9.60999999 8.70999999,9.60999999 9.09999999,9.99999999 L10.3,11.2 L14.9,6.59999998 C15.29,6.20999998 15.91,6.20999998 16.3,6.59999998 C16.69,6.98999998 16.69,7.60999998 16.3,7.99999998 L11.01,13.29 C10.62,13.68 9.97999999,13.68 9.58999999,13.29 Z',
      id: 'ActionsOfflinePinIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'offline_pin',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsOfflinePinIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsOfflinePinIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsOfflinePinIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsOfflinePinIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
