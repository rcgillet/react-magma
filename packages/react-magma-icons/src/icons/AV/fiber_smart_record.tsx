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
  title: ['fiber_smart_record'],
  paths: [
    {
      d:
        'M8.99999995,3.99999997 C13.418278,3.99999997 17,7.58172198 17,12 C17,16.418278 13.418278,20 8.99999995,20 C4.58172197,20 0.999999954,16.418278 0.999999954,12 C0.999999954,7.58172198 4.58172197,3.99999997 8.99999995,3.99999997 Z M17,5.54999997 C17,4.86999997 17.71,4.44999997 18.32,4.72999997 C21.08,5.98999997 23,8.76999999 23,12 C23,15.23 21.08,18.01 18.32,19.26 C17.71,19.55 17,19.12 17,18.44 L17,18.44 L17,18.26 C17,17.89 17.23,17.58 17.57,17.42 C19.6,16.46 21,14.39 21,12 C21,9.60999999 19.6,7.53999998 17.57,6.57999998 C17.23,6.41999998 17,6.09999998 17,5.72999997 L17,5.72999997 Z',
      id: 'AVFiberSmartRecordIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fiber_smart_record',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVFiberSmartRecordIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVFiberSmartRecordIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#AVFiberSmartRecordIcon-path-1',
        },
      ],
    },
  ],
};

export const AVFiberSmartRecordIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
