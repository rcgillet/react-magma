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
    "wl_ready"
  ],
  "paths": [
    {
      "d": "M9.62056481,11.051412 L15.051412,11.051412 L15.051412,5.62056481 L9.62056481,5.62056481 L9.62056481,11.051412 Z M18.6719768,14.6719768 L18.6719768,2 L6,2 L6,21.9131064 L7.8102824,21.9131064 L9.62056481,21.9131064 L9.62056481,14.6719768 L11.4254164,14.6719768 L14.8414193,22 L18.724475,21.9131064 L15.3989862,14.6719768 L18.6719768,14.6719768 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wl_ready",
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

export const CustomWlReadyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    