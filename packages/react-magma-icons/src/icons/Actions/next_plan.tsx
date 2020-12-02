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
  title: ['next_plan'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M18,13.97 L13,13.97 L15.26,11.71 C14.35,10.65 13.01,9.96999999 11.5,9.96999999 C9.12999999,9.96999999 7.14999998,11.63 6.63999998,13.85 L5.67999997,13.53 C6.31999998,10.91 8.67999997,8.96999999 11.5,8.96999999 C13.28,8.96999999 14.87,9.75999999 15.97,11 L18,8.96999999 L18,13.97 Z',
      id: 'ActionsNextPlanIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'next_plan',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsNextPlanIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsNextPlanIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsNextPlanIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsNextPlanIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
