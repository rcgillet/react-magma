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
  title: ['subscript'],
  paths: [
    {
      d:
        'M10.52,10.73 L7.29999998,5.71999997 C6.81999998,4.96999997 7.34999998,3.99999997 8.22999998,3.99999997 L8.22999998,3.99999997 C8.61999999,3.99999997 8.96999999,4.19999997 9.17999999,4.52999997 L11.94,8.98999999 L12.06,8.98999999 L14.8,4.53999997 C15.01,4.19999997 15.37,3.99999997 15.76,3.99999997 L15.76,3.99999997 C16.64,3.99999997 17.18,4.97999997 16.7,5.71999997 L13.47,10.72 L17.02,16.27 C17.5,17.02 16.96,18 16.08,18 L16.08,18 C15.7,18 15.34,17.8 15.13,17.48 L12.06,12.59 L11.94,12.59 L8.86999999,17.48 C8.66999999,17.8 8.30999998,18 7.91999998,18 L7.91999998,18 C7.03999998,18 6.49999998,17.03 6.97999998,16.28 L10.52,10.73 Z M23,19.5 L23,19.5 C23,19.22 22.78,19 22.5,19 C22.5,19 22.5,19 22.5,19 L20,19 L20,18 L22,18 C22.55,18 23,17.55 23,17 L23,16 C23,15.45 22.55,15 22,15 L19.5,15 C19.22,15 19,15.22 19,15.5 L19,15.5 C19,15.78 19.22,16 19.5,16 L22,16 L22,17 L20,17 C19.45,17 19,17.45 19,18 L19,19 C19,19.55 19.45,20 20,20 L22.5,20 C22.78,20 23,19.78 23,19.5 Z',
      id: 'EditorSubscriptIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subscript',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorSubscriptIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorSubscriptIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorSubscriptIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorSubscriptIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
