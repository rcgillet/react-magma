import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['perm_scan_wifi'],
  paths: [
    {
      d:
        'M12,2.99999996 C7.40999998,2.99999996 3.85999997,4.52999997 0.889999954,6.58999998 C0.399999952,6.91999998 0.299999951,7.58999998 0.669999953,8.04999998 L10.45,20.09 C11.25,21.07 12.75,21.08 13.55,20.09 L23.33,8.06999998 C23.7,7.60999998 23.6,6.93999998 23.11,6.60999998 C20.14,4.53999997 16.59,2.99999996 12,2.99999996 Z M12,16 C11.45,16 11,15.55 11,15 L11,11 C11,10.45 11.45,9.99999999 12,9.99999999 C12.55,9.99999999 13,10.45 13,11 L13,15 C13,15.55 12.55,16 12,16 Z M11,7.99999998 L11,5.99999998 L13,5.99999998 L13,7.99999998 L11,7.99999998 Z',
      id: 'ActionsPermScanWifiIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_scan_wifi',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermScanWifiIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermScanWifiIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermScanWifiIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermScanWifiIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
