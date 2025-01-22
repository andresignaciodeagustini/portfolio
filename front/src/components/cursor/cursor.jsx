import { useEffect, useState } from 'react';
import './cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isOnDarkSection, setIsOnDarkSection] = useState(false);

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Verificar si el cursor está sobre una sección oscura
            const element = document.elementFromPoint(e.clientX, e.clientY);
            const isOnDark = element?.closest('#expertise, #contact') !== null;
            setIsOnDarkSection(isOnDark);
        };

        const pointerHandler = () => {
            const hoveredElements = document.querySelectorAll('a, button, [role="button"]');
            let shouldBePointer = false;

            hoveredElements.forEach(el => {
                if (el.matches(':hover')) {
                    shouldBePointer = true;
                }
            });

            setIsPointer(shouldBePointer);
        };

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseover', pointerHandler);

        return () => {
            document.removeEventListener('mousemove', moveHandler);
            document.removeEventListener('mouseover', pointerHandler);
        };
    }, []);

    return (
        <>
            <div
                className={`custom-cursor-outer ${isPointer ? 'pointer' : ''} ${isOnDarkSection ? 'on-dark' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`custom-cursor-inner ${isPointer ? 'pointer' : ''} ${isOnDarkSection ? 'on-dark' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
};

export default Cursor;