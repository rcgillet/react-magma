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
  title: ['perm_camera_mic'],
  paths: [
    {
      d:
        'M20,4.99999996 L16.83,4.99999996 L15.59,3.64999997 C15.22,3.23999996 14.68,2.99999996 14.12,2.99999996 L9.87999999,2.99999996 C9.31999999,2.99999996 8.77999999,3.23999996 8.39999998,3.64999997 L7.16999998,4.99999996 L3.99999996,4.99999996 C2.89999996,4.99999996 1.99999996,5.89999997 1.99999996,6.99999996 L1.99999996,19 C1.99999996,20.1 2.89999996,21 3.99999996,21 L11,21 L11,18.91 C8.54999999,18.49 6.58999998,16.59 6.10999998,14.16 C5.98999997,13.55 6.48999998,13 7.09999998,13 C7.58999998,13 7.97999998,13.35 8.07999998,13.83 C8.46999999,15.64 10.07,17 12,17 C13.93,17 15.53,15.64 15.91,13.83 C16.01,13.35 16.41,13 16.89,13 C17.5,13 18,13.55 17.88,14.16 C17.4,16.59 15.44,18.5 12.99,18.91 L12.99,21 L19.99,21 C21.09,21 21.9900826,20.1 21.9900826,19 L21.9900826,6.99999996 C22,5.89999997 21.1,4.99999996 20,4.99999996 Z M14,13 C14,14.1 13.1,15 12,15 C10.9,15 9.99999999,14.1 9.99999999,13 L9.99999999,8.99999998 C9.99999999,7.89999998 10.9,6.99999998 12,6.99999998 C13.1,6.99999998 14,7.89999998 14,8.99999998 L14,13 Z',
      id: 'ActionsPermCameraMicIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_camera_mic',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermCameraMicIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermCameraMicIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermCameraMicIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermCameraMicIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
