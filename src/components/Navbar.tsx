import React from "react";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  albumOptions: { label: number; value: number }[];
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = ({
  search,
  option,
  setOption,
  setSearch,
  albumOptions,
}: Props) => {
  return (
    <div className="h-20 mb-3 bg-slate-700 flex items-center p-2 justify-between">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"
        className="h-10 w-10 "
        alt=""
      />
      <div className="flex gap-3">
        <select
          className="rounded-md"
          name=""
          value={option}
          onChange={(e) => setOption(e.target.value)}
          id=""
        >
          <option value={""}>Select albumId</option>
          {albumOptions.map((albumOption) => (
            <option value={albumOption.value}>{albumOption.label}</option>
          ))}
        </select>
        <input
          type="text"
          name=""
          placeholder="Search by title"
          className="p-2 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id=""
        />
      </div>
    </div>
  );
};

export default Navbar;
