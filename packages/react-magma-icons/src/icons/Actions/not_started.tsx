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
  title: ['not_started'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M11,15 C11,15.55 10.55,16 9.99999999,16 C9.44999999,16 8.99999999,15.55 8.99999999,15 L8.99999999,8.99999998 C8.99999999,8.44999999 9.44999999,7.99999998 9.99999999,7.99999998 C10.55,7.99999998 11,8.44999999 11,8.99999998 L11,15 Z M16.02,12.78 L13.62,14.7 C12.97,15.22 12,14.76 12,13.92 L12,10.08 C12,9.23999999 12.97,8.77999999 13.62,9.29999999 L16.02,11.22 C16.52,11.62 16.52,12.38 16.02,12.78 Z',
      id: 'ActionsNotStartedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'not_started',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsNotStartedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsNotStartedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsNotStartedIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsNotStartedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
