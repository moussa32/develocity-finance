import Link from "next/link";
import { useRouter } from "next/router";

const NextNavLink = ({
  href,
  className,
  disableActive = false,
  activeClassName,
  children,
  ...props
}) => {
  const { pathname } = useRouter();
  return (
    <Link
      className={className}
      href={href}
      {...props}
      {...(pathname.includes(href) ? activeClassName : null)}
    >
      {children}
    </Link>
  );
};

export default NextNavLink;
