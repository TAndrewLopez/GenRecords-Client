import { PlayIcon } from "../assets";

const TrackList = ({ vinyl }) => {
  return (
    <div className="mx-5 p-5">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Track List:
      </h2>
      <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
        {vinyl?.tracks.map((track) => (
          <li key={track.id} className="flex items-center">
            {track.preview ? (
              <PlayIcon twClass={"w-4 h-4 mr-1.5 fill-green-400"} />
            ) : (
              <PlayIcon twClass={"w-4 h-4 mr-1.5 fill-shade-1"} />
            )}
            {track.name}
            {track.explicit ? (
              <span className="px-2 py-px m-2 font-light text-sm text-shade-1 rounded border border-errorRed">
                Explicit
              </span>
            ) : (
              ""
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
