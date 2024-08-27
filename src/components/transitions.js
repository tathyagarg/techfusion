import { motion } from "framer-motion";

const config = {
    initial: { left: '-100vw' },
    animate: { left: '100vw' },
    exit: { left: '100vw' }
}

const Transitions = ({ children }) => {
    return <>
        <motion.div
            variants={config}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ease: 'easeIn', duration: 0.5, delay: -0.1 }}
            style={{
                height: '100%',
                width: '100vw',
                backgroundColor: 'var(--primary)',
                position: 'absolute',
                top: window.scrollY,
                zIndex: 1000
            }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={config}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ease: 'easeIn', duration: 0.5, delay: 0 }}
            style={{
                height: '100%',
                width: '100vw',
                backgroundColor: '#f480c8',
                position: 'absolute',
                top: window.scrollY,
                zIndex: 1000
            }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={config}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ease: 'easeIn', duration: 0.5, delay: 0.1 }}
            style={{
                height: '100%',
                width: '100vw',
                backgroundColor: '#e75bb1',
                position: 'absolute',
                top: window.scrollY,
                zIndex: 1000
            }}
        >
            {children}
        </motion.div>
    </>
}

export default Transitions;