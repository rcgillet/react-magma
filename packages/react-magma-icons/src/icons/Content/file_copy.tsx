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
    "file_copy"
  ],
  "paths": [
    {
      "d": "M15,0.999999954 L3.99999996,0.999999954 C2.89999996,0.999999954 1.99999996,1.89999996 1.99999996,2.99999995 L1.99999996,16 C1.99999996,16.55 2.44999996,17 2.99999996,17 C3.54999996,17 3.99999996,16.55 3.99999996,16 L3.99999996,3.99999995 C3.99999996,3.44999996 4.44999997,2.99999995 4.99999996,2.99999995 L15,2.99999995 C15.55,2.99999995 16,2.54999996 16,1.99999995 C16,1.44999996 15.55,0.999999954 15,0.999999954 Z M15.59,5.58999997 L20.42,10.42 C20.79,10.79 21,11.3 21,11.83 L21,21 C21,22.1 20.1,23 19,23 L7.98999998,23 C6.88999998,23 5.99999997,22.1 5.99999997,21 L6.00999998,6.99999997 C6.00999998,5.89999997 6.89999998,4.99999997 7.99999997,4.99999997 L14.17,4.99999997 C14.7,4.99999997 15.21,5.20999997 15.59,5.58999997 Z M15,12 L19.5,12 L14,6.49999998 L14,11 C14,11.55 14.45,12 15,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "file_copy",
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

export const ContentFileCopyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    