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
  title: ['chart_bubble'],
  paths: [
    {
      d:
        'M14.8,16 C15.9045695,16 16.8,16.8954305 16.8,18 C16.8,19.1045695 15.9045695,20 14.8,20 C13.6954305,20 12.8,19.1045695 12.8,18 C12.8,16.8954305 13.6954305,16 14.8,16 Z M7.19999998,11.2 C8.96731119,11.2 10.4,12.6326888 10.4,14.4 C10.4,16.1673112 8.96731119,17.6 7.19999998,17.6 C5.43268877,17.6 3.99999997,16.1673112 3.99999997,14.4 C3.99999997,12.6326888 5.43268877,11.2 7.19999998,11.2 Z M15.2,3.99999997 C17.8509668,3.99999997 20,6.14903318 20,8.79999999 C20,11.4509668 17.8509668,13.6 15.2,13.6 C12.5490332,13.6 10.4,11.4509668 10.4,8.79999999 C10.4,6.14903318 12.5490332,3.99999997 15.2,3.99999997 Z',
      id: 'ChartsChartBubbleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'chart_bubble',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ChartsChartBubbleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ChartsChartBubbleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ChartsChartBubbleIcon-path-1',
        },
      ],
    },
  ],
};

export const ChartsChartBubbleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
