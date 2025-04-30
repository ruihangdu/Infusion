import React from "react";
import { Search, Filter, AppWindow, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  onSearch: (query: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSearch }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-4 flex-wrap">
        <div className="relative">
          <Select>
            <SelectTrigger className="pl-10 pr-4 py-2 w-full sm:w-44">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="fashion">Fashion</SelectItem>
              <SelectItem value="beauty">Beauty</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="travel">Travel</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="relative">
          <Select>
            <SelectTrigger className="pl-10 pr-4 py-2 w-full sm:w-44">
              <SelectValue placeholder="All platforms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AppWindow className="h-4 w-4 text-slate-400" />
          </div>
        </div>
        <div className="relative">
          <Select>
            <SelectTrigger className="pl-10 pr-4 py-2 w-full sm:w-56">
              <SelectValue placeholder="All audience sizes" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All audience sizes</SelectItem>
              <SelectItem value="micro">Micro (10k-50k)</SelectItem>
              <SelectItem value="mid-tier">Mid-tier (50k-500k)</SelectItem>
              <SelectItem value="macro">Macro (500k-1M)</SelectItem>
              <SelectItem value="mega">Mega (1M+)</SelectItem>
            </SelectContent>
          </Select>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      </div>
      <div className="relative w-full sm:w-auto">
        <Input
          type="text"
          placeholder="Search influencers..."
          className="pl-10 pr-4 py-2 w-full"
          onChange={(e) => onSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
