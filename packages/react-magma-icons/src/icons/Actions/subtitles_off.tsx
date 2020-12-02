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
  title: ['subtitles_off'],
  paths: [
    {
      d:
        'M1.74999996,3.15999996 C2.13999996,2.76999996 2.76999996,2.76999996 3.15999996,3.15999996 L3.15999996,3.15999996 L20,20 L20.83,20.84 C21.22,21.23 21.22,21.86 20.83,22.25 C20.44,22.64 19.81,22.64 19.42,22.25 L19.42,22.25 L17.17,20 L3.99999997,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,18 L1.99999996,5.99999997 C1.99999996,5.65999997 2.08999996,5.34999997 2.23999996,5.05999997 L2.23999996,5.05999997 L1.74999996,4.56999997 C1.35999996,4.17999997 1.35999996,3.54999996 1.74999996,3.15999996 Z M20,3.99999997 C21.1,3.99999997 22,4.89999997 22,5.99999997 L22,5.99999997 L22,18 C22,18.34 21.91,18.65 21.76,18.93 L21.76,18.93 L16.83,14 L19,14 C19.55,14 20,13.55 20,13 C20,12.45 19.55,12 19,12 L19,12 L14.83,12 L6.82999998,3.99999997 Z M13,16 L4.99999997,16 C4.44999997,16 3.99999997,16.45 3.99999997,17 C3.99999997,17.55 4.44999997,18 4.99999997,18 L4.99999997,18 L13,18 C13.55,18 14,17.55 14,17 C14,16.92 13.97,16.86 13.95,16.78 L13.95,16.78 L13.21,16.04 C13.14,16.03 13.08,16 13,16 L13,16 Z M6.99999997,12 L4.99999997,12 C4.44999997,12 3.99999997,12.45 3.99999997,13 C3.99999997,13.55 4.44999997,14 4.99999997,14 L4.99999997,14 L6.99999997,14 C7.54999998,14 7.99999997,13.55 7.99999997,13 C7.99999997,12.45 7.54999998,12 6.99999997,12 L6.99999997,12 Z',
      id: 'ActionsSubtitlesOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subtitles_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSubtitlesOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSubtitlesOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSubtitlesOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSubtitlesOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
