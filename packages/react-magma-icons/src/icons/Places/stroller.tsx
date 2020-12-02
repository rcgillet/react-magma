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
  title: ['stroller'],
  paths: [
    {
      d:
        'M18,20 C18,21.1 17.1,22 16,22 C14.9,22 14,21.1 14,20 C14,18.9 14.9,18 16,18 C17.1,18 18,18.9 18,20 Z M5.99999997,18 C4.89999997,18 3.99999997,18.9 3.99999997,20 C3.99999997,21.1 4.89999997,22 5.99999997,22 C7.09999998,22 7.99999997,21.1 7.99999997,20 C7.99999997,18.9 7.09999998,18 5.99999997,18 Z M14.3,4.09999997 C13.03,3.39999996 11.56,2.99999996 9.99999999,2.99999996 C8.48999999,2.99999996 7.06999998,3.37999996 5.82999997,4.02999997 C5.23999997,4.33999997 5.14999997,5.14999997 5.60999997,5.60999997 L9.59999999,9.59999999 L14.3,4.09999997 Z M21.94,5.82999997 C21.65,4.21999997 20.3,2.99999996 18.65,2.99999996 C16.99,2.99999996 16.11,4.26999997 15.47,5.02999997 L6.70999998,15.31 C6.15999998,15.96 6.61999998,16.96 7.46999998,16.96 L15,16.96 C16.1,16.96 17,16.06 17,14.96 L17,6.26999998 C17.58,5.58999997 17.97,4.99999996 18.65,4.99999996 C19.33,4.99999996 19.87,5.51999997 19.98,6.20999998 L19.98,6.20999998 C20.08,6.65999998 20.48,6.99999996 20.96,6.99999996 C21.51,6.99999996 21.96,6.54999998 21.96,5.99999996 C21.96,5.93999997 21.95,5.88999997 21.94,5.82999997 L21.94,5.82999997 Z',
      id: 'PlacesStrollerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'stroller',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesStrollerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesStrollerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesStrollerIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesStrollerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
