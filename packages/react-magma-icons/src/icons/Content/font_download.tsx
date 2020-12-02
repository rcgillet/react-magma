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
  title: ['font_download'],
  paths: [
    {
      d:
        'M9.92999999,13.5 L14.07,13.5 L12,7.97999998 L9.92999999,13.5 Z M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L20,22 C21.1,22 22,21.1 22,20 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M15.71,17.88 L14.81,15.5 L9.16999999,15.5 L8.27999998,17.87 C8.13999998,18.25 7.77999998,18.5 7.36999998,18.5 C6.68999998,18.5 6.21999998,17.81 6.46999998,17.18 L10.72,6.36999998 C10.94,5.83999997 11.44,5.49999997 12,5.49999997 C12.56,5.49999997 13.06,5.83999997 13.27,6.36999998 L17.52,17.18 C17.77,17.81 17.3,18.5 16.62,18.5 C16.22,18.5 15.86,18.25 15.71,17.88 L15.71,17.88 Z',
      id: 'ContentFontDownloadIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'font_download',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentFontDownloadIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentFontDownloadIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentFontDownloadIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentFontDownloadIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
