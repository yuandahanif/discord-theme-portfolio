import avatar from "../../assets/images/taco.png";

interface Props {
  profile?: string;
  name: string;
  id: number;
  status?: string;
}

const ProfileSimple = ({ name, id, profile, status }: Props) => {
  return (
    <>
      <div className="mt-auto flex p-2 text-dc-text-light">
        <div className="mr-3 relative">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden">
            <img
              src={profile ? profile : avatar}
              alt="profile"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute w-3.5 h-3.5 -right-1 bottom-0 rounded-full border-[3px] border-dc-black-600 bg-green-500" />
        </div>

        <div className="flex w-full">
          <div className="flex flex-col justify-center">
            <span className="leading-none text-sm">{name}</span>
            {status && <span className="text-xs leading-none">{status}</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSimple;
