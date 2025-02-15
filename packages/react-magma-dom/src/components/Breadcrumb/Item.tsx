import * as React from 'react';
import styled from '../../theme/styled';
import { ThemeContext } from '../../theme/ThemeContext';
import { BreadCrumbContext } from '.';

import { Hyperlink } from '../Hyperlink';
import { AngleRightIcon } from 'react-magma-icons';

/**
 * @children required
 */
export interface BreadcrumbItemProps
  extends React.HTMLAttributes<HTMLLIElement> {
  testId?: string;
  /**
   * The href value of the link. If left blank, the breadcrumb item will render as a span with aria-current="page" on it.
   */
  to?: string;
}

const StyledItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledSpan = styled.span<{ isInverse?: boolean }>`
  color: ${props =>
    props.isInverse
      ? props.theme.colors.neutral08
      : props.theme.colors.neutral03};

  svg {
    margin: 0 ${props => props.theme.spaceScale.spacing03};
  }
`;

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  BreadcrumbItemProps
>((props, ref) => {
  const { children, to, testId, ...other } = props;
  const theme = React.useContext(ThemeContext);
  const { isInverse } = React.useContext(BreadCrumbContext);

  return (
    <StyledItem {...other} data-testid={testId} ref={ref}>
      {to ? (
        <>
          <Hyperlink to={to} isInverse={isInverse}>
            {children}
          </Hyperlink>
          <StyledSpan isInverse={isInverse} theme={theme}>
            <AngleRightIcon size={10} />
          </StyledSpan>
        </>
      ) : (
        <StyledSpan aria-current="page" isInverse={isInverse} theme={theme}>
          {children}
        </StyledSpan>
      )}
    </StyledItem>
  );
});
