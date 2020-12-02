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
  title: ['subtitles'],
  paths: [
    {
      d:
        'M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M4.99999997,12 L6.99999997,12 C7.54999998,12 7.99999997,12.45 7.99999997,13 C7.99999997,13.55 7.54999998,14 6.99999997,14 L4.99999997,14 C4.44999997,14 3.99999997,13.55 3.99999997,13 C3.99999997,12.45 4.44999997,12 4.99999997,12 Z M13,18 L4.99999997,18 C4.44999997,18 3.99999997,17.55 3.99999997,17 C3.99999997,16.45 4.44999997,16 4.99999997,16 L13,16 C13.55,16 14,16.45 14,17 C14,17.55 13.55,18 13,18 Z M19,18 L17,18 C16.45,18 16,17.55 16,17 C16,16.45 16.45,16 17,16 L19,16 C19.55,16 20,16.45 20,17 C20,17.55 19.55,18 19,18 Z M19,14 L11,14 C10.45,14 9.99999999,13.55 9.99999999,13 C9.99999999,12.45 10.45,12 11,12 L19,12 C19.55,12 20,12.45 20,13 C20,13.55 19.55,14 19,14 Z',
      id: 'AVSubtitlesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subtitles',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVSubtitlesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVSubtitlesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVSubtitlesIcon-path-1',
        },
      ],
    },
  ],
};

export const AVSubtitlesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
