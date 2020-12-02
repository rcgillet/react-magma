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
    "add_location"
  ],
  "paths": [
    {
      "d": "M13,6.99999998 C13,6.44999998 12.56,5.99999998 12,5.99999998 C11.45,5.99999998 11,6.43999998 11,6.99999998 L11,8.99999998 L8.99999998,8.99999998 C8.44999999,8.99999998 7.99999998,9.43999999 7.99999998,9.99999998 C7.99999998,10.55 8.43999999,11 8.99999998,11 L11,11 L11,13 C11,13.55 11.44,14 12,14 C12.55,14 13,13.56 13,13 L13,11 L15,11 C15.55,11 16,10.56 16,9.99999998 C16,9.44999999 15.56,8.99999998 15,8.99999998 L13,8.99999998 L13,6.99999998 Z M12,1.99999996 C16.2,1.99999996 20,5.21999997 20,10.2 C20,13.38 17.55,17.12 12.66,21.43 C12.28,21.76 11.71,21.76 11.33,21.43 C6.44999998,17.12 3.99999997,13.38 3.99999997,10.2 C3.99999997,5.21999997 7.79999998,1.99999996 12,1.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "add_location",
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

export const MapsAddLocationIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    