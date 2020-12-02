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
  title: ['report_problem'],
  paths: [
    {
      d:
        'M2.72999996,21 L21.26,21 C22.03,21 22.51,20.17 22.13,19.5 L12.86,3.49999996 C12.47,2.82999996 11.51,2.82999996 11.13,3.49999996 L1.85999996,19.5 C1.47999996,20.17 1.95999996,21 2.72999996,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M12,14 C11.45,14 11,13.55 11,13 L11,11 C11,10.45 11.45,9.99999999 12,9.99999999 C12.55,9.99999999 13,10.45 13,11 L13,13 C13,13.55 12.55,14 12,14 Z',
      id: 'ActionsReportProblemIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'report_problem',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsReportProblemIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsReportProblemIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsReportProblemIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsReportProblemIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
