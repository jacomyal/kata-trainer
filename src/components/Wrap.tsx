import { type ComponentType, type FC, type ReactNode } from "react";

const Wrap: FC<{ component: ComponentType } | { content: ReactNode }> = (props) => {
  if ("component" in props) {
    const Component = props.component;
    return <Component />;
  }

  return <>{props.content}</>;
};

export default Wrap;
