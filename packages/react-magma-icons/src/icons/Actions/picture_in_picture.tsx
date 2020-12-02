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
    "picture_in_picture"
  ],
  "paths": [
    {
      "d": "M18,6.99999998 L12,6.99999998 C11.45,6.99999998 11,7.44999998 11,7.99999998 L11,12 C11,12.55 11.45,13 12,13 L18,13 C18.55,13 19,12.55 19,12 L19,7.99999998 C19,7.44999998 18.55,6.99999998 18,6.99999998 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,20.98 2.99999995,20.98 L21,20.98 C22.1,20.98 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M20,19.01 L3.99999996,19.01 C3.44999996,19.01 2.99999996,18.56 2.99999996,18.01 L2.99999996,5.97999997 C2.99999996,5.42999997 3.44999996,4.97999997 3.99999996,4.97999997 L20,4.97999997 C20.55,4.97999997 21,5.42999997 21,5.97999997 L21,18.01 C21,18.56 20.55,19.01 20,19.01 L20,19.01 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "picture_in_picture",
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

export const ActionsPictureInPictureIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    