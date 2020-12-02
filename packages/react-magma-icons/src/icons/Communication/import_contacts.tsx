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
  title: ['import_contacts'],
  paths: [
    {
      d:
        'M17.5,4.49999997 C15.55,4.49999997 13.45,4.89999997 12,5.99999997 C10.55,4.89999997 8.44999999,4.49999997 6.49999995,4.49999997 C5.04999997,4.49999997 3.50999996,4.71999997 2.21999996,5.28999997 C1.48999996,5.61999997 0.999999954,6.32999998 0.999999954,7.13999998 L0.999999954,18.42 C0.999999954,19.72 2.21999996,20.68 3.47999996,20.36 C4.45999997,20.11 5.49999995,20 6.49999995,20 C8.05999998,20 9.71999999,20.26 11.06,20.92 C11.66,21.22 12.34,21.22 12.93,20.92 C14.27,20.25 15.93,20 17.49,20 C18.49,20 19.53,20.11 20.51,20.36 C21.77,20.69 22.99,19.73 22.99,18.42 L22.99,7.13999998 C22.99,6.32999998 22.5,5.61999997 21.77,5.28999997 C20.49,4.71999997 18.95,4.49999997 17.5,4.49999997 Z M21,17.23 C21,17.86 20.42,18.32 19.8,18.21 C19.05,18.07 18.27,18.01 17.5,18.01 C15.8,18.01 13.35,18.66 12,19.51 L12,7.99999998 C13.35,7.14999998 15.8,6.49999998 17.5,6.49999998 C18.42,6.49999998 19.33,6.58999998 20.2,6.77999998 C20.66,6.87999998 21,7.28999998 21,7.75999998 L21,17.23 Z',
      id: 'CommunicationImportContactsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'import_contacts',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationImportContactsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationImportContactsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationImportContactsIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationImportContactsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
