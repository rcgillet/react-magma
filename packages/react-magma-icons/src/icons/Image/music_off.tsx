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
  title: ['music_off'],
  paths: [
    {
      d:
        'M14,9.60999999 L14,6.99999996 L16,6.99999996 C17.1,6.99999996 18,6.09999998 18,4.99999996 C18,3.89999997 17.1,2.99999996 16,2.99999996 L13,2.99999996 C12.45,2.99999996 12,3.44999996 12,3.99999996 L12,7.60999998 L14,9.60999999 Z M5.11999997,3.55999996 C4.72999997,3.16999996 4.09999997,3.16999996 3.70999997,3.55999996 C3.31999996,3.94999997 3.31999996,4.57999997 3.70999997,4.96999997 L12,13.27 L12,13.55 C11.06,13.01 9.89999999,12.8 8.66999999,13.23 C7.32999998,13.71 6.29999998,14.9 6.05999998,16.3 C5.59999997,19.04 7.91999998,21.38 10.65,20.95 C12.61,20.64 14,18.84 14,16.85 L14,15.27 L19.02,20.29 C19.41,20.68 20.04,20.68 20.43,20.29 C20.82,19.9 20.82,19.27 20.43,18.88 L5.11999997,3.55999996 Z',
      id: 'ImageMusicOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'music_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageMusicOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageMusicOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageMusicOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageMusicOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
