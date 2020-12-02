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
    "add_alert"
  ],
  "paths": [
    {
      "d": "M12,23 C13.1,23 13.99,22.11 13.99,21.01 L10.01,21.01 C10.01,22.11 10.9,23 12,23 Z M19,17 L19,11 C19,7.64999998 16.64,4.84999997 13.5,4.16999997 L13.5,2.99999996 C13.5,2.16999996 12.83,1.49999996 12,1.49999996 C11.17,1.49999996 10.5,2.16999996 10.5,2.99999996 L10.5,4.16999997 C7.35999998,4.84999997 4.99999997,7.64999998 4.99999997,11 L4.99999997,17 L3.70999997,18.29 C3.07999996,18.92 3.51999996,20 4.40999997,20 L19.58,20 C20.47,20 20.92,18.92 20.29,18.29 L19,17 Z M15,13.01 L13,13.01 L13,15.01 C13,15.56 12.55,16.01 12,16.01 C11.45,16.01 11,15.56 11,15.01 L11,13.01 L8.99999998,13.01 C8.44999999,13.01 7.99999998,12.56 7.99999998,12.01 L7.99999998,12 C7.99999998,11.45 8.44999999,11 8.99999998,11 L11,11 L11,8.99999998 C11,8.44999999 11.45,7.99999998 12,7.99999998 C12.55,7.99999998 13,8.44999999 13,8.99999998 L13,11 L15,11 C15.55,11 16,11.45 16,12 L16,12.01 C16,12.56 15.55,13.01 15,13.01 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "add_alert",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const AlertAddAlertIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    