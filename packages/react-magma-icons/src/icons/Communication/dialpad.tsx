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
    "dialpad"
  ],
  "paths": [
    {
      "d": "M12,19 C10.9,19 9.99999999,19.9 9.99999999,21 C9.99999999,22.1 10.9,23 12,23 C13.1,23 14,22.1 14,21 C14,19.9 13.1,19 12,19 Z M5.99999997,0.999999954 C4.89999997,0.999999954 3.99999997,1.89999996 3.99999997,2.99999995 C3.99999997,4.09999997 4.89999997,4.99999995 5.99999997,4.99999995 C7.09999998,4.99999995 7.99999997,4.09999997 7.99999997,2.99999995 C7.99999997,1.89999996 7.09999998,0.999999954 5.99999997,0.999999954 Z M5.99999997,6.99999998 C4.89999997,6.99999998 3.99999997,7.89999998 3.99999997,8.99999998 C3.99999997,10.1 4.89999997,11 5.99999997,11 C7.09999998,11 7.99999997,10.1 7.99999997,8.99999998 C7.99999997,7.89999998 7.09999998,6.99999998 5.99999997,6.99999998 Z M5.99999997,13 C4.89999997,13 3.99999997,13.9 3.99999997,15 C3.99999997,16.1 4.89999997,17 5.99999997,17 C7.09999998,17 7.99999997,16.1 7.99999997,15 C7.99999997,13.9 7.09999998,13 5.99999997,13 Z M18,4.99999995 C19.1,4.99999995 20,4.09999997 20,2.99999995 C20,1.89999996 19.1,0.999999954 18,0.999999954 C16.9,0.999999954 16,1.89999996 16,2.99999995 C16,4.09999997 16.9,4.99999995 18,4.99999995 Z M12,13 C10.9,13 9.99999999,13.9 9.99999999,15 C9.99999999,16.1 10.9,17 12,17 C13.1,17 14,16.1 14,15 C14,13.9 13.1,13 12,13 Z M18,13 C16.9,13 16,13.9 16,15 C16,16.1 16.9,17 18,17 C19.1,17 20,16.1 20,15 C20,13.9 19.1,13 18,13 Z M18,6.99999998 C16.9,6.99999998 16,7.89999998 16,8.99999998 C16,10.1 16.9,11 18,11 C19.1,11 20,10.1 20,8.99999998 C20,7.89999998 19.1,6.99999998 18,6.99999998 Z M12,6.99999998 C10.9,6.99999998 9.99999999,7.89999998 9.99999999,8.99999998 C9.99999999,10.1 10.9,11 12,11 C13.1,11 14,10.1 14,8.99999998 C14,7.89999998 13.1,6.99999998 12,6.99999998 Z M12,0.999999954 C10.9,0.999999954 9.99999999,1.89999996 9.99999999,2.99999995 C9.99999999,4.09999997 10.9,4.99999995 12,4.99999995 C13.1,4.99999995 14,4.09999997 14,2.99999995 C14,1.89999996 13.1,0.999999954 12,0.999999954 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "dialpad",
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

export const CommunicationDialpadIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    