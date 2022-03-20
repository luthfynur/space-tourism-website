import { motion } from 'framer-motion';
import Navlist from '../Navlist';

export default function MobileSidebar({ toggle, onClick }) {
  const NavAnimation = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  };
  return (
    <motion.nav
      variants={NavAnimation}
      initial="hidden"
      animate={toggle ? 'show' : 'hidden'}
      exit="hidden"
      className={`fixed h-screen w-[254px] top-0 right-0 bg-[#e1ffe10a] backdrop-blur-[81.5485px]
      block sm:hidden xl:hidden pt-[118px] z-40
    `}
    >
      <Navlist
        background="bg-transparent"
        height="h-full"
        width="w-full"
        maxWidth="max-w-[254px]"
        right="right-0"
        top="top-0"
        paddingTop="pt-0"
        paddingBottom="pb-0"
        paddingLeft="pl-[32px]"
        paddingRight="pr-0"
        onClick={onClick}
      />
    </motion.nav>
  );
}
