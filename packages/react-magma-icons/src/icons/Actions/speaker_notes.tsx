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
  title: ['speaker_notes'],
  paths: [
    {
      d:
        'M20,1.99999996 L3.99999996,1.99999996 C2.89999996,1.99999996 2.00999996,2.89999996 2.00999996,3.99999996 L1.99999996,22 L5.99999996,18 L20,18 C21.1,18 22,17.1 22,16 L22,3.99999996 C22,2.89999996 21.1,1.99999996 20,1.99999996 Z M7.99999997,14 L5.99999997,14 L5.99999997,12 L7.99999997,12 L7.99999997,14 Z M7.99999997,11 L5.99999997,11 L5.99999997,8.99999999 L7.99999997,8.99999999 L7.99999997,11 Z M7.99999997,7.99999997 L5.99999997,7.99999997 L5.99999997,5.99999997 L7.99999997,5.99999997 L7.99999997,7.99999997 Z M14,14 L11,14 C10.45,14 9.99999999,13.55 9.99999999,13 C9.99999999,12.45 10.45,12 11,12 L14,12 C14.55,12 15,12.45 15,13 C15,13.55 14.55,14 14,14 Z M17,11 L11,11 C10.45,11 9.99999999,10.55 9.99999999,9.99999999 C9.99999999,9.44999999 10.45,8.99999999 11,8.99999999 L17,8.99999999 C17.55,8.99999999 18,9.44999999 18,9.99999999 C18,10.55 17.55,11 17,11 Z M17,7.99999997 L11,7.99999997 C10.45,7.99999997 9.99999999,7.54999998 9.99999999,6.99999997 C9.99999999,6.44999998 10.45,5.99999997 11,5.99999997 L17,5.99999997 C17.55,5.99999997 18,6.44999998 18,6.99999997 C18,7.54999998 17.55,7.99999997 17,7.99999997 Z',
      id: 'ActionsSpeakerNotesIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'speaker_notes',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSpeakerNotesIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSpeakerNotesIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSpeakerNotesIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSpeakerNotesIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
