"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import FormStr from "./FloatingNav/FormStr";

const FloatingChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50 m-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#214130] text-white font-semibold px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all"
        >
          <MessageCircle size={18} />
          Let's Talk
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#214130] text-black overflow-y-auto">
          <div className="min-h-screen flex flex-col p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white mb-4"
            >
              <X size={28} />
            </button>

            <div>
              <FormStr />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
