import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  "width": "24px",
  "height": "24px",
  "viewBox": "0 0 24 24",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "title": [
    "chart_pie"
  ],
  "paths": [
    {
      "d": "M11,3.17999996 L11,20.82 C11,21.46 10.41,21.94 9.78999999,21.8 C5.31999997,20.8 1.99999996,16.79 1.99999996,12 C1.99999996,7.20999998 5.31999997,3.19999996 9.78999999,2.19999996 C10.41,2.05999996 11,2.53999996 11,3.17999996 Z M13.03,3.17999996 L13.03,9.98999999 C13.03,10.54 13.48,10.99 14.03,10.99 L20.82,10.99 C21.46,10.99 21.94,10.4 21.8,9.76999999 C20.95,6.00999998 18,3.04999996 14.25,2.19999996 C13.62,2.05999996 13.03,2.53999996 13.03,3.17999996 Z M13.03,14.01 L13.03,20.82 C13.03,21.46 13.62,21.94 14.25,21.8 C18.01,20.95 20.96,17.98 21.81,14.22 C21.95,13.6 21.46,13 20.83,13 L14.04,13 C13.48,13.01 13.03,13.46 13.03,14.01 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "chart_pie",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd",
      "masks": [
        {
          "id": "mask-2",
          "fill": "white",
          "uses": [
            {
              "xlink:href": "#path-1"
            }
          ]
        }
      ],
      "uses": [
        {
          "id": "Combined-Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const ChartsChartPieIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    