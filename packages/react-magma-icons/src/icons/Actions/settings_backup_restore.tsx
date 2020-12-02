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
    "settings_backup_restore"
  ],
  "paths": [
    {
      "d": "M14,12 C14,10.9 13.1,9.99999999 12,9.99999999 C10.9,9.99999999 9.99999999,10.9 9.99999999,12 C9.99999999,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 Z M12.26,2.99999996 C7.16999998,2.85999996 2.99999996,6.94999998 2.99999996,12 L1.20999996,12 C0.759999953,12 0.539999952,12.54 0.859999954,12.85 L3.64999997,15.64 C3.84999997,15.84 4.15999997,15.84 4.35999997,15.64 L7.14999998,12.85 C7.45999998,12.54 7.23999998,12 6.78999998,12 L4.99999997,12 C4.99999997,8.09999998 8.17999998,4.94999997 12.1,4.99999997 C15.82,5.04999997 18.95,8.17999998 19,11.9 C19.05,15.81 15.9,19 12,19 C10.75,19 9.57999999,18.66 8.55999999,18.09 C8.16999998,17.87 7.68999998,17.95 7.37999998,18.27 C6.91999998,18.73 7.00999998,19.52 7.57999998,19.84 C8.88999999,20.57 10.39,21 12,21 C17.05,21 21.14,16.83 21,11.74 C20.87,7.04999998 16.95,3.12999996 12.26,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "settings_backup_restore",
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

export const ActionsSettingsBackupRestoreIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    