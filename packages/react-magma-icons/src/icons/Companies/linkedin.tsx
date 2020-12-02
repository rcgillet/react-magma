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
    "linkedin"
  ],
  "paths": [
    {
      "d": "M6.54427083,8.2109375 L6.54427083,21.1145833 L2.24739583,21.1145833 L2.24739583,8.2109375 L6.54427083,8.2109375 Z M6.81770833,4.2265625 C6.82638889,4.86024306 6.60720486,5.38975694 6.16015625,5.81510417 C5.71310764,6.24045139 5.125,6.453125 4.39583333,6.453125 L4.36979167,6.453125 C3.65798611,6.453125 3.08506944,6.24045139 2.65104167,5.81510417 C2.21701389,5.38975694 2,4.86024306 2,4.2265625 C2,3.58420139 2.22352431,3.05251736 2.67057292,2.63151042 C3.11762153,2.21050347 3.70138889,2 4.421875,2 C5.14236111,2 5.71961806,2.21050347 6.15364583,2.63151042 C6.58767361,3.05251736 6.80902778,3.58420139 6.81770833,4.2265625 Z M22,13.71875 L22,21.1145833 L17.7161458,21.1145833 L17.7161458,14.2135417 C17.7161458,13.3020833 17.5403646,12.5881076 17.1888021,12.0716146 C16.8372396,11.5551215 16.2881944,11.296875 15.5416667,11.296875 C14.9947917,11.296875 14.5368924,11.4466146 14.1679688,11.7460938 C13.7990451,12.0455729 13.5234375,12.4166667 13.3411458,12.859375 C13.2456597,13.1197917 13.1979167,13.4713542 13.1979167,13.9140625 L13.1979167,21.1145833 L8.9140625,21.1145833 C8.93142361,17.6510417 8.94010417,14.8428819 8.94010417,12.6901042 C8.94010417,10.5373264 8.93576389,9.25260417 8.92708333,8.8359375 L8.9140625,8.2109375 L13.1979167,8.2109375 L13.1979167,10.0859375 L13.171875,10.0859375 C13.3454861,9.80815972 13.5234375,9.56510417 13.7057292,9.35677083 C13.8880208,9.1484375 14.1332465,8.92274306 14.4414062,8.6796875 C14.749566,8.43663194 15.1271701,8.24782986 15.5742188,8.11328125 C16.0212674,7.97873264 16.5182292,7.91145833 17.0651042,7.91145833 C18.5494792,7.91145833 19.7430556,8.40407986 20.6458333,9.38932292 C21.5486111,10.374566 22,11.8177083 22,13.71875 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "linkedin",
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

export const CompaniesLinkedinIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    