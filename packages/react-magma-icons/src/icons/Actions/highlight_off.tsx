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
  title: ['highlight_off'],
  paths: [
    {
      d:
        'M13.89,8.69999999 L12,10.59 L10.11,8.69999999 C9.71999999,8.30999998 9.08999999,8.30999998 8.69999999,8.69999999 C8.30999998,9.08999999 8.30999998,9.71999999 8.69999999,10.11 L10.59,12 L8.69999999,13.89 C8.30999998,14.28 8.30999998,14.91 8.69999999,15.3 C9.08999999,15.69 9.71999999,15.69 10.11,15.3 L12,13.41 L13.89,15.3 C14.28,15.69 14.91,15.69 15.3,15.3 C15.69,14.91 15.69,14.28 15.3,13.89 L13.41,12 L15.3,10.11 C15.69,9.71999999 15.69,9.08999999 15.3,8.69999999 C14.91,8.31999998 14.27,8.31999998 13.89,8.69999999 Z M12,1.99999996 C6.46999998,1.99999996 1.99999996,6.46999998 1.99999996,12 C1.99999996,17.53 6.46999998,22 12,22 C17.53,22 22,17.53 22,12 C22,6.46999998 17.53,1.99999996 12,1.99999996 Z M12,20 C7.58999998,20 3.99999997,16.41 3.99999997,12 C3.99999997,7.58999998 7.58999998,3.99999997 12,3.99999997 C16.41,3.99999997 20,7.58999998 20,12 C20,16.41 16.41,20 12,20 Z',
      id: 'ActionsHighlightOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'highlight_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsHighlightOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsHighlightOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsHighlightOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsHighlightOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
