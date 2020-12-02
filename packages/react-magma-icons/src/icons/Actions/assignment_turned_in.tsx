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
  title: ['assignment_turned_in'],
  paths: [
    {
      d:
        'M19,2.99999995 L14.82,2.99999995 C14.4,1.83999996 13.3,0.999999954 12,0.999999954 C10.7,0.999999954 9.59999999,1.83999996 9.17999999,2.99999995 L4.99999996,2.99999995 C3.89999997,2.99999995 2.99999996,3.89999997 2.99999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 Z M12,2.99999996 C12.55,2.99999996 13,3.44999996 13,3.99999996 C13,4.54999997 12.55,4.99999996 12,4.99999996 C11.45,4.99999996 11,4.54999997 11,3.99999996 C11,3.44999996 11.45,2.99999996 12,2.99999996 Z M9.28999999,16.29 L6.69999998,13.7 C6.30999998,13.31 6.30999998,12.68 6.69999998,12.29 C7.08999998,11.9 7.71999998,11.9 8.10999998,12.29 L9.99999999,14.17 L15.88,8.28999998 C16.27,7.89999998 16.9,7.89999998 17.29,8.28999998 C17.68,8.67999999 17.68,9.30999999 17.29,9.69999999 L10.7,16.29 C10.32,16.68 9.67999999,16.68 9.28999999,16.29 Z',
      id: 'ActionsAssignmentTurnedInIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assignment_turned_in',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAssignmentTurnedInIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAssignmentTurnedInIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAssignmentTurnedInIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAssignmentTurnedInIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
