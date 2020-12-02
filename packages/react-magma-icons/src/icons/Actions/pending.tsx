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
    "pending"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M6.99999997,13.5 C6.16999998,13.5 5.49999997,12.83 5.49999997,12 C5.49999997,11.17 6.16999998,10.5 6.99999997,10.5 C7.82999998,10.5 8.49999997,11.17 8.49999997,12 C8.49999997,12.83 7.82999998,13.5 6.99999997,13.5 Z M12,13.5 C11.17,13.5 10.5,12.83 10.5,12 C10.5,11.17 11.17,10.5 12,10.5 C12.83,10.5 13.5,11.17 13.5,12 C13.5,12.83 12.83,13.5 12,13.5 Z M17,13.5 C16.17,13.5 15.5,12.83 15.5,12 C15.5,11.17 16.17,10.5 17,10.5 C17.83,10.5 18.5,11.17 18.5,12 C18.5,12.83 17.83,13.5 17,13.5 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "pending",
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

export const ActionsPendingIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    