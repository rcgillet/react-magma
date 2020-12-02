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
  title: ['exposure_neg_1'],
  paths: [
    {
      d:
        'M3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L11,13 C11.55,13 12,12.55 12,12 C12,11.45 11.55,11 11,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 Z M19,18 L17,18 L17,7.37999998 L14,8.39999999 L14,6.69999998 L18.7,4.99999997 L19,4.99999997 L19,18 Z',
      id: 'ImageExposureNeg1Icon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'exposure_neg_1',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageExposureNeg1Icon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageExposureNeg1Icon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageExposureNeg1Icon-path-1',
        },
      ],
    },
  ],
};

export const ImageExposureNeg1Icon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
