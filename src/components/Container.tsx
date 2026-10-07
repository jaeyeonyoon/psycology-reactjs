import type { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return <div className="container mx-auto max-w-7xl">{children}</div>;
}

export default Container;