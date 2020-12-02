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
    "crop_5_4"
  ],
  "paths": [
    {
      "d": "M19,4.99999997 L4.99999996,4.99999997 C3.89999997,4.99999997 2.99999996,5.89999997 2.99999996,6.99999997 L2.99999996,17 C2.99999996,18.1 3.89999997,19 4.99999996,19 L19,19 C20.1,19 21,18.1 21,17 L21,6.99999997 C21,5.89999997 20.1,4.99999997 19,4.99999997 Z M18,17 L5.99999997,17 C5.44999997,17 4.99999997,16.55 4.99999997,16 L4.99999997,7.99999998 C4.99999997,7.44999998 5.44999997,6.99999998 5.99999997,6.99999998 L18,6.99999998 C18.55,6.99999998 19,7.44999998 19,7.99999998 L19,16 C19,16.55 18.55,17 18,17 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "crop_5_4",
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

export const ImageCrop54Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    