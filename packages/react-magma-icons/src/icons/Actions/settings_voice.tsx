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
    "settings_voice"
  ],
  "paths": [
    {
      "d": "M6.99999998,24 L8.99999998,24 L8.99999998,22 L6.99999998,22 L6.99999998,24 Z M12,13 C13.66,13 14.99,11.66 14.99,9.99999995 L15,3.99999995 C15,2.33999996 13.66,0.999999954 12,0.999999954 C10.34,0.999999954 8.99999999,2.33999996 8.99999999,3.99999995 L8.99999999,9.99999995 C8.99999999,11.66 10.34,13 12,13 Z M11,24 L13,24 L13,22 L11,22 L11,24 Z M15,24 L17,24 L17,22 L15,22 L15,24 Z M18.08,9.99999999 C17.66,9.99999999 17.31,10.3 17.25,10.71 C16.88,13.32 14.53,15.1 12,15.1 C9.46999999,15.1 7.11999998,13.33 6.74999998,10.71 C6.68999998,10.3 6.32999998,9.99999999 5.91999997,9.99999999 C5.39999997,9.99999999 4.99999997,10.46 5.06999997,10.97 C5.52999997,13.93 8.02999998,16.27 11,16.72 L11,19 C11,19.55 11.45,20 12,20 C12.55,20 13,19.55 13,19 L13,16.72 C15.96,16.28 18.47,13.93 18.93,10.97 C19,10.46 18.6,9.99999999 18.08,9.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "settings_voice",
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

export const ActionsSettingsVoiceIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    