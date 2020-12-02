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
    "hourglass_full"
  ],
  "paths": [
    {
      "d": "M5.99999998,3.99999996 L5.99999998,7.16999998 C5.99999998,7.69999998 6.20999998,8.20999998 6.58999998,8.58999999 L9.99999998,12 L6.57999998,15.42 C6.20999998,15.8 5.99999998,16.31 5.99999998,16.84 L5.99999998,20 C5.99999998,21.1 6.89999998,22 7.99999998,22 L16,22 C17.1,22 18,21.1 18,20 L18,16.84 C18,16.31 17.79,15.8 17.42,15.43 L14,12 L17.41,8.59999999 C17.79,8.21999998 18,7.70999998 18,7.17999998 L18,3.99999996 C18,2.89999996 17.1,1.99999996 16,1.99999996 L7.99999998,1.99999996 C6.89999998,1.99999996 5.99999998,2.89999996 5.99999998,3.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "hourglass_full",
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

export const ActionsHourglassFullIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    