// components/VocabSpeaker.js
'use client'; // สำหรับ Next.js 13+ และ 15 ให้ใช้ client directive

import Image from 'next/image';
import React from 'react';

const VocabSpeaker = ({ word }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-GB';
    speechSynthesis.speak(utterance);
  };

  return (
    <button onClick={speak} style={{ margin: '0px', padding: '0px' }}>
      <Image src={'/play-icon.png'} alt="icon" width={100} height={100} className="w-[70px] cursor-pointer" priority />
    </button>
  );
};

export default VocabSpeaker;
