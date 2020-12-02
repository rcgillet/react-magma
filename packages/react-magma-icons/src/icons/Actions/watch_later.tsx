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
  title: ['watch_later'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.49999996,1.99999996 1.99999996,6.49999996 1.99999996,12 C1.99999996,17.5 6.49999996,22 12,22 C17.5,22 22,17.5 22,12 C22,6.49999996 17.5,1.99999996 12,1.99999996 Z M15.55,15.8 L11.47,13.29 C11.17,13.11 10.99,12.79 10.99,12.44 L10.99,7.74999998 C11,7.33999998 11.34,6.99999998 11.75,6.99999998 C12.16,6.99999998 12.5,7.33999998 12.5,7.74999998 L12.5,12.2 L16.34,14.51 C16.7,14.73 16.82,15.2 16.6,15.56 C16.38,15.91 15.91,16.02 15.55,15.8 Z',
      id: 'ActionsWatchLaterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'watch_later',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsWatchLaterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsWatchLaterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsWatchLaterIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsWatchLaterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
