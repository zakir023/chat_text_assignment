
import React, { useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";

const App1 = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function onClick(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }

  return (
    <div>
      <h2>Emoji Picker</h2>
      <div>
        {selectedEmoji ? <Emoji unified={selectedEmoji} size={62} /> : null}
      </div>

      <EmojiPicker onEmojiClick={onClick} />
    </div>
  );
};

export default App1;
