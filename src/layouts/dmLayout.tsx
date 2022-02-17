import MessageInput from "components/message/messageInput";
import ProfileBar from "components/profile/profileBar";
import { Link } from "react-router-dom";
import avatar from "../assets/images/taco.png";

const DmLayout = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-96 bg-dc-black-600 h-full text-white flex flex-col">
        <header className="px-4 py-2 text-lg border-b border-dc-black-700">
          server name
        </header>

        <div className="px-1 pt-3 text-dc-text-base">
          <ul>
            <li>
              <div className="text-sm">
                <button>TEXT CHANNELS</button>
                <div className="ml-4">
                  <ul>
                    <li>
                      <Link to="/">general</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>bbb</li>
          </ul>
        </div>

        <ProfileBar id={1270} name="yuan" />
      </aside>

      <div className="grow h-full bg-dc-black-100 overflow-y-hidden">
        <header className="px-4 py-2 text-lg border-b border-dc-black-700 text-white">
          channel name
        </header>

        <div className="flex flex-col h-5/6 mx-4 my-1 text-white overflow-y-auto scroll-thin">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((_) => {
            return (
              <div className="flex p-2">
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

                  <div className="text-sm max-w-screen-2xl">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magni voluptas officiis atque sunt cumque molestiae illum
                      ratione illo ipsum tenetur eum laboriosam ut in nihil, ea
                      quibusdam. Voluptas, saepe tempora.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <MessageInput />
      </div>
    </div>
  );
};

export default DmLayout;
