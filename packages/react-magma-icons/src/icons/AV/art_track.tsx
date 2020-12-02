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
  title: ['art_track'],
  paths: [
    {
      d:
        'M21,13 L15,13 C14.45,13 14,12.55 14,12 C14,11.45 14.45,11 15,11 L21,11 C21.55,11 22,11.45 22,12 C22,12.55 21.55,13 21,13 Z M21,6.99999998 L15,6.99999998 C14.45,6.99999998 14,7.44999998 14,7.99999998 C14,8.54999999 14.45,8.99999998 15,8.99999998 L21,8.99999998 C21.55,8.99999998 22,8.54999999 22,7.99999998 C22,7.44999998 21.55,6.99999998 21,6.99999998 Z M15,17 L21,17 C21.55,17 22,16.55 22,16 C22,15.45 21.55,15 21,15 L15,15 C14.45,15 14,15.45 14,16 C14,16.55 14.45,17 15,17 Z M12,8.99999998 L12,15 C12,16.1 11.1,17 9.99999996,17 L3.99999996,17 C2.89999996,17 1.99999996,16.1 1.99999996,15 L1.99999996,8.99999998 C1.99999996,7.89999998 2.89999996,6.99999998 3.99999996,6.99999998 L9.99999996,6.99999998 C11.1,6.99999998 12,7.89999998 12,8.99999998 Z M9.89999999,14.2 L8.63999999,12.52 C8.43999999,12.26 8.04999998,12.25 7.83999998,12.51 L6.49999998,14.26 L5.64999997,13.23 C5.44999997,12.98 5.06999997,12.99 4.86999997,13.24 L4.12999997,14.19 C3.86999997,14.52 4.10999997,15 4.51999997,15 L9.49999999,15 C9.90999999,15 10.15,14.53 9.89999999,14.2 Z',
      id: 'AVArtTrackIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'art_track',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVArtTrackIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVArtTrackIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVArtTrackIcon-path-1',
        },
      ],
    },
  ],
};

export const AVArtTrackIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
