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
  title: ['dynamic_feed'],
  paths: [
    {
      d:
        'M2.99999996,12 L3.11619894,12.0067602 C3.61198976,12.0647959 3.99999996,12.4892857 3.99999996,13 L3.99999996,13 L3.99999996,19 L12,19 C12.55,19 13,19.45 13,20 L13,20 L12.9932398,20.116199 C12.935204,20.6119898 12.5107143,21 12,21 L12,21 L3.99999996,21 C2.89999996,21 1.99999996,20.1 1.99999996,19 L1.99999996,19 L1.99999996,13 C1.99999996,12.45 2.44999996,12 2.99999996,12 L2.99999996,12 Z M6.99999998,7.99999998 L7.11619896,8.00676019 C7.61198978,8.0647959 7.99999998,8.4892857 7.99999998,8.99999998 L7.99999998,8.99999998 L7.99999998,15 L16,15 C16.55,15 17,15.45 17,16 L17,16 L16.9932398,16.116199 C16.9352041,16.6119898 16.5107143,17 16,17 L16,17 L7.99999998,17 C6.89999998,17 5.99999998,16.1 5.99999998,15 L5.99999998,15 L5.99999998,8.99999998 C5.99999998,8.44999999 6.44999998,7.99999998 6.99999998,7.99999998 L6.99999998,7.99999998 Z M20,2.99999996 C21.1,2.99999996 22,3.89999997 22,4.99999996 L22,4.99999996 L22,11 C22,12.1 21.1,13 20,13 L20,13 L12,13 C10.9,13 9.99999999,12.1 9.99999999,11 L9.99999999,11 L9.99999999,4.99999996 C9.99999999,3.89999997 10.9,2.99999996 12,2.99999996 L12,2.99999996 Z M20,6.99999998 L12,6.99999998 L12,10.5 C12,10.78 12.22,11 12.5,11 L12.5,11 L19.5,11 C19.78,11 20,10.78 20,10.5 L20,10.5 L20,6.99999998 Z',
      id: 'ContentDynamicFeedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'dynamic_feed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentDynamicFeedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentDynamicFeedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentDynamicFeedIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentDynamicFeedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
