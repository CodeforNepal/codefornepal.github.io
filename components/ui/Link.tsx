import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  /** Ignored — kept so call sites ported verbatim from next/link still type-check. */
  prefetch?: boolean;
};

const isExternal = (href: string) =>
  /^(https?:|mailto:|tel:)/.test(href) || href.startsWith('//');

/**
 * Drop-in replacement for `next/link`. Internal paths route through React Router;
 * anything with a scheme (or an explicit target) falls back to a plain <a>.
 */
export const Link = forwardRef<HTMLAnchorElement, Props>(function Link(
  { href, prefetch: _prefetch, target, children, ...rest },
  ref,
) {
  if (isExternal(href) || target) {
    return (
      <a ref={ref} href={href} target={target} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <RouterLink ref={ref} to={href} {...rest}>
      {children}
    </RouterLink>
  );
});

export default Link;
