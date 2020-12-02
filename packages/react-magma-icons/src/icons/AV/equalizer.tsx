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
  title: ['equalizer'],
  paths: [
    {
      d:
        'M12,20 C13.1,20 14,19.1 14,18 L14,5.99999997 C14,4.89999997 13.1,3.99999997 12,3.99999997 C10.9,3.99999997 9.99999999,4.89999997 9.99999999,5.99999997 L9.99999999,18 C9.99999999,19.1 10.9,20 12,20 Z M5.99999997,20 C7.09999998,20 7.99999997,19.1 7.99999997,18 L7.99999997,14 C7.99999997,12.9 7.09999998,12 5.99999997,12 C4.89999997,12 3.99999997,12.9 3.99999997,14 L3.99999997,18 C3.99999997,19.1 4.89999997,20 5.99999997,20 Z M16,11 L16,18 C16,19.1 16.9,20 18,20 C19.1,20 20,19.1 20,18 L20,11 C20,9.89999999 19.1,8.99999999 18,8.99999999 C16.9,8.99999999 16,9.89999999 16,11 Z',
      id: 'AVEqualizerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'equalizer',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVEqualizerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVEqualizerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVEqualizerIcon-path-1',
        },
      ],
    },
  ],
};

export const AVEqualizerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
