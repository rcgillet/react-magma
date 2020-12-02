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
  title: ['help_center'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M12.01,18 C11.31,18 10.75,17.44 10.75,16.74 C10.75,16.03 11.31,15.49 12.01,15.49 C12.72,15.49 13.26,16.03 13.26,16.74 C13.25,17.43 12.72,18 12.01,18 Z M15.02,10.6 C14.26,11.71 13.54,12.06 13.15,12.77 C13.05,12.95 12.99,13.09 12.96,13.4 C12.91,13.85 12.51,14.18 12.06,14.18 L12,14.18 C11.48,14.18 11.07,13.74 11.12,13.22 C11.15,12.88 11.23,12.53 11.42,12.19 C11.91,11.32 12.84,10.8 13.38,10.03 C13.95,9.21999999 13.63,7.69999998 12.01,7.69999998 C11.3,7.69999998 10.83,8.05999998 10.54,8.48999999 C10.29,8.84999999 9.84999999,9.01999999 9.43999999,8.84999999 L9.43999999,8.84999999 C8.90999999,8.63999999 8.71999999,7.99999998 9.03999999,7.53999998 C9.64999999,6.64999998 10.67,5.99999998 11.99,5.99999998 C13.47,5.99999998 14.48,6.66999998 15,7.51999998 C15.44,8.23999998 15.7,9.58999999 15.02,10.6 Z',
      id: 'ActionsHelpCenterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'help_center',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHelpCenterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHelpCenterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHelpCenterIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHelpCenterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
