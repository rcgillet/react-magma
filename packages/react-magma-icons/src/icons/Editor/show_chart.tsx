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
  title: ['show_chart'],
  paths: [
    {
      d:
        'M4.19999997,17.78 L9.49999999,12.48 L12.75,15.73 C13.16,16.14 13.82,16.12 14.2,15.69 L21.37,7.61999998 C21.72,7.22999998 21.7,6.62999998 21.33,6.24999998 C20.93,5.84999997 20.26,5.85999997 19.88,6.28999998 L13.49,13.47 L10.2,10.18 C9.80999999,9.78999999 9.17999999,9.78999999 8.78999999,10.18 L2.69999996,16.28 C2.30999996,16.67 2.30999996,17.3 2.69999996,17.69 L2.78999996,17.78 C3.17999996,18.17 3.81999997,18.17 4.19999997,17.78 Z',
      id: 'EditorShowChartIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'show_chart',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorShowChartIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorShowChartIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorShowChartIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorShowChartIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
