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
    "panorama_wide_angle"
  ],
  "paths": [
    {
      "d": "M12,5.99999998 C14.45,5.99999998 16.71,6.19999998 19.29,6.63999998 C19.76,8.41999999 20,10.22 20,12 C20,13.78 19.76,15.58 19.29,17.36 C16.71,17.8 14.45,18 12,18 C9.54999999,18 7.28999998,17.8 4.70999997,17.36 C4.23999997,15.58 3.99999997,13.78 3.99999997,12 C3.99999997,10.22 4.23999997,8.41999999 4.70999997,6.63999998 C7.28999998,6.19999998 9.54999999,5.99999998 12,5.99999998 M12,3.99999997 C9.26999999,3.99999997 6.77999998,4.23999997 4.04999997,4.71999997 L3.11999996,4.87999997 L2.86999996,5.77999997 C2.28999996,7.84999998 1.99999996,9.92999999 1.99999996,12 C1.99999996,14.07 2.28999996,16.15 2.86999996,18.22 L3.11999996,19.11 L4.04999997,19.27 C6.77999998,19.76 9.26999999,20 12,20 C14.73,20 17.22,19.76 19.95,19.28 L20.88,19.12 L21.13,18.23 C21.71,16.15 22,14.07 22,12 C22,9.92999999 21.71,7.84999998 21.13,5.77999997 L20.88,4.88999997 L19.95,4.72999997 C17.22,4.23999997 14.73,3.99999997 12,3.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "panorama_wide_angle",
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

export const ImagePanoramaWideAngleIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    