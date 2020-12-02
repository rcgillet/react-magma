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
  title: ['chat_bubble_outline'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 1.99999996,2.89999996 1.99999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M19,16 L5.99999997,16 L3.99999997,18 L3.99999997,4.99999997 C3.99999997,4.44999997 4.44999997,3.99999997 4.99999997,3.99999997 L19,3.99999997 C19.55,3.99999997 20,4.44999997 20,4.99999997 L20,15 C20,15.55 19.55,16 19,16 Z',
      id: 'CommunicationChatBubbleOutlineIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'chat_bubble_outline',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationChatBubbleOutlineIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationChatBubbleOutlineIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationChatBubbleOutlineIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationChatBubbleOutlineIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
