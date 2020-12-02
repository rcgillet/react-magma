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
    "navigate_before"
  ],
  "paths": [
    {
      "d": "M14.91,6.70999998 C14.52,6.31999998 13.89,6.31999998 13.5,6.70999998 L8.90999999,11.3 C8.51999999,11.69 8.51999999,12.32 8.90999999,12.71 L13.5,17.3 C13.89,17.69 14.52,17.69 14.91,17.3 C15.3,16.91 15.3,16.28 14.91,15.89 L11.03,12 L14.91,8.11999998 C15.29,7.72999998 15.29,7.08999998 14.91,6.70999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "navigate_before",
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

export const ImageNavigateBeforeIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    