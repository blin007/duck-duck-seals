// general container
export const container = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5,
            duration: 2,
        }
    }
}

// Container for heroBot
export const containerBot = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
            delayChildren: 0.3
        }
    }
}

export const springFromLeft = {
    initial: {
        x: -150,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 3
        }   
    }
}

export const springFromRight = {
    initial: {
        x: 400,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 3
        }   
    }
}

export const overlayTop = {
    initial: {
        x: -2000,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 2
        }
    }
}

export const overlayBot = {
    initial: {
        x: 2000,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 2
        }
    }
}

export const fadeInFromUp = {
    initial: {
        y: -50,
        opacity: 0,
    },
    animate: {
            y: 0,
            opacity: 1,
            transition: { 
                type: 'tween', 
                duration: 1.1 
            },
    },
};

export const fadeInFromDown = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 1.1 
        },
    },
};

export const fadeInFromLeft = {
    initial: {
        x: 50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 1.1 
        },
    },
};

export const fadeInFromRight = {
    initial: {
        x: -50,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: { 
            type: 'tween', 
            duration: 1.1 
        },
    },
};