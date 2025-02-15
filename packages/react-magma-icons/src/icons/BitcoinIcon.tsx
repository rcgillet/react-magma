import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 18.79 26',
  paths: [
    {
      d:
        'M17.91,9a3.69,3.69,0,0,1-2.05,4,4.72,4.72,0,0,1,2.74,1.61A4.63,4.63,0,0,1,19.3,18a5.82,5.82,0,0,1-.51,2,4.26,4.26,0,0,1-1,1.39,5.06,5.06,0,0,1-1.51.91,8.8,8.8,0,0,1-1.9.54A17.53,17.53,0,0,1,12.1,23v4H9.69V23.08l-1.9,0V27H5.38V23H.55L1,20.14H2.77a.85.85,0,0,0,.91-.8V13.06h0V8.56A1.25,1.25,0,0,0,2.28,7.5H.55V4.94H5.38V1H7.79V4.86l1.9,0V1H12.1V4.94a14,14,0,0,1,2.19.35,7.35,7.35,0,0,1,1.76.7,3.69,3.69,0,0,1,1.29,1.22A3.94,3.94,0,0,1,17.91,9Zm-3.36,8.52a2.14,2.14,0,0,0-.23-1,2.22,2.22,0,0,0-.58-.72,2.93,2.93,0,0,0-.9-.48,7.35,7.35,0,0,0-1-.29,9.46,9.46,0,0,0-1.16-.14c-.46,0-.82-.05-1.08-.05l-1,0-.75,0v5.28H9.16l.83,0,.91-.06c.26,0,.56-.07.89-.14a5,5,0,0,0,.87-.22,5.17,5.17,0,0,0,.74-.32,2,2,0,0,0,1-1.1,2,2,0,0,0,.15-.79Zm-1.11-7.44a2.07,2.07,0,0,0-.19-.92,2.16,2.16,0,0,0-.48-.65A2.44,2.44,0,0,0,12,8.07a5.11,5.11,0,0,0-.86-.26,8.92,8.92,0,0,0-1-.12,8.16,8.16,0,0,0-.91,0H7.83v4.8H9.1l.78,0a7.89,7.89,0,0,0,.86-.09l.8-.17a2.57,2.57,0,0,0,.76-.29,4.47,4.47,0,0,0,.58-.42,1.42,1.42,0,0,0,.42-.6,2.1,2.1,0,0,0,.14-.8Z',
      transform: 'translate(-0.55 -1)',
    },
  ],
};

export const BitcoinIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
