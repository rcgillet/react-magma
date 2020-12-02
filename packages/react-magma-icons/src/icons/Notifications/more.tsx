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
  title: ['more'],
  paths: [
    {
      d:
        'M22,2.99999996 L6.99999998,2.99999996 C6.30999998,2.99999996 5.76999997,3.34999996 5.40999997,3.87999997 L0.369999952,11.45 C0.149999951,11.79 0.149999951,12.22 0.369999952,12.56 L5.40999997,20.12 C5.76999997,20.64 6.37999998,21 7.06999998,21 L22,21 C23.1,21 24.0000001,20.1 24.0000001,19 L24.0000001,4.99999996 C24.0000001,3.89999997 23.1,2.99999996 22,2.99999996 Z M8.99999998,13.5 C8.16999998,13.5 7.49999998,12.83 7.49999998,12 C7.49999998,11.17 8.16999998,10.5 8.99999998,10.5 C9.82999999,10.5 10.5,11.17 10.5,12 C10.5,12.83 9.82999999,13.5 8.99999998,13.5 Z M14,13.5 C13.17,13.5 12.5,12.83 12.5,12 C12.5,11.17 13.17,10.5 14,10.5 C14.83,10.5 15.5,11.17 15.5,12 C15.5,12.83 14.83,13.5 14,13.5 Z M19,13.5 C18.17,13.5 17.5,12.83 17.5,12 C17.5,11.17 18.17,10.5 19,10.5 C19.83,10.5 20.5,11.17 20.5,12 C20.5,12.83 19.83,13.5 19,13.5 Z',
      id: 'NotificationsMoreIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'more',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsMoreIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsMoreIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsMoreIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsMoreIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
