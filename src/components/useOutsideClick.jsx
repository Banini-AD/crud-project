import { useEffect } from 'react';

export function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the clicked element is NOT inside the ref's element
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}
