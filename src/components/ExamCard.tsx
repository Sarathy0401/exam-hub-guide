
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, GraduationCap, FileText } from "lucide-react";
import { Link } from "react-router-dom";

interface ExamCardProps {
  exam: {
    id: string;
    name: string;
    fullName: string;
    organization: string;
    category: string;
    eligibility: string;
    applicationStart: string;
    applicationEnd: string;
    examDate: string;
    vacancies: number;
    status: "upcoming" | "ongoing" | "closed";
    description: string;
  };
}

const ExamCard = ({ exam }: ExamCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "ongoing": return "bg-green-100 text-green-800";
      case "closed": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
            {exam.name}
          </CardTitle>
          <Badge className={`${getStatusColor(exam.status)} capitalize`}>
            {exam.status}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 font-medium">{exam.organization}</p>
        <p className="text-xs text-gray-500">{exam.fullName}</p>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm text-gray-700 line-clamp-3">{exam.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">Category:</span>
            <Badge variant="outline" className="text-xs">{exam.category}</Badge>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">Vacancies:</span>
            <span className="font-semibold">{exam.vacancies.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">Exam Date:</span>
            <span className="font-semibold">{exam.examDate}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <FileText className="w-4 h-4 text-blue-600" />
            <span className="text-gray-600">Eligibility:</span>
            <span className="text-xs">{exam.eligibility}</span>
          </div>
        </div>
        
        <div className="pt-3 border-t">
          <Link to={`/exam/${exam.id}`}>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              View Details
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamCard;
