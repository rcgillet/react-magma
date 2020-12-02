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
  title: ['cancel_presentation'],
  paths: [
    {
      d:
        'M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M21,18 C21,18.55 20.55,19 20,19 L3.99999996,19 C3.44999996,19 2.99999996,18.55 2.99999996,18 L2.99999996,5.99999997 C2.99999996,5.44999997 3.44999996,4.99999997 3.99999996,4.99999997 L20,4.99999997 C20.55,4.99999997 21,5.44999997 21,5.99999997 L21,18 Z M15.29,8.69999999 C14.9,8.30999998 14.27,8.30999998 13.88,8.69999999 L12,10.59 L10.11,8.69999999 C9.71999999,8.30999998 9.08999999,8.30999998 8.69999999,8.69999999 C8.30999998,9.08999999 8.30999998,9.71999999 8.69999999,10.11 L10.59,12 L8.69999999,13.89 C8.30999998,14.28 8.30999998,14.91 8.69999999,15.3 C9.08999999,15.69 9.71999999,15.69 10.11,15.3 L12,13.41 L13.89,15.3 C14.28,15.69 14.91,15.69 15.3,15.3 C15.69,14.91 15.69,14.28 15.3,13.89 L13.41,12 L15.3,10.11 C15.68,9.72999999 15.68,9.08999999 15.29,8.69999999 L15.29,8.69999999 Z',
      id: 'CommunicationCancelPresentationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'cancel_presentation',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationCancelPresentationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationCancelPresentationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationCancelPresentationIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationCancelPresentationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
