import { Link, useMatch, useResolvedPath } from "react-router-dom";
import avatar from "../../assets/images/taco.png";

interface Props {
  to: string;
  image?: string;
  name: string;
}

const ServerAvatar = ({ image, to, name }: Props) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: false });
  return (
    <>
      <Link to={to}>
        <div
          className={`group px-3 duration-300 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-r-md before:bg-white before:w-1 ${
            match
              ? "before:h-5/6"
              : "transition-transform before:h-3/6 before:-translate-x-[4px] hover:before:translate-x-0"
          }`}
        >
          <div
            className={`w-10 h-10 relative bg-white overflow-hidden duration-300 transition-all ${
              match ? "rounded-md" : "rounded-[20px] hover:rounded-md"
            }`}
          >
            <img
              src={image ? image : avatar}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="hidden group-hover:block absolute left-full translate-x-3 top-1/2 -translate-y-1/2 py-2 px-4 bg-dc-black-700 shadow rounded-md">
            {name}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ServerAvatar;
