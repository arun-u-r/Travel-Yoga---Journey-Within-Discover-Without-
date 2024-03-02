import React, { useState } from "react";
import "../styles/home.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import galleryImages from "./galleryImages";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const MasonryImagesGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = galleryImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3 }}>
        <Masonry gutter="1rem">
          {currentImages.map((item, index) => (
            <img
              className="masonry__img"
              src={item}
              key={index}
              alt="galleryImages"
              style={{ width: "100%", display: "block", borderRadius: "15px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <div className="pagination">
        {currentPage !== 1 && (
          <button onClick={prevPage} disabled={currentPage === 1}>
          <FcPrevious />
        </button>
        )}
        {indexOfLastImage < galleryImages.length && (
        <button
          onClick={nextPage}
          disabled={indexOfLastImage >= galleryImages.length}
        >
          <FcNext />
        </button>

        )}
      </div>
    </div>
  );
};

export default MasonryImagesGallery;
