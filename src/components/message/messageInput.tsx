interface Props {}

const MessageInput = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center gap-x-2 bg-[#40444B] p-2 rounded-md mx-4 text-dc-text-light">
          <div className="hover:text-white duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="grow flex h-full">
            <textarea
              className="w-full bg-transparent focus:outline-none"
              rows={1}
              placeholder="Message #channel-name"
            ></textarea>
          </div>

          <div className="hover:text-white duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInput;
