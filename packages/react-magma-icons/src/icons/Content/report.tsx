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
  title: ['report'],
  paths: [
    {
      d:
        'M15.32,2.99999996 L8.67999999,2.99999996 C8.41999999,2.99999996 8.15999998,3.10999996 7.97999998,3.28999996 L3.28999996,7.97999998 C3.10999996,8.15999998 2.99999996,8.41999999 2.99999996,8.67999999 L2.99999996,15.31 C2.99999996,15.58 3.10999996,15.83 3.28999996,16.02 L7.96999998,20.7 C8.15999998,20.89 8.41999999,21 8.67999999,21 L15.31,21 C15.58,21 15.83,20.89 16.02,20.71 L20.7,16.03 C20.89,15.84 20.99,15.59 20.99,15.32 L20.99,8.67999999 C20.99,8.40999999 20.88,8.15999998 20.7,7.96999998 L16.02,3.28999996 C15.84,3.10999996 15.58,2.99999996 15.32,2.99999996 Z M12,17.3 C11.28,17.3 10.7,16.72 10.7,16 C10.7,15.28 11.28,14.7 12,14.7 C12.72,14.7 13.3,15.28 13.3,16 C13.3,16.72 12.72,17.3 12,17.3 Z M12,13 C11.45,13 11,12.55 11,12 L11,7.99999998 C11,7.44999998 11.45,6.99999998 12,6.99999998 C12.55,6.99999998 13,7.44999998 13,7.99999998 L13,12 C13,12.55 12.55,13 12,13 Z',
      id: 'ContentReportIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'report',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentReportIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentReportIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentReportIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentReportIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
