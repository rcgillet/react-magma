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
  title: ['preview'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.11,2.99999996 19,2.99999996 Z M19,19 L4.99999997,19 L4.99999997,6.99999998 L19,6.99999998 L19,19 Z M13.5,13 C13.5,13.83 12.83,14.5 12,14.5 C11.17,14.5 10.5,13.83 10.5,13 C10.5,12.17 11.17,11.5 12,11.5 C12.83,11.5 13.5,12.17 13.5,13 Z M12,8.99999999 C9.26999999,8.99999999 6.93999998,10.66 5.99999998,13 C6.93999998,15.34 9.26999999,17 12,17 C14.73,17 17.06,15.34 18,13 C17.06,10.66 14.73,8.99999999 12,8.99999999 Z M12,15.5 C10.62,15.5 9.49999999,14.38 9.49999999,13 C9.49999999,11.62 10.62,10.5 12,10.5 C13.38,10.5 14.5,11.62 14.5,13 C14.5,14.38 13.38,15.5 12,15.5 Z',
      id: 'ActionsPreviewIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'preview',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPreviewIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPreviewIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPreviewIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPreviewIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
