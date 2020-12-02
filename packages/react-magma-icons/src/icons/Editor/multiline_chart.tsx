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
  title: ['multiline_chart'],
  paths: [
    {
      d:
        'M21.36,6.27999998 L21.3,6.21999998 C20.91,5.82999997 20.27,5.84999997 19.91,6.25999998 L17.73,8.70999999 C15.68,6.39999998 12.83,4.99999997 9.60999999,4.99999997 C7.10999998,4.99999997 4.77999997,5.86999997 2.85999996,7.29999998 C2.38999996,7.64999998 2.33999996,8.33999998 2.74999996,8.74999999 L2.80999996,8.80999999 C3.13999996,9.13999999 3.66999997,9.19999999 4.03999997,8.91999999 C5.62999997,7.71999998 7.53999998,6.99999997 9.60999999,6.99999997 C12.35,6.99999997 14.7,8.25999998 16.38,10.24 L13.5,13.48 L10.21,10.19 C9.81999999,9.79999999 9.18999999,9.79999999 8.79999999,10.19 L2.67999996,16.32 C2.30999996,16.69 2.30999996,17.3 2.67999996,17.67 L2.82999996,17.82 C3.19999996,18.19 3.80999997,18.19 4.17999997,17.82 L9.49999999,12.49 L12.75,15.74 C13.16,16.15 13.82,16.13 14.2,15.7 L17.55,11.94 C18.17,13.06 18.63,14.33 18.87,15.67 C18.95,16.14 19.34,16.49 19.82,16.49 L19.91,16.49 C20.51,16.49 20.96,15.94 20.85,15.35 C20.53,13.5 19.87,11.81 18.96,10.35 L21.4,7.59999998 C21.74,7.21999998 21.72,6.63999998 21.36,6.27999998 Z',
      id: 'EditorMultilineChartIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'multiline_chart',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorMultilineChartIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorMultilineChartIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorMultilineChartIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorMultilineChartIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
