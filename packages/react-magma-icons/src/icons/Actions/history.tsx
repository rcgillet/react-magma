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
  title: ['history'],
  paths: [
    {
      d:
        'M13.26,2.99999996 C8.16999998,2.85999996 3.99999997,6.94999998 3.99999997,12 L2.20999996,12 C1.75999996,12 1.53999996,12.54 1.85999996,12.85 L4.64999997,15.65 C4.84999997,15.85 5.15999997,15.85 5.35999997,15.65 L8.14999998,12.85 C8.45999999,12.54 8.23999998,12 7.78999998,12 L5.99999997,12 C5.99999997,8.09999998 9.17999999,4.94999997 13.1,4.99999997 C16.82,5.04999997 19.95,8.17999998 20,11.9 C20.05,15.81 16.9,19 13,19 C11.39,19 9.89999999,18.45 8.71999999,17.52 C8.31999998,17.21 7.75999998,17.24 7.39999998,17.6 C6.97999998,18.02 7.00999998,18.73 7.47999998,19.09 C8.99999999,20.29 10.91,21 13,21 C18.05,21 22.14,16.83 22,11.74 C21.87,7.04999998 17.95,3.12999996 13.26,2.99999996 Z M12.75,7.99999998 C12.34,7.99999998 12,8.33999998 12,8.74999999 L12,12.43 C12,12.78 12.19,13.11 12.49,13.29 L15.61,15.14 C15.97,15.35 16.43,15.23 16.64,14.88 C16.85,14.52 16.73,14.06 16.38,13.85 L13.5,12.14 L13.5,8.73999999 C13.5,8.33999998 13.16,7.99999998 12.75,7.99999998 Z',
      id: 'ActionsHistoryIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'history',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHistoryIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHistoryIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHistoryIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHistoryIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
