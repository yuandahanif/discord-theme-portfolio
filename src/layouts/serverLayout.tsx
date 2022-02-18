import ChannelGroup from "components/channel/channelGroup";
import MessageInput from "components/message/messageInput";
import ProfileBar from "components/profile/profileBar";
import ProfileSimple from "components/profile/profileSimple";
import { useParams } from "react-router-dom";
import avatar from "../assets/images/taco.png";
import articleJson from "../data/server/portofolio.json";

const ServerLayout = () => {
  let params = useParams();

  return (
    <div className="flex h-full">
      <aside className="max-w-[270px] w-full bg-dc-black-600 h-full text-white flex flex-col">
        <header className="flex justify-between items-center px-4 py-2 text-lg border-b border-dc-black-700">
          <span>{articleJson.name}</span>
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
          {params.server && (
            <ul>
              <li>
                <ChannelGroup
                  server={params.server}
                  name="TEXT CHANNELS"
                  channels={articleJson.channel}
                />
              </li>
            </ul>
          )}
        </div>

        <ProfileBar
          profile="https://avatars.githubusercontent.com/u/34027873?v=4"
          id={1270}
          name="yuan"
        />
      </aside>

      <div className="grow h-full bg-dc-black-100 overflow-y-hidden">
        <header className="flex gap-x-1 items-center px-4 py-2 text-lg border-b border-dc-black-700 text-white">
          <>
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
            {params.channel && (
              <span className="text-white text-base">
                {articleJson.channel.find((c) => c.id === params.channel)?.name}
              </span>
            )}
          </>

          <div className="ml-auto flex items-center">
            <span className="text-xs hover:text-gray-400 cursor-default duration-300">
              channel setting
            </span>
          </div>
        </header>

        <div className="flex flex-col h-[85%] pr-1 mr-1 gap-y-4 my-1 text-white overflow-y-auto scroll-thin">
          {params.channel &&
            articleJson.channel
              .find((c) => c.id === params.channel)
              ?.messages.map((_, i) => {
                return (
                  <div
                    key={_.name}
                    className="flex p-2 pl-5 hover:bg-dc-black-500 duration-100 rounded-sm text-dc-text-light"
                  >
                    <div className="mr-4">
                      <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
                        <img
                          src="https://avatars.githubusercontent.com/u/34027873?v=4"
                          alt="profile"
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <span className="mr-2 text-blue-400">
                          Yuanda Hanif Hisyam
                        </span>
                        <span className="text-xs">
                          Yesterday at 1:{10 + i} PM
                        </span>
                      </div>

                      <div className="text-sm max-w-7xl ">
                        <div className="text-lg mb-1">
                          <span>Nama project: </span>
                          <span className="font-semibold">{_.name}</span>
                        </div>

                        <div className="max-w-full w-5/6 mb-2 rounded-sm overflow-hidden">
                          <img
                            className="w-full"
                            src={_.image_url}
                            alt={_.name}
                          />
                        </div>

                        <div className="mb-2">
                          <span className="text-lg">Deskripsi</span>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: _.description,
                            }}
                          />
                        </div>

                        <div className="mb-2">
                          <span className="text-lg">Cerita</span>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: _.story,
                            }}
                          />
                        </div>

                        <div className="mb-2">
                          <span className="text-lg">Link</span>
                          <div>
                            <a
                              href={_.repository_url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 underline"
                            >
                              Repository
                            </a>{" "}
                            |{" "}
                            {_.demo_url && (
                              <a
                                href={_.demo_url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-500 underline"
                              >
                                Demo
                              </a>
                            )}
                          </div>
                        </div>

                        {_.technology.length > 0 && (
                          <div>
                            <span className="text-lg">Teknologi</span>
                            <p className="mb-2">
                              {_.technology.map((tech) => `${tech}, `)}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>

        <MessageInput />
      </div>

      <div className="hidden lg:block max-w-[225px] w-full bg-dc-black-600">
        <header className="px-4 py-2 text-lg border-b border-dc-black-700">
          <span className="text-white text-base">Member</span>
        </header>

        <div className="text-dc-text-light text-base">
          <div className="px-3 py-4">
            <span className="text-xs">ONLINE — 2</span>

            <div>
              <ul>
                <li>
                  <ProfileSimple
                    profile="https://ui-avatars.com/api/?name=hrd"
                    name={"HRD"}
                    id={1270}
                  />
                </li>
                <li>
                  <ProfileSimple
                    profile="https://ui-avatars.com/api/?name=admin"
                    name={"Admin"}
                    id={1270}
                    status="ini admin"
                  />
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
