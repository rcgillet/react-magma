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
    "play_for_work"
  ],
  "paths": [
    {
      "d": "M11,5.99999997 L11,10.59 L8.70999999,10.59 C8.25999998,10.59 8.03999998,11.13 8.35999998,11.44 L11.65,14.73 C11.85,14.93 12.16,14.93 12.36,14.73 L15.65,11.44 C15.96,11.13 15.74,10.59 15.3,10.59 L13,10.59 L13,5.99999997 C13,5.44999997 12.55,4.99999997 12,4.99999997 C11.45,4.99999997 11,5.44999997 11,5.99999997 Z M7.09999998,14 C6.48999998,14 5.98999997,14.55 6.10999998,15.15 C6.64999998,17.91 9.07999999,20 12,20 C14.92,20 17.35,17.91 17.89,15.15 C18.01,14.55 17.51,14 16.9,14 C16.41,14 16.02,14.35 15.92,14.83 C15.53,16.64 13.93,18 12,18 C10.07,18 8.46999999,16.64 8.08999998,14.83 C7.98999998,14.35 7.58999998,14 7.09999998,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "play_for_work",
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

export const ActionsPlayForWorkIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    