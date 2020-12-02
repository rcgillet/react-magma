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
    "crop_original"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,5.99999997 C4.99999997,5.44999997 5.44999997,4.99999997 5.99999997,4.99999997 L18,4.99999997 C18.55,4.99999997 19,5.44999997 19,5.99999997 L19,18 C19,18.55 18.55,19 18,19 Z M13.56,12.81 L11.21,15.83 L9.64999999,13.95 C9.44999999,13.7 9.06999999,13.71 8.86999999,13.96 L7.12999998,16.19 C6.86999998,16.52 7.10999998,17 7.51999998,17 L16.5,17 C16.91,17 17.15,16.53 16.9,16.2 L14.35,12.81 C14.16,12.55 13.76,12.55 13.56,12.81 L13.56,12.81 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "crop_original",
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

export const ImageCropOriginalIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    