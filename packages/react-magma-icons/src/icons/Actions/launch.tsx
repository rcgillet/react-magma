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
  title: ['launch'],
  paths: [
    {
      d:
        'M18,19 L5.99999996,19 C5.44999997,19 4.99999996,18.55 4.99999996,18 L4.99999996,5.99999996 C4.99999996,5.44999997 5.44999997,4.99999996 5.99999996,4.99999996 L11,4.99999996 C11.55,4.99999996 12,4.54999997 12,3.99999996 C12,3.44999996 11.55,2.99999996 11,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,12.45 20.55,12 20,12 C19.45,12 19,12.45 19,13 L19,18 C19,18.55 18.55,19 18,19 Z M14,3.99999996 C14,4.54999997 14.45,4.99999996 15,4.99999996 L17.59,4.99999996 L8.45999999,14.13 C8.06999998,14.52 8.06999998,15.15 8.45999999,15.54 C8.84999999,15.93 9.47999999,15.93 9.86999999,15.54 L19,6.40999998 L19,8.99999996 C19,9.54999999 19.45,9.99999996 20,9.99999996 C20.55,9.99999996 21,9.54999999 21,8.99999996 L21,2.99999996 L15,2.99999996 C14.45,2.99999996 14,3.44999996 14,3.99999996 Z',
      id: 'ActionsLaunchIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'launch',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsLaunchIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsLaunchIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsLaunchIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsLaunchIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
