import modules from './modal.module.css';
const Modal = () => {
  return (
    <div className={modules.modal}>
      Modal
      <div className={modules.content}>
        <span className={modules.close}>&times;</span>
        <h2>Modal Header</h2>
        <p>Modal content goes here.</p>
      </div>
    </div>
  );
};

export default Modal;
