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
    "pause_presentation"
  ],
  "paths": [
    {
      "d": "M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M21,18 C21,18.55 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,18.55 2.99999996,18 L2.99999996,5.99999997 C2.99999996,5.44999997 3.44999996,4.99999997 3.99999996,4.99999997 L20,4.99999997 C20.55,4.99999997 21,5.44999997 21,5.99999997 L21,18 Z M9.99999999,7.99999998 C9.44999999,7.99999998 8.99999999,8.44999999 8.99999999,8.99999998 L8.99999999,15 C8.99999999,15.55 9.44999999,16 9.99999999,16 C10.55,16 11,15.55 11,15 L11,8.99999998 C11,8.44999999 10.55,7.99999998 9.99999999,7.99999998 Z M14,7.99999998 C13.45,7.99999998 13,8.44999999 13,8.99999998 L13,15 C13,15.55 13.45,16 14,16 C14.55,16 15,15.55 15,15 L15,8.99999998 C15,8.44999999 14.55,7.99999998 14,7.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "pause_presentation",
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

export const CommunicationPausePresentationIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    