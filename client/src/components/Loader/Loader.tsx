import { CogIcon } from "@heroicons/react/24/outline";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CogIcon className="w-24 h-24 text-greyLighter animate-spin" />;
    </div>
  );
};

export default Loader;
