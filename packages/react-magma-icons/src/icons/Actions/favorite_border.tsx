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
    "favorite_border"
  ],
  "paths": [
    {
      "d": "M19.66,3.98999997 C17.02,2.18999996 13.76,3.02999996 12,5.08999997 C10.24,3.02999996 6.97999998,2.17999996 4.33999997,3.98999997 C2.93999996,4.94999997 2.05999996,6.56999998 1.99999996,8.27999998 C1.85999996,12.16 5.29999997,15.27 10.55,20.04 L10.65,20.13 C11.41,20.82 12.58,20.82 13.34,20.12 L13.45,20.02 C18.7,15.26 22.13,12.15 22,8.26999998 C21.94,6.56999998 21.06,4.94999997 19.66,3.98999997 L19.66,3.98999997 Z M12.1,18.55 L12,18.65 L11.9,18.55 C7.13999998,14.24 3.99999997,11.39 3.99999997,8.49999997 C3.99999997,6.49999997 5.49999997,4.99999997 7.49999997,4.99999997 C9.03999999,4.99999997 10.54,5.98999997 11.07,7.35999998 L12.94,7.35999998 C13.46,5.98999997 14.96,4.99999997 16.5,4.99999997 C18.5,4.99999997 20,6.49999997 20,8.49999997 C20,11.39 16.86,14.24 12.1,18.55 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "favorite_border",
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

export const ActionsFavoriteBorderIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    