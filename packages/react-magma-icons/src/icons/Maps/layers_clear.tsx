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
  title: ['layers_clear'],
  paths: [
    {
      d:
        'M19.99,9.78999999 C20.5,9.38999999 20.5,8.60999999 19.99,8.20999998 L13.23,2.94999996 C12.51,2.38999996 11.5,2.38999996 10.77,2.94999996 L9.40999999,4.01999997 L17.29,11.9 L19.99,9.78999999 Z M19.99,13.28 L19.98,13.27 C19.62,12.99 19.12,12.99 18.76,13.27 L18.71,13.31 L20.11,14.71 C20.48,14.3 20.45,13.64 19.99,13.28 L19.99,13.28 Z M21.44,18.88 L4.11999997,1.55999996 C3.72999997,1.16999995 3.09999996,1.16999995 2.70999996,1.55999996 C2.31999996,1.94999996 2.31999996,2.57999996 2.70999996,2.96999996 L6.22999998,6.48999998 L4.00999997,8.20999998 C3.49999996,8.60999999 3.49999996,9.38999999 4.00999997,9.78999999 L10.77,15.05 C11.49,15.61 12.5,15.61 13.23,15.05 L14.1,14.37 L15.52,15.79 L12.6,18.06 C12.24,18.34 11.73,18.34 11.37,18.06 L5.21999997,13.28 C4.85999997,13 4.35999997,13 3.99999997,13.28 C3.48999996,13.68 3.48999996,14.45 3.99999997,14.85 L10.76,20.11 C11.48,20.67 12.49,20.67 13.22,20.11 L16.94,17.22 L20.01,20.29 C20.4,20.68 21.03,20.68 21.42,20.29 C21.83,19.9 21.83,19.27 21.44,18.88 Z',
      id: 'MapsLayersClearIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'layers_clear',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLayersClearIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLayersClearIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLayersClearIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLayersClearIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
