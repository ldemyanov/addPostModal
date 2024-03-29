import { useState } from "react";
import { Dialog } from "primereact/dialog";
import "./test.scss";

const initialState = {
  author: "",
  content: "",
  count: 0,
};

interface AddPostModal {
  // TODO
}

const AddPostModal = ({
  modalOpen,
  handleSendPost,
  handleCloseModal,
}: AddPostModal) => {
  const [state, setState] = useState(initialState);
  const { author, content, count } = state;

  const handleSendClick = () => {
    /*
      Если все поля заполнены, то инициируем отправку поста.
      Нужно передать параметры author и content.
     */
  };
  return (
    <Dialog visible={modalOpen} onHide={handleCloseModal}>
      <div className="AddPostModal">
        <div className="ModalHeader">New post</div>
        <input
          className="Author"
          type="text"
          placeholder="Name"
          value={author}
          onChange={(e) => setState({ ...state, author: e })}
        ></input>
        <textarea
          className="Content"
          value={content}
          maxLength={200}
          onChange={(e) => setState({ ...state, content: e, count: e.length })}
        ></textarea>
        <div className="charCount">{`${count}/200`}</div>
        <div className="buttonsWrapper">
          <button onClick={handleCloseModal}>Close</button>
          <button onClick={handleSendClick}>Send</button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddPostModal;
