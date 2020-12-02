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
    "call_missed"
  ],
  "paths": [
    {
      "d": "M18.89,7.69999998 L12,14.59 L6.40999998,8.99999998 L9.99999996,8.99999998 C10.55,8.99999998 11,8.54999999 11,7.99999998 C11,7.44999998 10.55,6.99999998 9.99999996,6.99999998 L3.99999996,6.99999998 C3.44999996,6.99999998 2.99999996,7.44999998 2.99999996,7.99999998 L2.99999996,14 C2.99999996,14.55 3.44999996,15 3.99999996,15 C4.54999997,15 4.99999996,14.55 4.99999996,14 L4.99999996,10.41 L11.29,16.7 C11.68,17.09 12.31,17.09 12.7,16.7 L20.29,9.10999999 C20.68,8.71999999 20.68,8.08999998 20.29,7.69999998 C19.91,7.31999998 19.27,7.31999998 18.89,7.69999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "call_missed",
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

export const CommunicationCallMissedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    