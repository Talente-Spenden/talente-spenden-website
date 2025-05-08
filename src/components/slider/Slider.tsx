import { useState } from "react";
import { SliderItem } from "./SliderItem";
import { useViewport } from "../../contexts/ViewportContext";

export const Slider = (props: any) => {
  const { selected, content } = props;
  let [page, setPage] = useState(0);
  const { width } = useViewport();
  let itemWidth = 400;

  let itemsPerPage = width / itemWidth;
  let pageCount = Math.ceil(selected.length / itemsPerPage);

  return (
    <div className="w-full h-full">
      <div className="flex justify-end mr-10">
        <button
          onClick={() => {
            setPage((state) => {
              return Math.abs((state - 1) % pageCount);
            });
          }}
          className="text-white text-4xl"
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setPage((state) => {
              return (state + 1) % pageCount;
            });
          }}
          className="text-white text-4xl"
        >
          &gt;
        </button>
      </div>
      <div className="w-full h-full flex justify-between">
        {selected
          .filter((_, index) => {
            return (
              index >= page * itemsPerPage && index < (page + 1) * itemsPerPage
            );
          })
          .map((element: any, index: any) => {
            return (
              <SliderItem
                element={content.find((c) => c.name === element.id)}
                itemWidth={itemWidth}
              />
            );
          })}
      </div>
    </div>
  );
};
