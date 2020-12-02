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
    "present_to_all"
  ],
  "paths": [
    {
      "d": "M21,2.99999996 L2.99999995,2.99999996 C1.88999996,2.99999996 0.999999954,3.88999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.11 1.88999996,21 2.99999995,21 L21,21 C22.11,21 23,20.11 23,19 L23,4.99999996 C23,3.88999997 22.11,2.99999996 21,2.99999996 Z M20,19.02 L3.99999996,19.02 C3.44999996,19.02 2.99999996,18.57 2.99999996,18.02 L2.99999996,5.97999997 C2.99999996,5.42999997 3.44999996,4.97999997 3.99999996,4.97999997 L20,4.97999997 C20.55,4.97999997 21,5.42999997 21,5.97999997 L21,18.02 C21,18.57 20.55,19.02 20,19.02 Z M9.99999998,12 L7.99999998,12 L11.65,8.34999998 C11.85,8.14999998 12.16,8.14999998 12.36,8.34999998 L16,12 L14,12 L14,16 L9.99999998,16 L9.99999998,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "present_to_all",
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

export const CommunicationPresentToAllIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    