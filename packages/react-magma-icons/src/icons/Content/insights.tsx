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
  title: ['insights'],
  paths: [
    {
      d:
        'M21,7.99999998 C22.1,7.99999998 23,8.89999999 23,9.99999998 C23,11.45 21.56,12.26 20.49,11.93 L20.49,11.93 L16.93,15.48 C17.27,16.56 16.45,18 15,18 C13.54,18 12.73,16.55 13.07,15.48 L13.07,15.48 L10.52,12.93 C10.22,13.02 9.77999999,13.02 9.47999999,12.93 L9.47999999,12.93 L4.92999997,17.49 C5.25999997,18.56 4.44999997,20 2.99999995,20 C1.89999996,20 0.999999954,19.1 0.999999954,18 C0.999999954,16.55 2.43999996,15.74 3.50999996,16.07 L3.50999996,16.07 L8.06999998,11.52 C7.72999998,10.44 8.54999999,8.99999998 9.99999995,8.99999998 C11.46,8.99999998 12.27,10.45 11.93,11.52 L11.93,11.52 L14.48,14.07 C14.78,13.98 15.22,13.98 15.52,14.07 L15.52,14.07 L19.07,10.51 C18.74,9.43999999 19.55,7.99999998 21,7.99999998 Z M3.49999995,5.99999997 L3.99999995,7.99999997 L5.99999995,8.49999997 L3.99999995,8.99999997 L3.49999995,11 L2.99999995,8.99999997 L0.999999954,8.49999997 L2.99999995,7.99999997 L3.49999995,5.99999997 Z M15,2.99999996 L15.94,5.06999997 L18,5.99999996 L15.94,6.92999998 L15,8.99999996 L14.08,6.92999998 L12,5.99999996 L14.08,5.06999997 L15,2.99999996 Z',
      id: 'ContentInsightsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'insights',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentInsightsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentInsightsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentInsightsIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentInsightsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
