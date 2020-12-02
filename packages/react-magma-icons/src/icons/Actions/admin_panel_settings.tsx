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
  title: ['admin_panel_settings'],
  paths: [
    {
      d:
        'M9.69999999,3.34999996 C10.21,3.12999996 10.79,3.12999996 11.3,3.34999996 L11.3,3.34999996 L16.8,5.74999997 C17.53,6.05999998 18,6.77999998 18,7.57999998 L18,7.57999998 L18,11.09 C17.67,11.04 17.34,11 17,11 C13.69,11 11,13.69 11,17 C11,18.28 11.41,19.47 12.1,20.45 C11.58,20.68 11.05,20.87 10.5,21 C6.19999998,19.97 2.99999996,15.72 2.99999996,11.18 L2.99999996,11.18 L2.99999996,7.57999998 C2.99999996,6.78999998 3.46999996,6.06999998 4.19999997,5.74999997 L4.19999997,5.74999997 Z M17,13 C19.21,13 21,14.79 21,17 C21,19.21 19.21,21 17,21 C14.79,21 13,19.21 13,17 C13,14.79 14.79,13 17,13 Z M17,17.5 C16.27,17.5 14.81,17.86 14.76,18.58 C15.26,19.29 16.07,19.75 17,19.75 C17.93,19.75 18.74,19.29 19.24,18.58 C19.19,17.86 17.73,17.5 17,17.5 Z M17,14.38 C16.38,14.38 15.88,14.89 15.88,15.5 C15.88,16.11 16.39,16.62 17,16.62 C17.61,16.62 18.12,16.11 18.12,15.5 C18.12,14.89 17.62,14.38 17,14.38 Z',
      id: 'ActionsAdminPanelSettingsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'admin_panel_settings',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsAdminPanelSettingsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsAdminPanelSettingsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsAdminPanelSettingsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsAdminPanelSettingsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
