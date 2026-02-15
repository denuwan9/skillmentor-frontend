import Header from "@/components/Header";
import TutorCard from "@/components/TutorCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import type { CardElement } from "@/types";

function App() {
  const tutors: CardElement[] = [
    {
      title: "AWS Developer Associate Exam Prep",
      rating: 99,
      reviews: 15,
      name: "Michelle Burns",
      role: "Tech Lead",
      company: "IFS",
      tutorSince: "2018",
      description:
        "Hi! I'm Michelle. Language lover and tutor of English. I specialize in AWS certification preparation and have helped over 150 students achieve their AWS Developer Associate certification. With my background in cloud computing and software development, I offer a unique approach that simplifies complex concepts. My sessions are interactive, focusing on real-world scenarios, hands-on labs, and exam-specific strategies. I also provide personalized study plans and mock interviews to ensure you are fully prepared for the exam. Whether you are a beginner or looking to advance your career, I am here to guide you every step of the way to becoming a certified AWS Developer.",
      enrollments: 158,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=michelle",
      badge: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.png",
    },
    {
      title: "AWS DevOps Engineering Professional Exam Prep",
      rating: 97,
      reviews: 12,
      name: "David Kumar",
      role: "Senior DevOps Engineer",
      company: "WSO2",
      tutorSince: "2015",
      description:
        "Hey there! I'm a Senior DevOps Engineer with experience at Fortune 500 companies. I specialize in CI/CD pipelines, container orchestration with Kubernetes, and cloud-native architectures. I've helped hundreds of engineers transition into DevOps roles and master tools like Docker, Jenkins, and GitLab. My teaching style is project-based, ensuring you gain practical skills that are immediately applicable in the industry. I cover everything from infrastructure as code with Terraform to monitoring and logging with Prometheus and Grafana. Let's work together to build robust, scalable, and automated systems that drive business value.",
      enrollments: 175,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=david",
      badge: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.png",
    },
    {
      title: "AWS Machine Learning Specialty Certification Exam Prep",
      rating: 98,
      reviews: 20,
      name: "Dr. Priya Sharma",
      role: "Senior ML Engineer",
      company: "IBM",
      tutorSince: "2015",
      description:
        "Hi there! I'm a Senior Machine Learning Engineer with 8+ years of experience in ML/AI. I specialize in helping developers master AWS ML services like SageMaker, comprehend deep learning concepts, and build scalable AI solutions. I have successfully guided over 120 students to achieve their AWS ML Specialty certification. My sessions include comprehensive coverage of data engineering, exploratory data analysis, modeling, and machine learning implementation and operations. I also share insights into the latest AI trends and best practices for deploying models in production environments using AWS infrastructure.",
      enrollments: 142,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=priya",
      badge: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Machine-Learning-Specialty_badge.png",
    },
    {
      title: "Microsoft Cybersecurity Architect Expert Certification Exam Prep",
      rating: 99,
      reviews: 20,
      name: "Scarlet Nexus",
      role: "Cybersecurity Architect",
      company: "Microsoft",
      tutorSince: "2020",
      description:
        "Hello! I'm a Microsoft-certified Cybersecurity Architect with 10+ years of enterprise security experience. I specialize in Zero Trust architecture, identity management, and cloud security. I've helped over 100 professionals achieve their Microsoft Cybersecurity Architect Expert certification. My sessions cover comprehensive security strategy design, hands-on labs with Microsoft security technologies, and real-world case studies. We'll focus on identity & access, platform protection, security operations, and hybrid cloud security architectures to ensure you can design and implement secure solutions for any organization.",
      enrollments: 523,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=scarlet",
      badge: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      title: "Microsoft Azure Developer Associate Certification Exam Prep",
      rating: 98,
      reviews: 20,
      name: "Alex Thompson",
      role: "Azure Solutions Architect",
      company: "Microsoft",
      tutorSince: "2019",
      description:
        "Hi! I'm a Microsoft-certified Azure Solutions Architect and Developer with 4+ years of cloud development experience. I specialize in Azure application development, serverless computing, and cloud-native solutions. I've helped over 130 developers achieve their Azure Developer Associate certification. My sessions include hands-on coding with Azure SDK, practical exercises in Azure Functions, Web Apps, and Storage solutions. We'll cover everything from authentication and security to monitoring and performance optimization, giving you the confidence to build and deploy resilient applications on Azure.",
      enrollments: 134,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=alex",
      badge: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
    {
      title: "Microsoft Azure Data Engineer Associate Certification Exam Prep",
      rating: 97,
      reviews: 20,
      name: "Sarah Zhang",
      role: "Data Engineer",
      company: "Google",
      tutorSince: "2022",
      description:
        "Hello! I'm a certified Azure Data Engineer with 8+ years of experience in data architecture and engineering. I specialize in modern data warehousing, big data solutions, and lakehouse architectures on Azure. I've helped over 140 professionals achieve their Azure Data Engineer Associate certification. My sessions cover hands-on experience with Azure Synapse Analytics, Data Factory, Databricks, and Stream Analytics. We'll work through real-world scenarios in data pipeline development, optimization, and monitoring using SQL, Python, and Scala to ensure you master the skills needed for data engineering roles.",
      enrollments: 240,
      isCertified: true,
      image: "https://i.pravatar.cc/150?u=sarah",
      badge: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 font-sans text-gray-900">
      <Header />

      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <Hero />

        <h2 className="text-3xl font-normal text-center mb-8 text-black mt-16">Schedule a Call</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
