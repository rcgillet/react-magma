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
    "create_new_folder"
  ],
  "paths": [
    {
      "d": "M20,5.99999997 L12,5.99999997 L10.59,4.58999997 C10.21,4.20999997 9.69999999,3.99999997 9.16999999,3.99999997 L3.99999996,3.99999997 C2.88999996,3.99999997 2.00999996,4.88999997 2.00999996,5.99999997 L1.99999996,18 C1.99999996,19.11 2.88999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,7.99999997 C22,6.89999998 21.1,5.99999997 20,5.99999997 Z M18,14 L16,14 L16,16 C16,16.55 15.55,17 15,17 C14.45,17 14,16.55 14,16 L14,14 L12,14 C11.45,14 11,13.55 11,13 C11,12.45 11.45,12 12,12 L14,12 L14,9.99999999 C14,9.44999999 14.45,8.99999999 15,8.99999999 C15.55,8.99999999 16,9.44999999 16,9.99999999 L16,12 L18,12 C18.55,12 19,12.45 19,13 C19,13.55 18.55,14 18,14 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "create_new_folder",
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

export const FileCreateNewFolderIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    