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
    "layers"
  ],
  "paths": [
    {
      "d": "M12.6,18.06 C12.24,18.34 11.73,18.34 11.37,18.06 L5.21999997,13.28 C4.85999997,13 4.35999997,13 3.99999997,13.28 C3.48999996,13.68 3.48999996,14.45 3.99999997,14.85 L10.76,20.11 C11.48,20.67 12.49,20.67 13.22,20.11 L19.98,14.85 C20.49,14.45 20.49,13.68 19.98,13.28 L19.97,13.27 C19.61,12.99 19.11,12.99 18.75,13.27 L12.6,18.06 L12.6,18.06 Z M13.23,15.04 L19.99,9.77999999 C20.5,9.37999999 20.5,8.59999999 19.99,8.19999998 L13.23,2.93999996 C12.51,2.37999996 11.5,2.37999996 10.77,2.93999996 L4.00999997,8.20999998 C3.49999996,8.60999999 3.49999996,9.38999999 4.00999997,9.78999999 L10.77,15.05 C11.49,15.61 12.51,15.61 13.23,15.04 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "layers",
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

export const MapsLayersIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    