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
  title: ['find_replace'],
  paths: [
    {
      d:
        'M11,5.99999997 C12.38,5.99999997 13.63,6.55999998 14.54,7.45999998 L12.85,9.14999999 C12.54,9.45999999 12.76,9.99999997 13.21,9.99999997 L17.5,9.99999997 C17.78,9.99999997 18,9.77999999 18,9.49999997 L18,5.20999997 C18,4.75999997 17.46,4.53999997 17.15,4.85999997 L15.95,6.05999998 C14.68,4.77999997 12.93,3.99999997 11,3.99999997 C7.95999998,3.99999997 5.37999997,5.93999997 4.41999997,8.63999999 C4.17999997,9.29999999 4.64999997,9.99999997 5.34999997,9.99999997 C5.76999997,9.99999997 6.13999998,9.73999999 6.27999998,9.33999999 C6.95999998,7.39999998 8.81999999,5.99999997 11,5.99999997 Z M16.64,15.14 C17.04,14.6 17.36,13.99 17.59,13.34 C17.82,12.69 17.34,12 16.65,12 C16.23,12 15.86,12.26 15.72,12.66 C15.04,14.6 13.18,16 11,16 C9.61999999,16 8.36999998,15.44 7.45999998,14.54 L9.14999999,12.85 C9.45999999,12.54 9.23999999,12 8.78999999,12 L4.49999997,12 C4.21999997,12 3.99999997,12.22 3.99999997,12.5 L3.99999997,16.79 C3.99999997,17.24 4.53999997,17.46 4.84999997,17.14 L6.04999998,15.94 C7.31999998,17.22 9.06999999,18 11,18 C12.55,18 13.98,17.49 15.14,16.64 L19.25,20.75 C19.66,21.16 20.33,21.16 20.74,20.75 C21.15,20.34 21.15,19.67 20.74,19.26 L16.64,15.14 Z',
      id: 'ActionsFindReplaceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'find_replace',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFindReplaceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFindReplaceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFindReplaceIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFindReplaceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
