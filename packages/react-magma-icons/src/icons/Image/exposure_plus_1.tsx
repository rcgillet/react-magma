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
    "exposure_plus_1"
  ],
  "paths": [
    {
      "d": "M8.99999997,6.99999998 C8.44999999,6.99999998 7.99999997,7.44999998 7.99999997,7.99999998 L7.99999997,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L7.99999997,13 L7.99999997,16 C7.99999997,16.55 8.44999999,17 8.99999997,17 C9.54999999,17 9.99999997,16.55 9.99999997,16 L9.99999997,13 L13,13 C13.55,13 14,12.55 14,12 C14,11.45 13.55,11 13,11 L9.99999997,11 L9.99999997,7.99999998 C9.99999997,7.44999998 9.54999999,6.99999998 8.99999997,6.99999998 Z M20,18 L18,18 L18,7.37999998 L15,8.39999999 L15,6.69999998 L19.7,4.99999997 L20,4.99999997 L20,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "exposure_plus_1",
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

export const ImageExposurePlus1Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    