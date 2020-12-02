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
  title: ['texture'],
  paths: [
    {
      d:
        'M19.58,3.07999996 L3.14999996,19.51 C3.23999996,19.85 3.41999996,20.16 3.65999997,20.41 C3.90999997,20.65 4.21999997,20.83 4.55999997,20.92 L21,4.48999997 C20.81,3.79999997 20.27,3.25999996 19.58,3.07999996 Z M11.95,2.99999996 L3.06999996,11.88 L3.06999996,14.71 L14.78,2.99999996 L11.95,2.99999996 Z M5.06999996,2.99999996 C3.96999997,2.99999996 3.06999996,3.89999997 3.06999996,4.99999996 L3.06999996,6.99999996 L7.06999996,2.99999996 L5.06999996,2.99999996 Z M19.07,21 C19.62,21 20.12,20.78 20.48,20.41 C20.85,20.05 21.07,19.55 21.07,19 L21.07,17 L17.07,21 L19.07,21 Z M9.35999999,21 L12.19,21 L21.07,12.12 L21.07,9.28999999 L9.35999999,21 Z',
      id: 'ImageTextureIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'texture',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTextureIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTextureIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTextureIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTextureIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
