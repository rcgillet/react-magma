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
  title: ['assignment_ind'],
  paths: [
    {
      d:
        'M19,2.99999995 L14.82,2.99999995 C14.4,1.83999996 13.3,0.999999954 12,0.999999954 C10.7,0.999999954 9.59999999,1.83999996 9.17999999,2.99999995 L4.99999996,2.99999995 C3.89999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 C13,4.54999997 12.55,4.99999996 12,4.99999996 C11.45,4.99999996 11,4.54999997 11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 Z M12,6.99999998 C13.66,6.99999998 15,8.33999998 15,9.99999998 C15,11.66 13.66,13 12,13 C10.34,13 8.99999999,11.66 8.99999999,9.99999998 C8.99999999,8.33999998 10.34,6.99999998 12,6.99999998 Z M18,19 L5.99999998,19 L5.99999998,17.6 C5.99999998,15.6 9.99999998,14.5 12,14.5 C14,14.5 18,15.6 18,17.6 L18,19 Z',
      id: 'ActionsAssignmentIndIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assignment_ind',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAssignmentIndIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAssignmentIndIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAssignmentIndIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAssignmentIndIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
