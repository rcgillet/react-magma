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
    "shuffle"
  ],
  "paths": [
    {
      "d": "M10.59,9.16999999 L6.11999998,4.69999997 C5.72999997,4.30999997 5.09999997,4.30999997 4.70999997,4.69999997 C4.31999997,5.08999997 4.31999997,5.71999997 4.70999997,6.10999998 L9.16999999,10.57 L10.59,9.16999999 Z M15.35,4.84999997 L16.54,6.03999998 L4.69999997,17.88 C4.30999997,18.27 4.30999997,18.9 4.69999997,19.29 C5.08999997,19.68 5.71999997,19.68 6.10999998,19.29 L17.96,7.45999998 L19.15,8.64999999 C19.46,8.95999999 20,8.73999999 20,8.28999998 L20,4.49999997 C20,4.21999997 19.78,3.99999997 19.5,3.99999997 L15.71,3.99999997 C15.26,3.99999997 15.04,4.53999997 15.35,4.84999997 L15.35,4.84999997 Z M14.83,13.41 L13.42,14.82 L16.55,17.95 L15.35,19.15 C15.04,19.46 15.26,20 15.71,20 L19.5,20 C19.78,20 20,19.78 20,19.5 L20,15.71 C20,15.26 19.46,15.04 19.15,15.36 L17.96,16.55 L14.83,13.41 L14.83,13.41 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "shuffle",
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

export const AVShuffleIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    