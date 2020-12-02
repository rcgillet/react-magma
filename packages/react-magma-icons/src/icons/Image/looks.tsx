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
    "looks"
  ],
  "paths": [
    {
      "d": "M12,9.99999999 C8.52999999,9.99999999 5.63999997,12.54 5.08999997,15.86 C4.98999997,16.46 5.47999997,17 6.08999998,17 C6.57999998,17 6.98999998,16.64 7.06999998,16.15 C7.47999998,13.79 9.52999999,12 12,12 C14.47,12 16.52,13.79 16.93,16.15 C17.01,16.64 17.42,17 17.91,17 C18.52,17 19,16.46 18.9,15.86 C18.36,12.54 15.47,9.99999999 12,9.99999999 Z M12,5.99999998 C6.29999998,5.99999998 1.60999996,10.34 1.04999995,15.9 C0.999999954,16.49 1.45999996,17 2.05999996,17 C2.56999996,17 2.99999996,16.62 3.04999996,16.12 C3.48999996,11.57 7.33999998,7.99999998 12,7.99999998 C16.66,7.99999998 20.51,11.57 20.96,16.12 C21.01,16.62 21.44,17 21.95,17 C22.54,17 23.01,16.49 22.95,15.9 C22.39,10.34 17.7,5.99999998 12,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "looks",
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

export const ImageLooksIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    