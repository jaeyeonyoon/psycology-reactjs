import type { ReactElement } from "react";

function Container({ children }: { children: ReactElement }) {
  return (<div className="container mx-auto max-w-7xl bg-blue-400">
    {children}
  </div>);
}

export default Container;