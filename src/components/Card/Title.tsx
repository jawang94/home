import * as React from 'react';
import { motion, useInvertedScale } from 'framer-motion';
import { FiLink } from 'react-icons/fi';
import { closeSpring, openSpring } from './animations';

const CustomTypedMotion: any = motion.div;

/**
 * `transform` is order-dependent, so if you scale(0.5) before translateX(100px),
 * the visual translate will only be 50px.
 *
 * The intuitive pattern is to translate before doing things like scale and
 * rotate that will affect the coordinate space. So Framer Motion takes an
 * opinion on that and allows you to animate them
 * individually without having to write a whole transform string.
 *
 * However in this component we're doing something novel by inverting
 * the scale of the parent component. Because of this we want to translate
 * through scaled coordinate space, and can use the transformTemplate prop to do so.
 */
const scaleTranslate = ({ x, y, scaleX, scaleY }: any) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;

const Title = ({ title, category, link, isSelected }: any) => {
  const inverted = useInvertedScale();
  const x = isSelected ? 30 : 15;
  const y = x;

  return (
    <CustomTypedMotion
      className="title-container"
      initial={false}
      animate={{ x, y }}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <span className="category">{category}</span>
      {isSelected && link.length ? (
        <h2>
          <a
            style={{ fontSize: 20, color: '#fff', textDecoration: 'underline' }}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>{' '}
          <FiLink size={15} />
        </h2>
      ) : (
        <h2>{title}</h2>
      )}
    </CustomTypedMotion>
  );
};

export default Title;
