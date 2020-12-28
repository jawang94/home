import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(({ content }: {content: string[]}) => {
  const inverted = useInvertedScale();

  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      {content.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </motion.div>
  );
});
