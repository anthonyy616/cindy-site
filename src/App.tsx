import { useState, useRef } from 'react';
import Overlay from './components/Overlay';
import ValentinesDayUI from './components/ValentinesDayUI';
import Slideshow from './components/Slideshow';

type Stage = 'overlay' | 'slideshow' | 'final';

function App() {
  const [stage, setStage] = useState<Stage>('overlay');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setStage('slideshow');
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
      audioRef.current.volume = 0.5;
    }
  };

  const handleSlideshowDone = () => {
    setStage('final');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {stage === 'overlay' && <Overlay onEnter={handleEnter} />}

      {stage === 'slideshow' && <Slideshow onDone={handleSlideshowDone} />}

      {stage === 'final' && <ValentinesDayUI />}

      {/* Audio Element - Fixed filename */}
      <audio ref={audioRef} loop>
        <source src="/Muni Long - Made For Me (Audio).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
