import AddIcon from "src/icons/AddIcon";
import { TagBadgeProps } from "./TagBadge.types";

const TagBadge = ({ tags }: TagBadgeProps) => {
  if (!tags.length)
    return (
      <button className="btn rounded-full px-3 py-2 gap-1 text-gray-400 text-sm font-semibold">
        <AddIcon className="fill-gray-400" /> Add Tag
      </button>
    );

  return (
    <div className="inline-flex items-center text-sm font-semibold gap-1 border border-gray-200 px-3 py-2 rounded-full">
      {tags.map((tag) => (
        <div
          className="w-2 h-2 rounded-sm"
          style={{ backgroundColor: tag.color }}
        />
      ))}
      &nbsp;
      {tags.length > 1 ? `${tags.length} tags` : tags[0].name}
    </div>
  );
};

export default TagBadge;
