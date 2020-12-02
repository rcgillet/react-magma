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
  title: ['pan_tool'],
  paths: [
    {
      d:
        'M21.5,3.99999995 C20.67,3.99999995 20,4.66999997 20,5.49999995 L20,10.4999999 C20,10.78 19.78,10.9999999 19.5,10.9999999 C19.22,10.9999999 19,10.78 19,10.4999999 L19,2.49999995 C19,1.66999996 18.33,0.99999995 17.5,0.99999995 C16.67,0.99999995 16,1.66999996 16,2.49999995 L16,10.4999999 C16,10.78 15.78,10.9999999 15.5,10.9999999 C15.22,10.9999999 15,10.78 15,10.4999999 L15,1.49999995 C15,0.669999953 14.33,-5.00003736e-08 13.5,-5.00003736e-08 C12.67,-5.00003736e-08 12,0.669999953 12,1.49999995 L12,10.49 C12,10.77 11.78,10.99 11.5,10.99 C11.22,10.99 11,10.77 11,10.49 L11,4.49999995 C11,3.66999997 10.33,2.99999995 9.49999999,2.99999995 C8.66999999,2.99999995 7.99999998,3.66999997 7.99999998,4.49999995 L7.99999998,15.91 L3.87999997,13.56 C3.29999996,13.23 2.57999996,13.32 2.09999996,13.78 C1.49999996,14.36 1.47999996,15.32 2.06999996,15.91 L8.84999999,22.8 C9.59999999,23.57 10.62,23.9999999 11.7,23.9999999 L19,23.9999999 C21.21,23.9999999 23,22.21 23,19.9999999 L23,5.49999995 C23,4.66999997 22.33,3.99999995 21.5,3.99999995 Z',
      id: 'ActionsPanToolIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'pan_tool',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPanToolIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPanToolIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPanToolIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPanToolIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
