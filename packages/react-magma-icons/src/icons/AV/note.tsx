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
    "note"
  ],
  "paths": [
    {
      "d": "M21.41,9.40999999 L16.58,4.57999997 C16.21,4.20999997 15.7,3.99999997 15.17,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 1.99999996,4.89999997 1.99999996,5.99999997 L1.99999996,18.01 C1.99999996,19.11 2.88999996,20 3.98999997,20 L20,20 C21.1,20 22,19.1 22,18 L22,10.83 C22,10.3 21.79,9.78999999 21.41,9.40999999 L21.41,9.40999999 Z M15,5.49999997 L20.5,11 L16,11 C15.45,11 15,10.55 15,9.99999997 L15,5.49999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "note",
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

export const AVNoteIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    