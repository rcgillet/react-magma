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
    "check_circle_outline"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 Z M15.88,8.28999998 L9.99999999,14.17 L8.11999998,12.29 C7.72999998,11.9 7.09999998,11.9 6.70999998,12.29 C6.31999998,12.68 6.31999998,13.31 6.70999998,13.7 L9.29999999,16.29 C9.68999999,16.68 10.32,16.68 10.71,16.29 L17.3,9.69999999 C17.69,9.30999999 17.69,8.67999999 17.3,8.28999998 C16.91,7.89999998 16.27,7.89999998 15.88,8.28999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "check_circle_outline",
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

export const ActionsCheckCircleOutlineIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    