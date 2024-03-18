import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypingEffect({
  text,
  cName,
}: {
  text: string;
  cName?: string;
}) {
  const classname = cName ? cName : 'main-text';
  return (
    <div className={classname}>
      <Typewriter
        options={{ delay: 30, autoStart: false, deleteSpeed: 10, loop: true }}
        onInit={(typewriter) => {
          typewriter.typeString(text).pauseFor(10000).start();
        }}
      />
    </div>
  );
}
