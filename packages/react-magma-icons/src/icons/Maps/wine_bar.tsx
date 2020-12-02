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
    "wine_bar"
  ],
  "paths": [
    {
      "d": "M6.99999997,2.99999996 C6.44999998,2.99999996 5.99999997,3.44999996 5.99999997,3.99999996 L5.99999997,8.99999996 C5.99999997,11.97 8.15999998,14.43 11,14.91 L11,19 L8.99999997,19 C8.44999999,19 7.99999997,19.45 7.99999997,20 L7.99999997,20 C7.99999997,20.55 8.44999999,21 8.99999997,21 L15,21 C15.55,21 16,20.55 16,20 L16,20 C16,19.45 15.55,19 15,19 L13,19 L13,14.91 C15.84,14.43 18,11.97 18,8.99999996 L18,3.99999996 C18,3.44999996 17.55,2.99999996 17,2.99999996 L6.99999997,2.99999996 Z M16,7.99999997 L7.99999998,7.99999997 L7.99999998,4.99999997 L16,4.99999997 C16,4.99999997 16,7.99999997 16,7.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wine_bar",
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

export const MapsWineBarIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    