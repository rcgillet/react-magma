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
  title: ['switch_video'],
  paths: [
    {
      d:
        'M18,9.49999997 L18,5.99999997 C18,5.44999997 17.55,4.99999997 17,4.99999997 L2.99999996,4.99999997 C2.44999996,4.99999997 1.99999996,5.44999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,18.55 2.44999996,19 2.99999996,19 L17,19 C17.55,19 18,18.55 18,18 L18,14.5 L20.29,16.79 C20.92,17.42 22,16.97 22,16.08 L22,7.90999998 C22,7.01999998 20.92,6.56999998 20.29,7.19999998 L18,9.49999997 Z M13,15.5 L13,13 L6.99999998,13 L6.99999998,15.5 L3.84999997,12.35 C3.64999997,12.15 3.64999997,11.84 3.84999997,11.64 L6.99999998,8.49999999 L6.99999998,11 L13,11 L13,8.49999999 L16.15,11.65 C16.35,11.85 16.35,12.16 16.15,12.36 L13,15.5 Z',
      id: 'ImageSwitchVideoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'switch_video',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageSwitchVideoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageSwitchVideoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageSwitchVideoIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageSwitchVideoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
