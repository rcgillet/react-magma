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
  title: ['dynamic_form'],
  paths: [
    {
      d:
        'M21.68,9.70999999 L17.96,17.9 C17.73,18.39 17,18.23 17,17.69 L17,11 L15.5,11 C15.22,11 15,10.78 15,10.5 L15,4.49999997 C15,4.21999997 15.22,3.99999997 15.5,3.99999997 L21.26,3.99999997 C21.61,3.99999997 21.86,4.35999997 21.72,4.68999997 L20,8.99999997 L21.22,8.99999997 C21.59,8.99999997 21.83,9.37999999 21.68,9.70999999 Z M15,13 L15,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,15 C1.99999996,13.9 2.89999996,13 3.99999996,13 L15,13 Z M6.24999997,16.5 C6.24999997,16.09 5.90999997,15.75 5.49999997,15.75 C5.08999997,15.75 4.74999997,16.09 4.74999997,16.5 C4.74999997,16.91 5.08999997,17.25 5.49999997,17.25 C5.90999997,17.25 6.24999997,16.91 6.24999997,16.5 Z M13,3.99999997 L13,11 L3.99999996,11 C2.89999996,11 1.99999996,10.1 1.99999996,8.99999997 L1.99999996,5.99999997 C1.99999996,4.89999997 2.89999996,3.99999997 3.99999996,3.99999997 L13,3.99999997 Z M6.24999997,7.49999998 C6.24999997,7.08999998 5.90999997,6.74999998 5.49999997,6.74999998 C5.08999997,6.74999998 4.74999997,7.08999998 4.74999997,7.49999998 C4.74999997,7.90999998 5.08999997,8.24999998 5.49999997,8.24999998 C5.90999997,8.24999998 6.24999997,7.90999998 6.24999997,7.49999998 Z',
      id: 'ActionsDynamicFormIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'dynamic_form',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDynamicFormIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDynamicFormIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDynamicFormIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDynamicFormIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
