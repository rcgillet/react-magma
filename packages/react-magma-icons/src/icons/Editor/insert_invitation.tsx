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
  title: ['insert_invitation'],
  paths: [
    {
      d:
        'M16,12 L13,12 C12.45,12 12,12.45 12,13 L12,16 C12,16.55 12.45,17 13,17 L16,17 C16.55,17 17,16.55 17,16 L17,13 C17,12.45 16.55,12 16,12 Z M16,1.99999995 L16,2.99999995 L7.99999996,2.99999995 L7.99999996,1.99999995 C7.99999996,1.44999996 7.54999998,0.999999954 6.99999996,0.999999954 C6.44999998,0.999999954 5.99999996,1.44999996 5.99999996,1.99999995 L5.99999996,2.99999995 L4.99999996,2.99999995 C3.88999997,2.99999995 3.00999996,3.89999997 3.00999996,4.99999995 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999995 C21,3.89999997 20.1,2.99999995 19,2.99999995 L18,2.99999995 L18,1.99999995 C18,1.44999996 17.55,0.999999954 17,0.999999954 C16.45,0.999999954 16,1.44999996 16,1.99999995 Z M18,19 L5.99999997,19 C5.44999997,19 4.99999997,18.55 4.99999997,18 L4.99999997,7.99999998 L19,7.99999998 L19,18 C19,18.55 18.55,19 18,19 Z',
      id: 'EditorInsertInvitationIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'insert_invitation',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorInsertInvitationIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorInsertInvitationIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorInsertInvitationIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorInsertInvitationIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
