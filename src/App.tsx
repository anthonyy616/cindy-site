import { useState, useRef } from 'react';
import Overlay from './components/Overlay';
import ValentinesDayUI from './components/ValentinesDayUI';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed", e));
      audioRef.current.volume = 0.5; // Start at 50% volume
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {!hasEntered && <Overlay onEnter={handleEnter} />}

      {/* Main Content (always rendered but hidden/under overlay? No, better to mount it) */}
      {/* We can mount it after enter for cleaner DOM, or keep it to pre-render. 
          Let's mount it after for animation trigger. */}
      {hasEntered && <ValentinesDayUI />}

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default App;
