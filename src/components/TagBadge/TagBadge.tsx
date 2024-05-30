import "./TagBadge.styles.css";

import AddIcon from "src/icons/AddIcon";
import { TagBadgeProps } from "./TagBadge.types";

const TagBadge = ({ tags }: TagBadgeProps) => {
  const handleAddTagClick = () => alert("Add tag clicked");

  if (!tags.length)
    return (
      <button className="tag-badge-empty" onClick={handleAddTagClick}>
        <AddIcon className="fill-gray-400" /> Add Tag
      </button>
    );

  return (
    <div className="tag-badge">
      {tags.map((tag) => (
        <div
          key={tag.name}
          className="color-sample"
          style={{ backgroundColor: tag.color }}
        />
      ))}
      &nbsp;
      {tags.length > 1 ? `${tags.length} tags` : tags[0].name}
    </div>
  );
};

export default TagBadge;
