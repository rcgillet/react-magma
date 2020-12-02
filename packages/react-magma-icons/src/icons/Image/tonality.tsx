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
  title: ['tonality'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M11,19.93 C7.05999998,19.44 3.99999997,16.08 3.99999997,12 C3.99999997,7.91999998 7.04999998,4.55999997 11,4.06999997 L11,19.93 Z M13,4.06999997 C14.03,4.19999997 15,4.51999997 15.87,4.99999997 L13,4.99999997 L13,4.06999997 Z M13,6.99999998 L18.24,6.99999998 C18.49,7.30999998 18.72,7.64999998 18.92,7.99999998 L13,7.99999998 L13,6.99999998 Z M13,9.99999999 L19.74,9.99999999 C19.82,10.33 19.89,10.66 19.93,11 L13,11 L13,9.99999999 Z M13,19.93 L13,19 L15.87,19 C15,19.48 14.03,19.8 13,19.93 Z M18.24,17 L13,17 L13,16 L18.92,16 C18.72,16.35 18.49,16.69 18.24,17 L18.24,17 Z M19.74,14 L13,14 L13,13 L19.93,13 C19.89,13.34 19.82,13.67 19.74,14 Z',
      id: 'ImageTonalityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tonality',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageTonalityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageTonalityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageTonalityIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageTonalityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
