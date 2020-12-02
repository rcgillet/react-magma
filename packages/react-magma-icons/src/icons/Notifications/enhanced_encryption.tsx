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
    "enhanced_encryption"
  ],
  "paths": [
    {
      "d": "M12,0.999999954 C14.76,0.999999954 17,3.23999996 17,5.99999995 L17,5.99999995 L17,7.99999995 L18,7.99999995 C19.1,7.99999995 20,8.89999999 20,9.99999995 L20,9.99999995 L20,20 C20,21.1 19.1,22 18,22 L18,22 L5.99999997,22 C4.89999997,22 3.99999997,21.1 3.99999997,20 L3.99999997,20 L3.99999997,9.99999995 C3.99999997,8.89999999 4.89999997,7.99999995 5.99999997,7.99999995 L5.99999997,7.99999995 L6.99999997,7.99999995 L6.99999997,5.99999995 C6.99999997,3.23999996 9.23999999,0.999999954 12,0.999999954 Z M12,11 C11.45,11 11,11.45 11,12 L11,12 L11,14 L8.99999998,14 C8.44999999,14 7.99999998,14.45 7.99999998,15 C7.99999998,15.55 8.44999999,16 8.99999998,16 L8.99999998,16 L11,16 L11,18 C11,18.55 11.45,19 12,19 C12.55,19 13,18.55 13,18 L13,18 L13,16 L15,16 C15.55,16 16,15.55 16,15 C16,14.45 15.55,14 15,14 L15,14 L13,14 L13,12 C13,11.45 12.55,11 12,11 Z M12,2.89999996 C10.29,2.89999996 8.89999999,4.28999997 8.89999999,5.99999997 L8.89999999,5.99999997 L8.89999999,7.99999998 L15.1,7.99999998 L15.1,5.99999997 C15.1,4.28999997 13.71,2.89999996 12,2.89999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "enhanced_encryption",
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

export const NotificationsEnhancedEncryptionIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    