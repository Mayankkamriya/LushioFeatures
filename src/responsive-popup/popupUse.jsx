
import React, { useState } from "react";
import ResponsivePopup from "./responsivepopup"
import "./responsivepopup.css";

const PopupUse = () => {
  const [isPopupOneOpen, setPopupOneOpen] = useState(false);
  const [isPopupTwoOpen, setPopupTwoOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setPopupOneOpen(true)}>Open Popup 1</button>
      <button onClick={() => setPopupTwoOpen(true)}>Open Popup 2</button>

      {/* Popup 1 */}
      <ResponsivePopup isOpen={isPopupOneOpen} onClose={() => setPopupOneOpen(false)}>
        <h1>Welcome to Popup 1</h1>
        <p>This is the first popup with custom content.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur voluptas temporibus ipsum aut, nobis saepe animi labore maxime optio repellat. Doloremque ipsum repudiandae dolorum mollitia, voluptas dolorem nobis aliquam numquam aut iusto quaerat necessitatibus perspiciatis dicta architecto et officia? Ex doloremque unde autem delectus sunt? Aut placeat amet necessitatibus dolores. Impedit odit dolor labore iure delectus velit maiores, officiis blanditiis beatae quibusdam libero est odio fugit aspernatur culpa tempore corrupti veniam amet pariatur at cumque quasi laboriosam doloribus. Molestias, velit.
        </p>
      </ResponsivePopup>

      {/* Popup 2 */}
      <ResponsivePopup isOpen={isPopupTwoOpen} onClose={() => setPopupTwoOpen(false)}>
        <h1>Welcome to Popup 2</h1>
        <p>This is the second popup with different content.</p>
      </ResponsivePopup>
    </div>
  );
};

export default PopupUse;
