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
  title: ['switch_camera'],
  paths: [
    {
      d:
        'M20,3.99999996 L16.83,3.99999996 L15.59,2.64999996 C15.22,2.23999996 14.68,1.99999996 14.12,1.99999996 L9.87999999,1.99999996 C9.31999999,1.99999996 8.77999999,2.23999996 8.39999998,2.64999996 L7.16999998,3.99999996 L3.99999996,3.99999996 C2.89999996,3.99999996 1.99999996,4.89999997 1.99999996,5.99999996 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999996 C22,4.89999997 21.1,3.99999996 20,3.99999996 Z M15,15.5 L15,13 L8.99999999,13 L8.99999999,15.5 L5.84999997,12.35 C5.64999997,12.15 5.64999997,11.84 5.84999997,11.64 L8.99999999,8.49999999 L8.99999999,11 L15,11 L15,8.49999999 L18.15,11.65 C18.35,11.85 18.35,12.16 18.15,12.36 L15,15.5 Z',
      id: 'ImageSwitchCameraIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'switch_camera',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageSwitchCameraIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageSwitchCameraIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageSwitchCameraIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageSwitchCameraIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
