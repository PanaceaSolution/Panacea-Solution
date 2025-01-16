import { useEffect } from 'react';
import fluidCursor from '../Hooks/FluidCursor.js';
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);
  return (
    <div className="fixed top-[7vh] left-0 z-10">
      <canvas id="fluid" className="w-screen h-screen z-10" />
    </div>
  );
};
export default FluidCursor;
