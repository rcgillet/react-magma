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
  title: ['report_off'],
  paths: [
    {
      d:
        'M12,6.99999996 C12.55,6.99999996 13,7.44999998 13,7.99999996 L13,9.32999999 L20.2,16.53 L20.71,16.02 C20.9,15.83 21,15.58 21,15.31 L21,8.67999999 C21,8.40999999 20.89,8.15999998 20.71,7.96999998 L16.03,3.28999996 C15.84,3.10999996 15.58,2.99999996 15.32,2.99999996 L8.67999999,2.99999996 C8.41999999,2.99999996 8.15999998,3.10999996 7.97999998,3.28999996 L7.46999998,3.79999997 L11.16,7.48999998 C11.33,7.19999998 11.64,6.99999996 12,6.99999996 Z M2.40999996,1.57999996 L0.999999954,2.98999996 L4.63999997,6.62999998 L3.28999996,7.97999998 C3.10999996,8.15999998 2.99999995,8.41999999 2.99999995,8.67999999 L2.99999995,15.31 C2.99999995,15.58 3.10999996,15.83 3.28999996,16.02 L7.96999998,20.7 C8.15999998,20.89 8.41999999,21 8.67999999,21 L15.31,21 C15.58,21 15.83,20.89 16.02,20.71 L17.37,19.36 L21.01,23 L22.42,21.59 L2.40999996,1.57999996 Z M12,17.3 C11.28,17.3 10.7,16.72 10.7,16 C10.7,15.28 11.28,14.7 12,14.7 C12.72,14.7 13.3,15.28 13.3,16 C13.3,16.72 12.72,17.3 12,17.3 Z',
      id: 'ContentReportOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'report_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentReportOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentReportOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentReportOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentReportOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
