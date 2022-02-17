import ChannelGroup from "components/channel/channelGroup";
import MessageInput from "components/message/messageInput";
import ProfileBar from "components/profile/profileBar";
import ProfileSimple from "components/profile/profileSimple";
import avatar from "../assets/images/taco.png";

const ServerLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-96 bg-dc-black-600 h-full text-white flex flex-col">
        <header className="flex justify-between items-center px-4 py-2 text-lg border-b border-dc-black-700">
          <span>server name</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
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
        </header>

        <div className="px-1 pt-3 text-dc-text-base">
          <ul>
            <li>
              <ChannelGroup
                name="TEXT CHANNELS"
                channels={[
                  { name: "general", to: "/server/portofolio" },
                  { name: "empty", to: "/server/empty" },
                  { name: "404", to: "/server/404" },
                ]}
              />
            </li>
          </ul>
        </div>

        <ProfileBar id={1270} name="yuan" />
      </aside>

      <div className="grow h-full bg-dc-black-100 overflow-y-hidden">
        <header className="flex gap-x-1 items-center px-4 py-2 text-lg border-b border-dc-black-700 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-dc-text-base"
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
          <span className="text-white text-base">channel-name</span>

          <div className="ml-auto flex items-center">
            <span className="text-xs hover:text-gray-400 cursor-default duration-300">
              channel setting
            </span>
          </div>
        </header>

        <div className="flex flex-col h-[87%] mx-4 my-1 text-white overflow-y-auto scroll-thin">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((_) => {
            return (
              <div key={_} className="flex p-2">
                <div className="mr-4">
                  <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                    <img
                      src={avatar}
                      alt="profile"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <span className="mr-2">name</span>
                    <span className="text-xs">Yesterday at 1:41 PM</span>
                  </div>

                  <div className="text-sm max-w-7xl">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni voluptas officiis atque sunt cumque molestiae illum
                      ratione illo ipsum tenetur eum laboriosam ut in nihil, ea
                      quibusdam. Voluptas, saepe tempora. Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Corporis iure
                      voluptatibus dolore eligendi a veniam enim soluta officia
                      error non quasi reprehenderit deserunt laborum hic ut
                      explicabo voluptate, ipsum provident?
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <MessageInput />
      </div>

      <div className="w-80 bg-dc-black-600">
        <header className="px-4 py-2 text-lg border-b border-dc-black-700">
          <span className="text-white text-base">Member</span>
        </header>

        <div className="text-dc-text-light text-base">
          <div className="px-3 py-4">
            <span className="text-xs">ONLINE — 2</span>

            <div>
              <ul>
                <li>
                  <ProfileSimple name={"HRD"} id={1270} />
                </li>
                <li>
                  <ProfileSimple name={"Admin"} id={1270} status="red" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerLayout;
