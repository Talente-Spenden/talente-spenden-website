export const TagList: React.FC<{
  tags: string[];
  hiddenTags: string[];
  setHiddenTags: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({ tags, hiddenTags, setHiddenTags }) => {
  const handleTagClick = (tag: string) => {
    let hiddenTagsNew = structuredClone(hiddenTags);
    if (hiddenTagsNew.includes(tag)) {
      let filteredList = hiddenTagsNew.filter((e) => {
        return e != tag;
      });
      setHiddenTags(filteredList);
    } else {
      // At least one tag needs to be selected
      if (!(hiddenTags.length + 1 == tags.length)) {
        hiddenTagsNew.push(tag);
        setHiddenTags(hiddenTagsNew);
      }
    }
  };
  return (
    <ul className=" [&>li]:list-none flex flex-wrap justify-start gap-y-2">
      {tags.map((tag) => {
        return (
          <li className="pr-3">
            <button
              className={`py-1 px-5 rounded-full ${
                !hiddenTags.includes(tag)
                  ? "bg-white text-black"
                  : "bg-black text-grey"
              }`}
              onClick={() => {
                handleTagClick(tag);
              }}
            >
              {tag}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
