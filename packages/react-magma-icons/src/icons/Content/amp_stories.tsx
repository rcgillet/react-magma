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
    "amp_stories"
  ],
  "paths": [
    {
      "d": "M16,3.99999997 C16.55,3.99999997 17,4.44999997 17,4.99999997 L17,4.99999997 L17,18 C17,18.55 16.55,19 16,19 L16,19 L7.99999998,19 C7.44999998,19 6.99999998,18.55 6.99999998,18 L6.99999998,18 L6.99999998,4.99999997 C6.99999998,4.44999997 7.44999998,3.99999997 7.99999998,3.99999997 L7.99999998,3.99999997 Z M3.99999996,5.99999997 C4.54999997,5.99999997 4.99999996,6.44999998 4.99999996,6.99999997 L4.99999996,6.99999997 L4.99999996,16 C4.99999996,16.55 4.54999997,17 3.99999996,17 C3.44999996,17 2.99999996,16.55 2.99999996,16 L2.99999996,16 L2.99999996,6.99999997 C2.99999996,6.44999998 3.44999996,5.99999997 3.99999996,5.99999997 Z M20,5.99999997 C20.55,5.99999997 21,6.44999998 21,6.99999997 L21,6.99999997 L21,16 C21,16.55 20.55,17 20,17 C19.45,17 19,16.55 19,16 L19,16 L19,6.99999997 C19,6.44999998 19.45,5.99999997 20,5.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "amp_stories",
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

export const ContentAmpStoriesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    