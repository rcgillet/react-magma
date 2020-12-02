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
    "pregnant_woman"
  ],
  "paths": [
    {
      "d": "M8.99999999,3.99999996 C8.99999999,2.88999996 9.88999999,1.99999996 11,1.99999996 C12.11,1.99999996 13,2.88999996 13,3.99999996 C13,5.10999997 12.11,5.99999996 11,5.99999996 C9.88999999,5.99999996 8.99999999,5.10999997 8.99999999,3.99999996 Z M16,13 C15.99,11.66 15.17,10.49 14,9.99999999 C14,8.28999998 12.58,6.91999998 10.84,6.99999998 C9.21999999,7.08999998 7.99999998,8.53999999 7.99999998,10.16 L7.99999998,16 C7.99999998,16.55 8.44999999,17 8.99999998,17 L9.99999998,17 L9.99999998,20.5 C9.99999998,21.33 10.67,22 11.5,22 C12.33,22 13,21.33 13,20.5 L13,17 L15,17 C15.55,17 16,16.55 16,16 L16,13 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "pregnant_woman",
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

export const ActionsPregnantWomanIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    