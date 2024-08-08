import React from "react";
function Field({ label, children, htmlFor, error }) {
  const id = htmlFor || getChildrenID(children);
  return (
    <div className="flex flex-col justify-between items-start">
      {!!label && (
        <label
          htmlFor={id}
          className="text-xl font-medium text-green-500 pl-2 mt-2"
        >
          {label}
        </label>
      )}
      {children}
      {!!error && (
        <p className=" text-red-600 text-xs font-normal">{error.message}</p>
      )}
    </div>
  );
}

const getChildrenID = (child) => {
  const children = React.Children.only(child);
  if ("id" in children.props) {
    return children?.props?.id;
  }
};

export default Field;
