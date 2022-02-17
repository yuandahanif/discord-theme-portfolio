import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface ChannelList {
  name: string;
  to: string;
}

interface Props {
  name: string;
  channels: ChannelList[];
}

interface ChannelListProps {
  name: string;
  to: string;
  onActive?: ({ name, to }: ChannelList) => void;
}

const ChannelList = ({ name, to, onActive }: ChannelListProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  useEffect(() => {
    if (match && onActive) {
      onActive({ name, to });
    }
  }, [match]);

  return (
    <Link to={to}>
      <div
        className={`pl-3 mb-1 flex gap-x-1 py-1 items-center text-white rounded-md ${
          match ? "bg-[#393C42]" : " hover:bg-dc-black-100"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-dc-text-base"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
        <span className="text-white text-base">{name}</span>
      </div>
    </Link>
  );
};

const ChannelGroup = ({ name, channels }: Props) => {
  const [isListVisible, setIsListVisible] = useState(true);
  const [activeChannel, setActiveChannel] = useState<{
    name: string;
    to: string;
  } | null>(null);

  const toggleListVisible = () => {
    setIsListVisible((s) => !s);
  };

  return (
    <>
      <div className="text-sm mb-4">
        <button type="button" onClick={toggleListVisible}>
          <div className="flex items-center gap-x-1 py-1 hover:text-dc-text-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-3 w-3 duration-150 ${
                isListVisible ? "rotate-0" : "-rotate-90"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>

            <span className="font-semibold">{name}</span>
          </div>
        </button>

        <div className="ml-1">
          <ul>
            {isListVisible
              ? channels.map((_) => (
                  <li key={_.name}>
                    <ChannelList
                      to={_.to}
                      name={_.name}
                      onActive={(data) => {
                        setActiveChannel(data);
                      }}
                    />
                  </li>
                ))
              : activeChannel && (
                  <ChannelList
                    to={activeChannel.to}
                    name={activeChannel.name}
                  />
                )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChannelGroup;
