import avatar from "../../assets/images/taco.png";

interface Props {
  profile?: string;
  name: string;
  id: number;
}

const ProfileBar = ({ name, id, profile }: Props) => {
  return (
    <>
      <div className="mt-auto flex p-2 border-t border-gray-700">
        <div className="mr-4">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
            <img
              src={profile ? profile : avatar}
              alt="profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col">
            <span className="mr-2">{name}</span>
            <span className="text-xs">#{id}</span>
          </div>

          <div className="ml-auto flex items-center">
            <span className="text-xs hover:text-gray-400 cursor-default duration-300">
              setting
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBar;
