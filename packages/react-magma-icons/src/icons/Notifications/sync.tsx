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
  title: ['sync'],
  paths: [
    {
      d:
        'M11.52,4.31999997 L11.52,2.60159996 C11.52,2.16959996 11.0016,1.95839996 10.704,2.26559996 L8.01599998,4.94399997 C7.82399998,5.13599997 7.82399998,5.43359997 8.01599998,5.62559997 L10.6944,8.30399998 C11.0016,8.60159999 11.52,8.39039998 11.52,7.95839998 L11.52,6.23999998 C14.6976,6.23999998 17.28,8.82239999 17.28,12 C17.28,12.7584 17.136,13.4976 16.8576,14.16 C16.7136,14.5056 16.8192,14.8992 17.0784,15.1584 C17.568,15.648 18.3936,15.4752 18.6528,14.832 C19.008,13.9584 19.2,12.9984 19.2,12 C19.2,7.75679998 15.7632,4.31999997 11.52,4.31999997 Z M11.52,17.76 C8.34239998,17.76 5.75999997,15.1776 5.75999997,12 C5.75999997,11.2416 5.90399997,10.5024 6.18239998,9.83999999 C6.32639998,9.49439999 6.22079998,9.10079999 5.96159997,8.84159999 C5.47199997,8.35199998 4.64639997,8.52479999 4.38719997,9.16799999 C4.03199997,10.0416 3.83999997,11.0016 3.83999997,12 C3.83999997,16.2432 7.27679998,19.68 11.52,19.68 L11.52,21.3984 C11.52,21.8304 12.0384,22.0416 12.336,21.7344 L15.0144,19.056 C15.2064,18.864 15.2064,18.5664 15.0144,18.3744 L12.336,15.696 C12.0384,15.3984 11.52,15.6096 11.52,16.0416 L11.52,17.76 Z',
      id: 'NotificationsSyncIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sync',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsSyncIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsSyncIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsSyncIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsSyncIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
