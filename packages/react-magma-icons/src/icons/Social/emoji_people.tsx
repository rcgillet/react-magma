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
  title: ['emoji_people'],
  paths: [
    {
      d:
        'M5.08999997,1.99999996 L5.20154298,2.0062858 C5.64112423,2.0561538 5.99615382,2.39769227 6.06999998,2.84999996 C6.47999998,5.19999997 8.52999999,6.98999998 10.99,6.99999996 L10.99,6.99999996 L13.53,6.99999996 C14.83,6.99999996 15.5,7.71999998 15.89,8.10999998 L15.89,8.10999998 L19.65,11.88 C20.04,12.27 20.04,12.9 19.65,13.29 L19.65,13.29 L19.5559582,13.3730769 C19.1644971,13.6776923 18.6,13.65 18.24,13.29 L18.24,13.29 L15,10.05 L15,21 C15,21.55 14.55,22 14,22 L14,22 L13.883801,21.9932398 C13.3880102,21.9352041 13,21.5107143 13,21 L13,21 L13,16 L11,16 L11,21 C11,21.55 10.55,22 9.99999999,22 L9.99999999,22 L9.88380101,21.9932398 C9.38801019,21.9352041 8.99999999,21.5107143 8.99999999,21 L8.99999999,21 L8.99999999,8.70999999 C6.46999998,7.94999998 4.52999997,5.79999997 4.08999997,3.13999996 C3.99999997,2.53999996 4.47999997,1.99999996 5.08999997,1.99999996 L5.08999997,1.99999996 Z M12,1.99999996 C13.1045695,1.99999996 14,2.89543046 14,3.99999996 C14,5.10456947 13.1045695,5.99999996 12,5.99999996 C10.8954305,5.99999996 9.99999999,5.10456947 9.99999999,3.99999996 C9.99999999,2.89543046 10.8954305,1.99999996 12,1.99999996 Z',
      id: 'SocialEmojiPeopleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'emoji_people',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialEmojiPeopleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialEmojiPeopleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialEmojiPeopleIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialEmojiPeopleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
