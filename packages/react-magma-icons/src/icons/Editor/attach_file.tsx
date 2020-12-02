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
  title: ['attach_file'],
  paths: [
    {
      d:
        'M16.5,6.74999998 L16.5,17.33 C16.5,19.42 14.97,21.28 12.89,21.48 C10.5,21.71 8.49999998,19.84 8.49999998,17.5 L8.49999998,5.13999997 C8.49999998,3.82999997 9.43999999,2.63999996 10.74,2.50999996 C12.24,2.35999996 13.5,3.52999996 13.5,4.99999997 L13.5,15.5 C13.5,16.05 13.05,16.5 12.5,16.5 C11.95,16.5 11.5,16.05 11.5,15.5 L11.5,6.74999998 C11.5,6.33999998 11.16,5.99999997 10.75,5.99999997 C10.34,5.99999997 9.99999998,6.33999998 9.99999998,6.74999998 L9.99999998,15.36 C9.99999998,16.67 10.94,17.86 12.24,17.99 C13.74,18.14 15,16.97 15,15.5 L15,5.16999997 C15,3.07999996 13.47,1.21999996 11.39,1.01999995 C9.00999999,0.789999953 6.99999998,2.65999996 6.99999998,4.99999997 L6.99999998,17.27 C6.99999998,20.14 9.09999999,22.71 11.96,22.98 C15.25,23.28 18,20.72 18,17.5 L18,6.74999998 C18,6.33999998 17.66,5.99999997 17.25,5.99999997 C16.84,5.99999997 16.5,6.33999998 16.5,6.74999998 Z',
      id: 'EditorAttachFileIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'attach_file',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorAttachFileIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorAttachFileIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorAttachFileIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorAttachFileIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
