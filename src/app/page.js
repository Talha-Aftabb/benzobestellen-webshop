"use client";

import React, { useState } from "react";
import medicines from "./data/medicines";
import MedicineCard from "./components/MedicineCard";
import { Pagination } from "antd";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Calculate which medicines to show
  const startIndex = (currentPage - 1) * pageSize;
  const currentMedicines = medicines?.slice(startIndex, startIndex + pageSize);

  return (
    <div className="w-full px-4">
      {/* Medicines grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentMedicines.map((m) => (
          <div key={m.id} className="w-full">
            <MedicineCard med={m} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={medicines.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
