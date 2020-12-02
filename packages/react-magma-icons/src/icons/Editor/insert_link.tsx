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
  title: ['insert_link'],
  paths: [
    {
      d:
        'M3.95999997,11.38 C4.23999997,9.90999999 5.61999997,8.89999999 7.11999998,8.89999999 L10.05,8.89999999 C10.57,8.89999999 11,8.46999999 11,7.94999998 C11,7.42999998 10.57,6.99999998 10.05,6.99999998 L7.21999998,6.99999998 C4.60999997,6.99999998 2.27999996,8.90999999 2.02999996,11.51 C1.73999996,14.49 4.07999997,17 6.99999998,17 L10.05,17 C10.57,17 11,16.57 11,16.05 C11,15.53 10.57,15.1 10.05,15.1 L6.99999998,15.1 C5.08999997,15.1 3.57999996,13.36 3.95999997,11.38 Z M8.99999998,13 L15,13 C15.55,13 16,12.55 16,12 C16,11.45 15.55,11 15,11 L8.99999998,11 C8.44999999,11 7.99999998,11.45 7.99999998,12 C7.99999998,12.55 8.44999999,13 8.99999998,13 Z M16.78,6.99999998 L13.95,6.99999998 C13.43,6.99999998 13,7.42999998 13,7.94999998 C13,8.46999999 13.43,8.89999999 13.95,8.89999999 L16.88,8.89999999 C18.38,8.89999999 19.76,9.90999999 20.04,11.38 C20.42,13.36 18.91,15.1 17,15.1 L13.95,15.1 C13.43,15.1 13,15.53 13,16.05 C13,16.57 13.43,17 13.95,17 L17,17 C19.92,17 22.26,14.49 21.98,11.51 C21.73,8.90999999 19.39,6.99999998 16.78,6.99999998 Z',
      id: 'EditorInsertLinkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'insert_link',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorInsertLinkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorInsertLinkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorInsertLinkIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorInsertLinkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
