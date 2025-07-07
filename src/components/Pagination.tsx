const Pagination = () => {
  const currentPage: number = 2;
  const totalPages: number = 2;

  const goToPrev = () => {
    console.log("[PAGINATION]: Prev page clicked");
  };

  const goToNext = () => {
    console.log("[PAGINATION]: Next page clicked");
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Prev
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
