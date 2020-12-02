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
    "local_pizza"
  ],
  "paths": [
    {
      "d": "M12,1.99999996 C9.00999999,1.99999996 6.27999998,3.07999996 4.16999997,4.87999997 C3.45999996,5.48999997 3.30999996,6.52999998 3.76999997,7.33999998 L11.13,20.45 C11.51,21.13 12.49,21.13 12.87,20.45 L20.23,7.33999998 C20.69,6.52999998 20.54,5.47999997 19.83,4.87999997 C17.73,3.08999996 14.99,1.99999996 12,1.99999996 Z M6.99999998,6.99999997 C6.99999998,5.89999997 7.89999998,4.99999997 8.99999998,4.99999997 C10.1,4.99999997 11,5.89999997 11,6.99999997 C11,8.09999998 10.1,8.99999997 8.99999998,8.99999997 C7.89999998,8.99999997 6.99999998,8.09999998 6.99999998,6.99999997 Z M12,15 C10.9,15 9.99999999,14.1 9.99999999,13 C9.99999999,11.9 10.9,11 12,11 C13.1,11 14,11.9 14,13 C14,14.1 13.1,15 12,15 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_pizza",
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

export const MapsLocalPizzaIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    