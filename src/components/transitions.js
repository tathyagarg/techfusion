import { motion } from "framer-motion";

const config = {
    initial: { left: '-100vw', display: 'block' },
    animate: { left: '100vw', display: 'none' }
}

const Transitions = ({ children }) => {
    return <>
        <motion.div
            variants={config}
            initial='initial'
            animate='animate'
            transition={{ ease: 'easeIn', duration: 0.5, delay: -0.1 }}
            style={{
                height: '100vh',
                width: '100vw',
                backgroundColor: 'var(--primary)',
                position: 'absolute',
                top: 0,
                zIndex: 1000
            }}
        >
            {children}
        </motion.div>
        <motion.div
            variants={config}
            initial='initial'
            animate='animate'
            transition={{ ease: 'easeIn', duration: 0.5, delay: 0 }}
            style={{
                height: '100vh',
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
            transition={{ ease: 'easeIn', duration: 0.5, delay: 0.1 }}
            style={{
                height: '100vh',
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