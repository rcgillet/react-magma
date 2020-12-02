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
  title: ['plumbing'],
  paths: [
    {
      d:
        'M8.31999998,5.98999997 C8.89999999,5.39999997 9.84999999,5.39999997 10.44,5.98999997 L10.44,5.98999997 L13.62,9.16999999 L14.33,8.45999999 C14.72,8.06999998 15.35,8.06999998 15.74,8.46999999 L15.74,8.46999999 L17.86,10.59 C18.25,10.98 18.25,11.61 17.86,12 C17.47,12.39 16.84,12.39 16.45,12 L16.45,12 L7.25999998,21.2 C6.39999998,22.06 4.94999997,21.97 4.20999997,20.94 C3.61999997,20.13 3.79999997,18.99 4.49999997,18.29 L4.49999997,18.29 L11.5,11.29 L8.31999998,8.10999998 C7.72999998,7.52999998 7.72999998,6.57999998 8.31999998,5.98999997 Z M7.95999998,9.16999999 L10.08,11.3 L7.60999998,13.77 C7.02999998,14.36 6.07999998,14.36 5.48999997,13.77 C4.89999997,13.18 4.89999997,12.23 5.48999997,11.64 L5.48999997,11.64 L7.95999998,9.16999999 Z M14.33,2.80999996 C15.11,2.02999996 16.38,2.02999996 17.16,2.80999996 L17.16,2.80999996 L19.28,4.92999997 C20.45,6.09999998 20.45,7.99999998 19.28,9.17999999 L19.28,9.17999999 L15.74,5.63999997 L13.62,7.75999998 L11.5,5.63999997 Z',
      id: 'MapsPlumbingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'plumbing',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsPlumbingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsPlumbingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsPlumbingIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsPlumbingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
