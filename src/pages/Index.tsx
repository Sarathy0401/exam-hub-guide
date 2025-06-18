
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ExamCard from "@/components/ExamCard";
import ExamSearch from "@/components/ExamSearch";
import { examsData } from "@/data/examsData";
import { GraduationCap, Users, Calendar, TrendingUp, Search, Star } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedOrganization, setSelectedOrganization] = useState("All");

  const filteredExams = useMemo(() => {
    return examsData.filter((exam) => {
      const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exam.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           exam.organization.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || exam.category === selectedCategory;
      const matchesStatus = selectedStatus === "All" || exam.status === selectedStatus;
      const matchesOrganization = selectedOrganization === "All" || exam.organization === selectedOrganization;
      
      return matchesSearch && matchesCategory && matchesStatus && matchesOrganization;
    });
  }, [searchTerm, selectedCategory, selectedStatus, selectedOrganization]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedStatus("All");
    setSelectedOrganization("All");
  };

  const totalVacancies = examsData.reduce((sum, exam) => sum + exam.vacancies, 0);
  const upcomingExams = examsData.filter(exam => exam.status === "upcoming").length;
  const ongoingExams = examsData.filter(exam => exam.status === "ongoing").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Gateway to <span className="text-blue-200">Public Service</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive information about all government exams, eligibility criteria, important dates, and preparation resources in one place.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Calendar className="w-5 h-5" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Star className="w-5 h-5" />
                <span>Trusted by 100K+ Aspirants</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Search className="w-5 h-5" />
                <span>Easy Search & Filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white shadow-lg border-t-4 border-t-blue-600">
            <CardContent className="p-6 text-center">
              <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{examsData.length}</h3>
              <p className="text-gray-600">Active Exams</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-t-green-600">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{totalVacancies.toLocaleString()}</h3>
              <p className="text-gray-600">Total Vacancies</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-t-orange-600">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{upcomingExams}</h3>
              <p className="text-gray-600">Upcoming Exams</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-t-4 border-t-purple-600">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-900">{ongoingExams}</h3>
              <p className="text-gray-600">Ongoing Exams</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Find Your Exam</h2>
          <p className="text-gray-600">Search and filter through our comprehensive database of public service examinations.</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <ExamSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedOrganization={selectedOrganization}
            setSelectedOrganization={setSelectedOrganization}
            onClearFilters={clearFilters}
            totalResults={filteredExams.length}
          />
        </div>

        {/* Exam Cards */}
        {filteredExams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No exams found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or clear the filters to see more results.
              </p>
              <button
                onClick={clearFilters}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">PublicServiceExams.in</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Your trusted companion for government job preparation. We provide comprehensive, 
              up-to-date information about all public service examinations across India.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <span className="text-gray-400">© 2024 All rights reserved</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Made with ❤️ for aspirants</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
