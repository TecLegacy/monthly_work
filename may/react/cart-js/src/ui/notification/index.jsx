const Notification = prop => {
  /** Error , Success , sending*/
  const message = prop.message;
  let color, textColor;
  if (message === 'error') {
    color = `bg-red-700`;
    textColor = `text-white`;
  }
  if (message === 'success') {
    color = `bg-teal-300`;
    textColor = `text-purple-950`;
  }
  if (message === 'sending') {
    color = `bg-sky-400`;
    textColor = `text-fuchsia-900`;
  }

  return (
    <>
      <div
        className={`${color} w-5/6  opacity-80  rounded-md  flex items-center  py-4 justify-center mx-auto  shadow-nav `}
      >
        <div className=' items-center justify-between flex gap-16 py-2 px-2 w-full text-lg font-bold     '>
          <h2 className={`${textColor} `}>Notification</h2>
          <p className={textColor}>Message Success</p>
        </div>
      </div>
    </>
  );
};

export default Notification;
