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
  title: ['visibility'],
  paths: [
    {
      d:
        'M12,3.99999997 C6.99999995,3.99999997 2.72999996,7.10999998 0.999999954,11.5 C2.72999996,15.89 6.99999995,19 12,19 C17,19 21.27,15.89 23,11.5 C21.27,7.10999998 17,3.99999997 12,3.99999997 Z M12,16.5 C9.23999999,16.5 6.99999998,14.26 6.99999998,11.5 C6.99999998,8.73999999 9.23999999,6.49999998 12,6.49999998 C14.76,6.49999998 17,8.73999999 17,11.5 C17,14.26 14.76,16.5 12,16.5 Z M12,8.49999999 C10.34,8.49999999 8.99999999,9.83999999 8.99999999,11.5 C8.99999999,13.16 10.34,14.5 12,14.5 C13.66,14.5 15,13.16 15,11.5 C15,9.83999999 13.66,8.49999999 12,8.49999999 Z',
      id: 'ActionsVisibilityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'visibility',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsVisibilityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsVisibilityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsVisibilityIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsVisibilityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
