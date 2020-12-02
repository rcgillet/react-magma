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
    "image_aspect_ratio"
  ],
  "paths": [
    {
      "d": "M16,9.99999999 L14,9.99999999 L14,12 L16,12 L16,9.99999999 Z M16,14 L14,14 L14,16 L16,16 L16,14 Z M7.99999997,9.99999999 L5.99999997,9.99999999 L5.99999997,12 L7.99999997,12 L7.99999997,9.99999999 Z M12,9.99999999 L9.99999999,9.99999999 L9.99999999,12 L12,12 L12,9.99999999 Z M20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 Z M19,18 L4.99999997,18 C4.44999997,18 3.99999997,17.55 3.99999997,17 L3.99999997,6.99999998 C3.99999997,6.44999998 4.44999997,5.99999998 4.99999997,5.99999998 L19,5.99999998 C19.55,5.99999998 20,6.44999998 20,6.99999998 L20,17 C20,17.55 19.55,18 19,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "image_aspect_ratio",
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

export const ImageImageAspectRatioIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    