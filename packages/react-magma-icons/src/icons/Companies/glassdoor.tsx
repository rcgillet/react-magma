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
  title: ['glassdoor'],
  paths: [
    {
      d:
        'M16.4285529,19.1428941 L5,19.1428941 C5,20.7208388 6.27922584,22 7.85717058,22 L16.4285529,22 C18.0064977,22 19.2857235,20.7208388 19.2857235,19.1428941 L19.2857235,7.41025334 C19.2857235,7.35274769 19.2390851,7.30617393 19.1815794,7.30617393 L16.5326324,7.30617393 C16.4751914,7.30617393 16.4285529,7.35274769 16.4285529,7.41025334 L16.4285529,19.1428941 Z M16.4285529,2 C18.0064977,2 19.2857235,3.27922584 19.2857235,4.85717058 L7.85717058,4.85717058 L7.85717058,16.5898113 C7.85717058,16.647317 7.81053214,16.6939554 7.75309117,16.6939554 L5.10407941,16.6939554 C5.04663844,16.6939554 5,16.647317 5,16.5898113 L5,4.85717058 C5,3.27922584 6.27922584,2 7.85717058,2 L16.4285529,2 L16.4285529,2 Z',
      id: 'CompaniesGlassdoorIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'glassdoor',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CompaniesGlassdoorIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CompaniesGlassdoorIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Fill-4',
          fill: '#000000',
          xlinkHref: '#CompaniesGlassdoorIcon-path-1',
        },
      ],
    },
  ],
};

export const CompaniesGlassdoorIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
