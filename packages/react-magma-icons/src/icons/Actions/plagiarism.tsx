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
  title: ['plagiarism'],
  paths: [
    {
      d:
        'M13.17,1.99999996 C13.7,1.99999996 14.21,2.20999996 14.58,2.57999996 L14.58,2.57999996 L19.41,7.40999998 C19.79,7.78999998 20,8.29999998 20,8.82999999 L20,8.82999999 L20,20 C20,21.1 19.1,22 18,22 L18,22 L5.99999997,22 C4.89999997,22 3.99999997,21.1 3.99999997,20 L3.99999997,20 L3.99999997,3.99999996 C3.99999997,2.89999996 4.89999997,1.99999996 5.99999997,1.99999996 L5.99999997,1.99999996 Z M13.47,11.6 C12.3,10.79 10.68,10.79 9.51999999,11.6 C7.66999998,12.89 7.49999998,15.45 9.01999999,16.97 C10.14,18.09 11.82,18.27 13.15,17.56 L13.15,17.56 L14.33,18.74 C14.72,19.13 15.35,19.13 15.74,18.74 L15.74,18.74 L15.8230769,18.6459582 C16.1276923,18.2544971 16.1,17.69 15.74,17.33 L15.74,17.33 L14.56,16.15 C15.37,14.64 15.02,12.68 13.47,11.6 Z M11.5,13 C12.3284271,13 13,13.6715729 13,14.5 C13,15.3284271 12.3284271,16 11.5,16 C10.6715729,16 9.99999999,15.3284271 9.99999999,14.5 C9.99999999,13.6715729 10.6715729,13 11.5,13 Z M13,3.49999996 L13,7.99999996 C13,8.54999999 13.45,8.99999996 14,8.99999996 L14,8.99999996 L18.5,8.99999996 L13,3.49999996 Z',
      id: 'ActionsPlagiarismIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'plagiarism',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPlagiarismIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPlagiarismIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPlagiarismIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPlagiarismIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
