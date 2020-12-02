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
    "more_horiz"
  ],
  "paths": [
    {
      "d": "M5.99999997,9.99999999 C4.89999997,9.99999999 3.99999997,10.9 3.99999997,12 C3.99999997,13.1 4.89999997,14 5.99999997,14 C7.09999998,14 7.99999997,13.1 7.99999997,12 C7.99999997,10.9 7.09999998,9.99999999 5.99999997,9.99999999 Z M18,9.99999999 C16.9,9.99999999 16,10.9 16,12 C16,13.1 16.9,14 18,14 C19.1,14 20,13.1 20,12 C20,10.9 19.1,9.99999999 18,9.99999999 Z M12,9.99999999 C10.9,9.99999999 9.99999999,10.9 9.99999999,12 C9.99999999,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,9.99999999 12,9.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "more_horiz",
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

export const NavigationMoreHorizIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    