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
  title: ['assignment_return'],
  paths: [
    {
      d:
        'M19,2.99999995 L14.82,2.99999995 C14.4,1.83999996 13.3,0.999999954 12,0.999999954 C10.7,0.999999954 9.59999999,1.83999996 9.17999999,2.99999995 L4.99999996,2.99999995 C3.89999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 C13,4.54999997 12.55,4.99999996 12,4.99999996 C11.45,4.99999996 11,4.54999997 11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 Z M16,15 L12,15 L12,18 L7.34999998,13.35 C7.14999998,13.15 7.14999998,12.84 7.34999998,12.64 L12,7.99999998 L12,11 L16,11 L16,15 Z',
      id: 'ActionsAssignmentReturnIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assignment_return',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAssignmentReturnIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAssignmentReturnIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAssignmentReturnIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAssignmentReturnIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
