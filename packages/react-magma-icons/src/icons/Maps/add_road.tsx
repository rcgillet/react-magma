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
    "add_road"
  ],
  "paths": [
    {
      "d": "M19,15 L19.116199,15.0067602 C19.6119898,15.0647959 20,15.4892857 20,16 L20,16 L20,18 L22,18 C22.55,18 23,18.45 23,19 L23,19 L22.9932398,19.116199 C22.9352041,19.6119898 22.5107143,20 22,20 L22,20 L20,20 L20,22 C20,22.55 19.55,23 19,23 L19,23 L18.883801,22.9932398 C18.3880102,22.9352041 18,22.5107143 18,22 L18,22 L18,20 L16,20 C15.45,20 15,19.55 15,19 L15,19 L15.0067602,18.883801 C15.0647959,18.3880102 15.4892857,18 16,18 L16,18 L18,18 L18,16 C18,15.45 18.45,15 19,15 L19,15 Z M4.99999997,3.99999997 L5.11619895,4.00676017 C5.61198977,4.06479589 5.99999997,4.48928568 5.99999997,4.99999997 L5.99999997,4.99999997 L5.99999997,19 C5.99999997,19.55 5.54999997,20 4.99999997,20 L4.99999997,20 L4.88380099,19.9932398 C4.38801017,19.9352041 3.99999997,19.5107143 3.99999997,19 L3.99999997,19 L3.99999997,4.99999997 C3.99999997,4.44999997 4.44999997,3.99999997 4.99999997,3.99999997 L4.99999997,3.99999997 Z M12,16 L12.116199,16.0067602 C12.6119898,16.0647959 13,16.4892857 13,17 L13,17 L13,19 C13,19.55 12.55,20 12,20 L12,20 L11.883801,19.9932398 C11.3880102,19.9352041 11,19.5107143 11,19 L11,19 L11,17 C11,16.45 11.45,16 12,16 L12,16 Z M12,9.99999999 L12.116199,10.0067602 C12.6119898,10.0647959 13,10.4892857 13,11 L13,11 L13,13 C13,13.55 12.55,14 12,14 L12,14 L11.883801,13.9932398 C11.3880102,13.9352041 11,13.5107143 11,13 L11,13 L11,11 C11,10.45 11.45,9.99999999 12,9.99999999 L12,9.99999999 Z M19,3.99999997 L19.116199,4.00676017 C19.6119898,4.06479589 20,4.48928568 20,4.99999997 L20,4.99999997 L20,12 C20,12.55 19.55,13 19,13 L19,13 L18.883801,12.9932398 C18.3880102,12.9352041 18,12.5107143 18,12 L18,12 L18,4.99999997 C18,4.44999997 18.45,3.99999997 19,3.99999997 L19,3.99999997 Z M12,3.99999997 L12.116199,4.00676017 C12.6119898,4.06479589 13,4.48928568 13,4.99999997 L13,4.99999997 L13,6.99999997 C13,7.54999998 12.55,7.99999997 12,7.99999997 L12,7.99999997 L11.883801,7.99323976 C11.3880102,7.93520405 11,7.51071427 11,6.99999997 L11,6.99999997 L11,4.99999997 C11,4.44999997 11.45,3.99999997 12,3.99999997 L12,3.99999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "add_road",
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

export const MapsAddRoadIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    