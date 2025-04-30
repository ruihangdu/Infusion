import React from "react";
import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const itemsShowing = Math.min(itemsPerPage * currentPage, totalItems);
  const startItem = (currentPage - 1) * itemsPerPage + 1;

  return (
    <div className="mt-8 flex justify-between items-center">
      <div className="text-sm text-slate-500">
        Showing {startItem}-{itemsShowing} of {totalItems} influencers
      </div>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 h-auto text-sm"
        >
          Previous
        </Button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className="px-3 py-1 h-auto text-sm"
          >
            {page}
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 h-auto text-sm"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaginationControls;
