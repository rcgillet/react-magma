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
    "local_library"
  ],
  "paths": [
    {
      "d": "M12,11.55 C10.18,9.84999999 7.87999998,8.65999999 5.31999997,8.19999998 C4.10999997,7.98999998 2.99999996,8.94999999 2.99999996,10.18 L2.99999996,16.42 C2.99999996,18.1 3.71999997,18.98 4.70999997,19.11 C7.20999998,19.43 9.47999999,20.46 11.34,21.98 C11.69,22.27 12.26,22.3 12.61,22.02 C14.48,20.49 16.77,19.44 19.29,19.12 C20.23,18.99 21,18.06 21,17.1 L21,10.18 C21,8.94999999 19.89,7.98999998 18.68,8.19999998 C16.12,8.65999999 13.82,9.84999999 12,11.55 L12,11.55 Z M12,7.99999996 C13.66,7.99999996 15,6.65999998 15,4.99999996 C15,3.33999996 13.66,1.99999996 12,1.99999996 C10.34,1.99999996 8.99999999,3.33999996 8.99999999,4.99999996 C8.99999999,6.65999998 10.34,7.99999996 12,7.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_library",
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

export const MapsLocalLibraryIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    