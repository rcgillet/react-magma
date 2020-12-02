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
  title: ['blur_off'],
  paths: [
    {
      d:
        'M14,20.5 C14.28,20.5 14.5,20.72 14.5,21 C14.5,21.28 14.28,21.5 14,21.5 C13.72,21.5 13.5,21.28 13.5,21 C13.5,20.72 13.72,20.5 14,20.5 Z M9.99999999,20.5 C10.28,20.5 10.5,20.72 10.5,21 C10.5,21.28 10.28,21.5 9.99999999,21.5 C9.71999999,21.5 9.49999999,21.28 9.49999999,21 C9.49999999,20.72 9.71999999,20.5 9.99999999,20.5 Z M3.20999996,4.55999997 C3.59999996,4.16999997 4.22999997,4.16999997 4.61999997,4.55999997 L4.61999997,4.55999997 L19.43,19.37 C19.82,19.77 19.82,20.4 19.43,20.79 C19.04,21.18 18.41,21.18 18.02,20.79 L18.02,20.79 L14.94,17.72 C14.97,17.81 15,17.9 15,18 C15,18.55 14.55,19 14,19 C13.45,19 13,18.55 13,18 C13,17.45 13.45,17 14,17 C14.1,17 14.19,17.03 14.28,17.06 L14.28,17.06 L11.47,14.25 C11.36,14.96 10.74,15.5 9.99999999,15.5 C9.16999999,15.5 8.49999999,14.83 8.49999999,14 C8.49999999,13.26 9.03999999,12.64 9.74999999,12.53 L9.74999999,12.53 L6.93999998,9.71999999 C6.96999998,9.80999999 6.99999998,9.89999999 6.99999998,9.99999999 C6.99999998,10.55 6.54999998,11 5.99999997,11 C5.44999997,11 4.99999997,10.55 4.99999997,9.99999999 C4.99999997,9.44999999 5.44999997,8.99999999 5.99999997,8.99999999 L5.99999997,8.99999999 L6.27999998,9.03999999 L3.20999996,5.96999997 C2.81999996,5.57999997 2.81999996,4.94999997 3.20999996,4.55999997 Z M5.99999997,17 C6.55228473,17 6.99999997,17.4477153 6.99999997,18 C6.99999997,18.5522848 6.55228473,19 5.99999997,19 C5.44771522,19 4.99999997,18.5522848 4.99999997,18 C4.99999997,17.4477153 5.44771522,17 5.99999997,17 Z M9.99999999,17 C10.5522847,17 11,17.4477153 11,18 C11,18.5522848 10.5522847,19 9.99999999,19 C9.44771524,19 8.99999999,18.5522848 8.99999999,18 C8.99999999,17.4477153 9.44771524,17 9.99999999,17 Z M18,13 C18.5522848,13 19,13.4477153 19,14 C19,14.5522848 18.5522848,15 18,15 C17.4477153,15 17,14.5522848 17,14 C17,13.4477153 17.4477153,13 18,13 Z M5.99999997,13 C6.55228473,13 6.99999997,13.4477153 6.99999997,14 C6.99999997,14.5522848 6.55228473,15 5.99999997,15 C5.44771522,15 4.99999997,14.5522848 4.99999997,14 C4.99999997,13.4477153 5.44771522,13 5.99999997,13 Z M21,13.5 C21.28,13.5 21.5,13.72 21.5,14 C21.5,14.28 21.28,14.5 21,14.5 C20.72,14.5 20.5,14.28 20.5,14 C20.5,13.72 20.72,13.5 21,13.5 Z M2.99999996,13.5 C3.27999996,13.5 3.49999996,13.72 3.49999996,14 C3.49999996,14.28 3.27999996,14.5 2.99999996,14.5 C2.71999996,14.5 2.49999996,14.28 2.49999996,14 C2.49999996,13.72 2.71999996,13.5 2.99999996,13.5 Z M14,8.49999999 C14.83,8.49999999 15.5,9.16999999 15.5,9.99999999 C15.5,10.83 14.83,11.5 14,11.5 L14,11.5 L13.8,11.48 C13.13,11.39 12.61,10.87 12.52,10.2 L12.52,10.2 L12.5,9.99999999 C12.5,9.16999999 13.17,8.49999999 14,8.49999999 Z M18,8.99999999 C18.5522848,8.99999999 19,9.44771524 19,9.99999999 C19,10.5522847 18.5522848,11 18,11 C17.4477153,11 17,10.5522847 17,9.99999999 C17,9.44771524 17.4477153,8.99999999 18,8.99999999 Z M21,9.49999999 C21.28,9.49999999 21.5,9.71999999 21.5,9.99999999 C21.5,10.28 21.28,10.5 21,10.5 C20.72,10.5 20.5,10.28 20.5,9.99999999 C20.5,9.71999999 20.72,9.49999999 21,9.49999999 Z M2.99999996,9.49999999 C3.27999996,9.49999999 3.49999996,9.71999999 3.49999996,9.99999999 C3.49999996,10.28 3.27999996,10.5 2.99999996,10.5 C2.71999996,10.5 2.49999996,10.28 2.49999996,9.99999999 C2.49999996,9.71999999 2.71999996,9.49999999 2.99999996,9.49999999 Z M14,4.99999997 C14.5522848,4.99999997 15,5.44771522 15,5.99999997 C15,6.55228473 14.5522848,6.99999997 14,6.99999997 C13.4477153,6.99999997 13,6.55228473 13,5.99999997 C13,5.44771522 13.4477153,4.99999997 14,4.99999997 Z M18,4.99999997 C18.5522848,4.99999997 19,5.44771522 19,5.99999997 C19,6.55228473 18.5522848,6.99999997 18,6.99999997 C17.4477153,6.99999997 17,6.55228473 17,5.99999997 C17,5.44771522 17.4477153,4.99999997 18,4.99999997 Z M9.99999999,4.99999997 C10.5522847,4.99999997 11,5.44771522 11,5.99999997 C11,6.55228473 10.5522847,6.99999997 9.99999999,6.99999997 C9.44771524,6.99999997 8.99999999,6.55228473 8.99999999,5.99999997 C8.99999999,5.44771522 9.44771524,4.99999997 9.99999999,4.99999997 Z M14,2.49999996 C14.28,2.49999996 14.5,2.71999996 14.5,2.99999996 C14.5,3.27999996 14.28,3.49999996 14,3.49999996 C13.72,3.49999996 13.5,3.27999996 13.5,2.99999996 C13.5,2.71999996 13.72,2.49999996 14,2.49999996 Z M9.99999999,2.49999996 C10.28,2.49999996 10.5,2.71999996 10.5,2.99999996 C10.5,3.27999996 10.28,3.49999996 9.99999999,3.49999996 C9.71999999,3.49999996 9.49999999,3.27999996 9.49999999,2.99999996 C9.49999999,2.71999996 9.71999999,2.49999996 9.99999999,2.49999996 Z',
      id: 'ImageBlurOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'blur_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageBlurOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageBlurOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageBlurOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageBlurOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
