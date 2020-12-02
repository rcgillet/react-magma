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
    "description"
  ],
  "paths": [
    {
      "d": "M14.59,2.58999996 C14.21,2.20999996 13.7,1.99999996 13.17,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 3.99999997,2.89999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.1 4.88999997,22 5.98999997,22 L18,22 C19.1,22 20,21.1 20,20 L20,8.82999999 C20,8.29999998 19.79,7.78999998 19.41,7.41999998 L14.59,2.58999996 Z M15,18 L8.99999998,18 C8.44999999,18 7.99999998,17.55 7.99999998,17 C7.99999998,16.45 8.44999999,16 8.99999998,16 L15,16 C15.55,16 16,16.45 16,17 C16,17.55 15.55,18 15,18 Z M15,14 L8.99999998,14 C8.44999999,14 7.99999998,13.55 7.99999998,13 C7.99999998,12.45 8.44999999,12 8.99999998,12 L15,12 C15.55,12 16,12.45 16,13 C16,13.55 15.55,14 15,14 Z M13,7.99999996 L13,3.49999996 L18.5,8.99999996 L14,8.99999996 C13.45,8.99999996 13,8.54999999 13,7.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "description",
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

export const ActionsDescriptionIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    