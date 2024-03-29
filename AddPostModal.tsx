import { useState, useCallback } from "react";
import { Dialog } from "primereact/dialog";
import "./test.scss";

export type Post = {
  author: string,
  content: string,
  count: number,
}

export type VerifiedPost = Omit<Post, "count">

const initialState: Post = {
  author: "",
  content: "",
  count: 0,
};

interface AddPostModal {
  modalOpen: boolean;
  handleSendPost: (post: VerifiedPost) => void;
  handleCloseModal: () => void;
}


const AddPostModal = ({
  modalOpen,
  handleSendPost,
  handleCloseModal,
}: AddPostModal) => {
  const [state, setState] = useState<Post>(initialState);
  const { author, content, count } = state;

  const handleSendClick = () => {
    if (author.length > 0 && count > 0) {
      handleSendPost({ author, content });
    }
  };

  const onChangeName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, author: event.target.value }));
  }, []);

  const onChangeContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState) => ({
      ...prevState,
      content: event.target.value,
      count: event.target.value.length,
    }));
  }, []);

  return (
    <Dialog visible={modalOpen} onHide={handleCloseModal}>
      <div className="AddPostModal">
        <div className="ModalHeader">New post</div>
        <input
          className="Author"
          type="text"
          placeholder="Name"
          value={author}
          onChange={onChangeName}
        />
        <textarea
          className="Content"
          value={content}
          maxLength={200}
          onChange={onChangeContent}
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
