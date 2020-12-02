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
  title: ['book_online'],
  paths: [
    {
      d:
        'M13.35,20 L13.92,22 L4.99999996,22 C3.88999997,22 2.99999996,21.1 2.99999996,20 L3.00999996,5.99999996 C3.00999996,4.89999997 3.88999997,3.99999996 4.99999996,3.99999996 L5.99999996,3.99999996 L5.99999996,2.99999996 C5.99999996,2.44999996 6.44999998,1.99999996 6.99999996,1.99999996 L6.99999996,1.99999996 C7.54999998,1.99999996 7.99999996,2.44999996 7.99999996,2.99999996 L7.99999996,3.99999996 L16,3.99999996 L16,2.99999996 C16,2.44999996 16.45,1.99999996 17,1.99999996 L17,1.99999996 C17.55,1.99999996 18,2.44999996 18,2.99999996 L18,3.99999996 L19,3.99999996 C20.1,3.99999996 21,4.89999997 21,5.99999996 L21,14.92 L19,14.35 L19,9.99999996 L4.99999996,9.99999996 L4.99999996,20 L13.35,20 Z M21,20.59 L18.49,18.08 L19.71,17.56 C20.14,17.37 20.1,16.75 19.65,16.62 L14.87,15.25 C14.49,15.14 14.14,15.49 14.25,15.87 L15.62,20.65 C15.75,21.1 16.37,21.14 16.56,20.71 L17.08,19.49 L19.59,22 C19.98,22.39 20.61,22.39 21,22 L21,22 C21.39,21.61 21.39,20.98 21,20.59 Z M12,14.5 L12,14.5 C12,13.12 10.88,12 9.49999998,12 L9.49999998,12 C8.11999998,12 6.99999998,13.12 6.99999998,14.5 L6.99999998,14.5 C6.99999998,15.88 8.11999998,17 9.49999998,17 L9.49999998,17 C10.88,17 12,15.88 12,14.5 Z',
      id: 'SocialBookOnlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'book_online',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialBookOnlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialBookOnlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialBookOnlineIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialBookOnlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
