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
  title: ['stay_current_landscape'],
  paths: [
    {
      d:
        'M1.00999995,6.99999997 L0.999999954,17 C0.999999954,18.1 1.89999996,19 2.99999995,19 L21,19 C22.1,19 23,18.1 23,17 L23,6.99999997 C23,5.89999997 22.1,4.99999997 21,4.99999997 L2.99999995,4.99999997 C1.89999996,4.99999997 1.00999995,5.89999997 1.00999995,6.99999997 Z M19,6.99999998 L19,17 L4.99999997,17 L4.99999997,6.99999998 L19,6.99999998 Z',
      id: 'CommunicationStayCurrentLandscapeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'stay_current_landscape',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationStayCurrentLandscapeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationStayCurrentLandscapeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationStayCurrentLandscapeIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationStayCurrentLandscapeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
