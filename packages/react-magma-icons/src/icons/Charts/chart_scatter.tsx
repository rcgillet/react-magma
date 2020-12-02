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
    "chart_scatter"
  ],
  "paths": [
    {
      "d": "M16.6,14.6 C18.2568543,14.6 19.6,15.9431458 19.6,17.6 C19.6,19.2568543 18.2568543,20.6 16.6,20.6 C14.9431458,20.6 13.6,19.2568543 13.6,17.6 C13.6,15.9431458 14.9431458,14.6 16.6,14.6 Z M6.99999997,11 C8.65685424,11 9.99999997,12.3431458 9.99999997,14 C9.99999997,15.6568543 8.65685424,17 6.99999997,17 C5.34314572,17 3.99999997,15.6568543 3.99999997,14 C3.99999997,12.3431458 5.34314572,11 6.99999997,11 Z M11,2.99999996 C12.6568543,2.99999996 14,4.34314572 14,5.99999996 C14,7.65685423 12.6568543,8.99999996 11,8.99999996 C9.34314574,8.99999996 7.99999998,7.65685423 7.99999998,5.99999996 C7.99999998,4.34314572 9.34314574,2.99999996 11,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "chart_scatter",
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

export const ChartsChartScatterIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    