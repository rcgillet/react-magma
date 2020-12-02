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
  title: ['attach_email'],
  paths: [
    {
      d:
        'M17.5,11 C18.88,11 20,12.12 20,13.5 L20,13.5 L20,17 C20,17.55 19.55,18 19,18 C18.45,18 18,17.55 18,17 L18,17 L18,13.5 C18,13.22 17.78,13 17.5,13 C17.22,13 17,13.22 17,13.5 L17,13.5 L17,18 C17,19.1 17.9,20 19,20 C20.1,20 21,19.1 21,18 L21,18 L21,15 C21,14.45 21.45,14 22,14 C22.55,14 23,14.45 23,15 L23,15 L23,18 C23,20.21 21.21,22 19,22 C16.79,22 15,20.21 15,18 L15,18 L15,13.5 C15,12.12 16.12,11 17.5,11 Z M19,1.99999996 C20.1,1.99999996 21,2.89999996 21,3.99999996 L21,3.99999996 L21,9.99999996 L17,9.99999996 C15.34,9.99999996 14,11.34 14,13 L14,13 L14,18 L2.99999995,18 C1.89999996,18 0.999999954,17.1 0.999999954,16 L0.999999954,16 L1.00999995,3.99999996 C1.00999995,2.89999996 1.89999996,1.99999996 2.99999995,1.99999996 L2.99999995,1.99999996 Z M19,5.52999997 C19,4.85999997 18.27,4.45999997 17.7,4.80999997 L17.7,4.80999997 L11,8.99999999 L4.29999997,4.80999997 C3.72999997,4.45999997 2.99999996,4.85999997 2.99999996,5.52999997 C2.99999996,5.81999997 3.14999996,6.08999998 3.39999996,6.24999998 L3.39999996,6.24999998 L10.47,10.67 C10.79,10.87 11.21,10.87 11.53,10.67 L11.53,10.67 L18.6,6.24999998 C18.85,6.08999998 19,5.81999997 19,5.52999997 Z',
      id: 'FileAttachEmailIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'attach_email',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'FileAttachEmailIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#FileAttachEmailIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#FileAttachEmailIcon-path-1',
        },
      ],
    },
  ],
};

export const FileAttachEmailIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
