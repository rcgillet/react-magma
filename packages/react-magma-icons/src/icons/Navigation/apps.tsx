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
    "apps"
  ],
  "paths": [
    {
      "d": "M3.99999997,7.99999997 L7.99999997,7.99999997 L7.99999997,3.99999997 L3.99999997,3.99999997 L3.99999997,7.99999997 Z M9.99999999,20 L14,20 L14,16 L9.99999999,16 L9.99999999,20 Z M3.99999997,20 L7.99999997,20 L7.99999997,16 L3.99999997,16 L3.99999997,20 Z M3.99999997,14 L7.99999997,14 L7.99999997,9.99999999 L3.99999997,9.99999999 L3.99999997,14 Z M9.99999999,14 L14,14 L14,9.99999999 L9.99999999,9.99999999 L9.99999999,14 Z M16,3.99999997 L16,7.99999997 L20,7.99999997 L20,3.99999997 L16,3.99999997 Z M9.99999999,7.99999997 L14,7.99999997 L14,3.99999997 L9.99999999,3.99999997 L9.99999999,7.99999997 Z M16,14 L20,14 L20,9.99999999 L16,9.99999999 L16,14 Z M16,20 L20,20 L20,16 L16,16 L16,20 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "apps",
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

export const NavigationAppsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    