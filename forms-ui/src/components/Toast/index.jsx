import useToggle from "@hooks/useToggle";
import { createContext, useContext, useState } from "react";
import {
  MdCheckCircle,
  MdDangerous,
  MdOutlineInfo,
  MdWarning,
} from "react-icons/md";
import styled, { keyframes } from "styled-components";

const leftAnimation = keyframes`
from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}`;

const rightAnimation = keyframes`
	from {
	  transform: translateX(100%);
	}
	to {
	  transform: translateX(0);
	}
`;

const ToastBackgrounds = {
  info: "#047aff",
  error: "#E74C3C",
  warning: "#F39C12",
  default: "#ECF0F1",
  success: "#28B463",
};

const ToastContentColors = {
  info: "#fff",
  error: "#fff",
  warning: "#fff",
  success: "#fff",
  default: "#566573",
};

const ToastContainer = styled.div`
  top: 10px;
  width: 450px;
  border: none;
  height: 100px;
  padding: 10px;
  z-index: 10000;
  position: absolute;
  border-radius: 10px;
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.1);

  // Display props
  align-items: center;
  display: flex-inline;
  justify-content: space-between;

  // Custom Props
  color: ${({ type }) => ToastContentColors[type]};
  background-color: ${({ type }) => ToastBackgrounds[type]};

  animation: ${({ position = "right" }) =>
      position === "right" ? rightAnimation : leftAnimation}
    0.2s;

  ${({ position = "right" }) => ({ [position]: 10 })}

  svg {
    fill: ${({ type }) => ToastContentColors[type]};
  }
`;

export const Toaster = ({
  body,
  message,
  type = "default",
  position = "right",
}) => {
  return (
    <ToastContainer position={position} type={type}>
      <div className="d-flex align-items-center">
        <div>
          {type === "error" && (
            <MdDangerous size={35} color={ToastContentColors[type]} />
          )}
          {type === "success" && (
            <MdCheckCircle size={35} color={ToastContentColors[type]} />
          )}
          {type === "warning" && (
            <MdWarning size={35} color={ToastContentColors[type]} />
          )}
          {type === "info" && (
            <MdOutlineInfo size={35} color={ToastContentColors[type]} />
          )}
        </div>
        <div className="flex-grow-1 ms-2">
          {message && <p>{message}</p>}
          {body && body}
        </div>
      </div>
    </ToastContainer>
  );
};

export const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const ToastProvider = ({ children }) => {
  const [isVisible, toggleVisibitiy] = useToggle(false);

  const [toastOptions, setToastOptions] = useState({
    body: null,
    message: "",
    type: "success",
    position: "right",
  });

  const showToast = ({
    message = "",
    body = <></>,
    type = "success",
    timer = 5 * 1000,
    position = "right",
  }) => {
    setToastOptions({
      type,
      body,
      message,
      position,
    });

    toggleVisibitiy();
    setTimeout(() => toggleVisibitiy(), timer);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}
      {isVisible && <Toaster {...toastOptions} />}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
