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
  title: ['bar_chart'],
  paths: [
    {
      d:
        'M6.39999998,9.19999999 L6.59999998,9.19999999 C7.36999998,9.19999999 7.99999997,9.82999999 7.99999997,10.6 L7.99999997,17.6 C7.99999997,18.37 7.36999998,19 6.59999998,19 L6.39999998,19 C5.62999997,19 4.99999997,18.37 4.99999997,17.6 L4.99999997,10.6 C4.99999997,9.82999999 5.62999997,9.19999999 6.39999998,9.19999999 Z M12,4.99999997 C12.77,4.99999997 13.4,5.62999997 13.4,6.39999998 L13.4,17.6 C13.4,18.37 12.77,19 12,19 C11.23,19 10.6,18.37 10.6,17.6 L10.6,6.39999998 C10.6,5.62999997 11.23,4.99999997 12,4.99999997 Z M17.6,13 C18.37,13 19,13.63 19,14.4 L19,17.6 C19,18.37 18.37,19 17.6,19 C16.83,19 16.2,18.37 16.2,17.6 L16.2,14.4 C16.2,13.63 16.83,13 17.6,13 L17.6,13 Z',
      id: 'EditorBarChartIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bar_chart',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorBarChartIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorBarChartIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorBarChartIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorBarChartIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
