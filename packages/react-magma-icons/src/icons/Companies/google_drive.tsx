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
    "google_drive"
  ],
  "paths": [
    {
      "d": "M10.9711082,14.5488733 L7.63837006,20.323667 L18.6665476,20.323667 L22,14.5488733 L10.9711082,14.5488733 Z M21.0543195,12.9117889 L15.3330952,3 L8.66619049,3 L14.388129,12.9117889 L21.0543195,12.9117889 Z M7.71908146,4.64065569 L2,14.5488733 L5.33345238,20.323667 L11.0525338,10.4154494 L7.71908146,4.64065569 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "google_drive",
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
          "id": "Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const CompaniesGoogleDriveIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    