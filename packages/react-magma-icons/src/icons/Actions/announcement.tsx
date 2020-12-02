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
  title: ['announcement'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M12,11 C11.45,11 11,10.55 11,9.99999997 L11,5.99999997 C11,5.44999997 11.45,4.99999997 12,4.99999997 C12.55,4.99999997 13,5.44999997 13,5.99999997 L13,9.99999997 C13,10.55 12.55,11 12,11 Z M13,15 L11,15 L11,13 L13,13 L13,15 Z',
      id: 'ActionsAnnouncementIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'announcement',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAnnouncementIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAnnouncementIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAnnouncementIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAnnouncementIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
