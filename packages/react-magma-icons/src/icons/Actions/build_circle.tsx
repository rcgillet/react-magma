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
  title: ['build_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M16.54,15.85 L15.85,16.54 C15.46,16.93 14.83,16.93 14.44,16.54 L11.39,13.49 C10.17,13.92 8.74999999,13.66 7.76999998,12.68 C6.65999998,11.57 6.46999998,9.88999999 7.17999998,8.57999999 L9.52999999,10.93 L10.94,9.51999999 L8.57999999,7.16999998 C9.89999999,6.45999998 11.57,6.64999998 12.68,7.75999998 C13.66,8.73999999 13.92,10.16 13.49,11.38 L16.54,14.43 C16.93,14.82 16.93,15.46 16.54,15.85 Z',
      id: 'ActionsBuildCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'build_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsBuildCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsBuildCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsBuildCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsBuildCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
