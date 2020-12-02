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
  title: ['view_agenda'],
  paths: [
    {
      d:
        'M20,13 L2.99999996,13 C2.44999996,13 1.99999996,13.45 1.99999996,14 L1.99999996,20 C1.99999996,20.55 2.44999996,21 2.99999996,21 L20,21 C20.55,21 21,20.55 21,20 L21,14 C21,13.45 20.55,13 20,13 Z M20,2.99999996 L2.99999996,2.99999996 C2.44999996,2.99999996 1.99999996,3.44999996 1.99999996,3.99999996 L1.99999996,9.99999996 C1.99999996,10.55 2.44999996,11 2.99999996,11 L20,11 C20.55,11 21,10.55 21,9.99999996 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 Z',
      id: 'ActionsViewAgendaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'view_agenda',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsViewAgendaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsViewAgendaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsViewAgendaIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsViewAgendaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
