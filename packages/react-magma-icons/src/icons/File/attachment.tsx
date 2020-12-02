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
    "attachment"
  ],
  "paths": [
    {
      "d": "M17.75,16 L7.16999998,16 C5.07999997,16 3.21999996,14.47 3.01999996,12.39 C2.78999996,10.01 4.65999997,7.99999998 6.99999998,7.99999998 L19.36,7.99999998 C20.67,7.99999998 21.86,8.93999999 21.99,10.24 C22.14,11.74 20.97,13 19.5,13 L8.99999999,13 C8.44999999,13 7.99999998,12.55 7.99999998,12 C7.99999998,11.45 8.44999999,11 8.99999999,11 L17.75,11 C18.16,11 18.5,10.66 18.5,10.25 C18.5,9.83999999 18.16,9.49999998 17.75,9.49999998 L9.13999999,9.49999998 C7.82999998,9.49999998 6.63999998,10.44 6.50999998,11.74 C6.35999998,13.24 7.52999998,14.5 8.99999999,14.5 L19.33,14.5 C21.42,14.5 23.28,12.97 23.48,10.89 C23.71,8.49999998 21.84,6.49999998 19.5,6.49999998 L7.22999998,6.49999998 C4.35999997,6.49999998 1.78999996,8.59999999 1.51999996,11.46 C1.21999996,14.75 3.77999997,17.5 6.99999998,17.5 L17.75,17.5 C18.16,17.5 18.5,17.16 18.5,16.75 C18.5,16.34 18.16,16 17.75,16 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "attachment",
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

export const FileAttachmentIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    