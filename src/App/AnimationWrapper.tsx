import { AnimatePresence } from "framer-motion";
import { Styles } from "./";

export const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <Styles.MotionDivWrapper
        key="modal"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {children}
      </Styles.MotionDivWrapper>
    </AnimatePresence>
  );
};
