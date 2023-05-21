import { useEffect } from "react";

interface UpdateClassNameProps {
  selector: string;
  removeClassName: string[];
  className?: string[];
}

export default function UpdateClassName(props: UpdateClassNameProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(props.selector);

    elements.forEach((element) => {
      props.removeClassName.forEach((className) => {
        element.classList.remove(className);
      });

      if (props.className) {
        props.className.forEach((cN) => {
          element.classList.add(cN);
        });
      }
    });

    return () => {
      elements.forEach((element) => {
        props.removeClassName.forEach((className) => {
          element.classList.add(className);
        });

        if (props.className) {
          props.className.forEach((cN) => {
            element.classList.remove(cN);
          });
        }
      });
    };
  }, []);

  return <div></div>;
}
