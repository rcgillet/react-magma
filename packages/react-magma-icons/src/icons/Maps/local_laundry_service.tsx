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
    "local_laundry_service"
  ],
  "paths": [
    {
      "d": "M9.54999999,16.45 C9.34999999,16.65 9.33999999,17 9.56999999,17.18 C11.14,18.38 13.4,18.26 14.83,16.83 C16.26,15.4 16.38,13.14 15.18,11.57 C15,11.34 14.65,11.34 14.45,11.55 L9.54999999,16.45 L9.54999999,16.45 Z M18,2.00999996 L5.99999997,1.99999996 C4.88999997,1.99999996 3.99999997,2.88999996 3.99999997,3.99999996 L3.99999997,20 C3.99999997,21.11 4.88999997,22 5.99999997,22 L18,22 C19.11,22 20,21.11 20,20 L20,3.99999996 C20,2.88999996 19.11,2.00999996 18,2.00999996 Z M9.99999999,3.99999997 C10.55,3.99999997 11,4.44999997 11,4.99999997 C11,5.54999997 10.55,5.99999997 9.99999999,5.99999997 C9.44999999,5.99999997 8.99999999,5.54999997 8.99999999,4.99999997 C8.99999999,4.44999997 9.44999999,3.99999997 9.99999999,3.99999997 Z M6.99999997,3.99999997 C7.54999998,3.99999997 7.99999997,4.44999997 7.99999997,4.99999997 C7.99999997,5.54999997 7.54999998,5.99999997 6.99999997,5.99999997 C6.44999998,5.99999997 5.99999997,5.54999997 5.99999997,4.99999997 C5.99999997,4.44999997 6.44999998,3.99999997 6.99999997,3.99999997 Z M12,20 C8.68999999,20 5.99999997,17.31 5.99999997,14 C5.99999997,10.69 8.68999999,7.99999998 12,7.99999998 C15.31,7.99999998 18,10.69 18,14 C18,17.31 15.31,20 12,20 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "local_laundry_service",
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

export const MapsLocalLaundryServiceIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    