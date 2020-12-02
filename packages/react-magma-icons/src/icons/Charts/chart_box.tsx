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
  title: ['chart_box'],
  paths: [
    {
      d:
        'M5,2 C5.55228475,2 6,2.44771525 6,3 L6,8 L7.5,8 C7.77614237,8 8,8.22385763 8,8.5 L8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L6,14 L6,21 C6,21.5522847 5.55228475,22 5,22 C4.44771525,22 4,21.5522847 4,21 L4,14 L2.5,14 C2.22385763,14 2,13.7761424 2,13.5 L2,8.5 C2,8.22385763 2.22385763,8 2.5,8 L4,8 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,2 C12.5522847,2 13,2.44771525 13,3 L13,6 L14.5,6 C14.7761424,6 15,6.22385763 15,6.5 L15,11.5 C15,11.7761424 14.7761424,12 14.5,12 L13,12 L13,21 C13,21.5522847 12.5522847,22 12,22 C11.4477153,22 11,21.5522847 11,21 L11,12 L9.5,12 C9.22385763,12 9,11.7761424 9,11.5 L9,6.5 C9,6.22385763 9.22385763,6 9.5,6 L11,6 L11,3 C11,2.44771525 11.4477153,2 12,2 Z M19,2 C19.5522847,2 20,2.44771525 20,3 L20,13 L21.5,13 C21.7761424,13 22,13.2238576 22,13.5 L22,18.5 C22,18.7761424 21.7761424,19 21.5,19 L20,19 L20,21 C20,21.5522847 19.5522847,22 19,22 C18.4477153,22 18,21.5522847 18,21 L18,19 L16.5,19 C16.2238576,19 16,18.7761424 16,18.5 L16,13.5 C16,13.2238576 16.2238576,13 16.5,13 L18,13 L18,3 C18,2.44771525 18.4477153,2 19,2 Z',
      id: 'ChartsChartBoxIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'chart_box',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ChartsChartBoxIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ChartsChartBoxIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ChartsChartBoxIcon-path-1',
        },
      ],
    },
  ],
};

export const ChartsChartBoxIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
