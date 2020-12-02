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
  title: ['recent_actors'],
  paths: [
    {
      d:
        'M21,5.99999997 L21,18 C21,18.55 21.45,19 22,19 C22.55,19 23,18.55 23,18 L23,5.99999997 C23,5.44999997 22.55,4.99999997 22,4.99999997 C21.45,4.99999997 21,5.44999997 21,5.99999997 Z M18,19 C18.55,19 19,18.55 19,18 L19,5.99999997 C19,5.44999997 18.55,4.99999997 18,4.99999997 C17.45,4.99999997 17,5.44999997 17,5.99999997 L17,18 C17,18.55 17.45,19 18,19 Z M14,4.99999997 L1.99999995,4.99999997 C1.44999996,4.99999997 0.999999954,5.44999997 0.999999954,5.99999997 L0.999999954,18 C0.999999954,18.55 1.44999996,19 1.99999995,19 L14,19 C14.55,19 15,18.55 15,18 L15,5.99999997 C15,5.44999997 14.55,4.99999997 14,4.99999997 Z M7.99999998,7.74999998 C9.23999999,7.74999998 10.25,8.75999999 10.25,9.99999999 C10.25,11.24 9.23999999,12.25 7.99999998,12.25 C6.75999998,12.25 5.74999997,11.24 5.74999997,9.99999999 C5.74999997,8.75999999 6.75999998,7.74999998 7.99999998,7.74999998 Z M12.5,17 L3.49999996,17 L3.49999996,16.25 C3.49999996,14.75 6.49999996,14 7.99999996,14 C9.49999996,14 12.5,14.75 12.5,16.25 L12.5,17 Z',
      id: 'AVRecentActorsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'recent_actors',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVRecentActorsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVRecentActorsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVRecentActorsIcon-path-1',
        },
      ],
    },
  ],
};

export const AVRecentActorsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
