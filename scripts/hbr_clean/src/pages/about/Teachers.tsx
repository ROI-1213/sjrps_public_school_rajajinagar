import { useState } from "react";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Clock } from "lucide-react";
import { getPublicContent } from "@/lib/api";

import dummy from "@/assets/faculty/dummy.jpg";
import jyothiShashidhar from "@/assets/faculty/Jyothi-Shashidhar.jpg";
import lilyRoy from "@/assets/faculty/Lily-Roy.jpg";
import menakaB from "@/assets/faculty/Menaka-B.jpg";
import vijayalakshmiHampannvar from "@/assets/faculty/Vijayalakshmi-Hampannvar.jpg";
import kumudhini from "@/assets/faculty/Kumudhini.jpg";
import mayaM from "@/assets/faculty/Maya-M.jpg";
import poojaRakesh from "@/assets/faculty/Pooja-Rakesh.jpg";
import bVeena from "@/assets/faculty/B-Veena.jpg";
import kavithaKrishnakumar from "@/assets/faculty/Kavitha-Krishnakumar.jpg";
import saishree from "@/assets/faculty/Saishree.jpg";
import akhilaAV from "@/assets/faculty/AKHILA-AV.jpg";
import rajaniD from "@/assets/faculty/Rajani-D.jpg";
import shwethaG from "@/assets/faculty/SHWETHA-G.jpg";
import nirmalaNelson from "@/assets/faculty/Nirmala-Nelson.jpg";
import prakashHS from "@/assets/faculty/Prakash-HS.jpg";
import ravindra from "@/assets/faculty/Ravindra.jpg";
import lalyGeorge from "@/assets/faculty/Laly-George.jpg";
import lisyVarghese from "@/assets/faculty/Lisy-Varghese.jpg";
import miniJomy from "@/assets/faculty/Mini-Jomy.jpg";
import jagadeeshaYT from "@/assets/faculty/Jagadeesha-YT.jpg";
import murugaM from "@/assets/faculty/Muruga-M.jpg";
import sampathKumar from "@/assets/faculty/Sampath-Kumar.jpg";
import jamalRabia from "@/assets/faculty/Jamal-Rabia.jpg";
import rubiKumari from "@/assets/faculty/Rubi-Kumari.jpg";
import nandiniVN from "@/assets/faculty/Nandini-VN.jpg";
import vijayaHT from "@/assets/faculty/Vijaya-HT.jpg";
import jyothiS from "@/assets/faculty/JYOTHI-S.jpg";
import madhusreePaul from "@/assets/faculty/Madhusree-Paul.jpg";
import kalappa from "@/assets/faculty/Kalappa.jpg";
import sharathKumar from "@/assets/faculty/Sharath-kumar.jpg";
import sangeethaS from "@/assets/faculty/Sangeetha-S.jpg";
import csVani from "@/assets/faculty/CS-Vani.jpg";
import ipsitaRanjit from "@/assets/faculty/Ipsita-Ranjit.jpg";
import sriVidhya from "@/assets/faculty/Sri-vidhya.jpg";
import pallaviMN from "@/assets/faculty/Pallavi-MN.jpg";
import jayaBai from "@/assets/faculty/Jaya-Bai.jpg";
import aishaParveen from "@/assets/faculty/Aisha-Parveen.jpg";
import jyotiGurav from "@/assets/faculty/JYOTI-GURAV.jpg";
import shashikala from "@/assets/faculty/Shashikala.jpg";
import revatiDixit from "@/assets/faculty/Revati-Dixit.jpg";
import nethravathi from "@/assets/faculty/Nethravathi.jpg";
import dianaPrecilla from "@/assets/faculty/Diana-Precilla.jpg";
import rashmiHR from "@/assets/faculty/Rashmi-HR.jpg";
import geraldineNancy from "@/assets/faculty/Geraldine-Nancy.jpg";
import nagaratnaC from "@/assets/faculty/Nagaratna-C.jpg";
import amitaChaurasia from "@/assets/faculty/Amita-Chaurasia.jpg";
import dipikaPandey from "@/assets/faculty/Dipika-Pandey.jpg";
import meenakshiGupta from "@/assets/faculty/MEENAKSHI-GUPTA.jpg";
import sharavvaBT from "@/assets/faculty/Sharavva-BT.jpg";
import lathaM from "@/assets/faculty/Latha-M.jpg";
import anushaJ from "@/assets/faculty/ANUSHA-J.jpg";
import rashmiBhat from "@/assets/faculty/RASHMI-BHAT.jpg";
import priyankaV from "@/assets/faculty/privanka-v.jpg";
import vedaGrampurohit from "@/assets/faculty/Veda-Grampurohit.jpg";
import kiranSharma from "@/assets/faculty/KIRAN-SHARMA.jpg";
import shwethaVijay from "@/assets/faculty/Shwetha-Vijay.jpg";
import sandhya from "@/assets/faculty/Sandhya.jpg";
import kumarshekhar from "@/assets/faculty/Kumarshekhar.jpg";
import shaliniPriyanka from "@/assets/faculty/Shalini-Priyanka.jpg";
import kushboo from "@/assets/faculty/Kushboo.jpg";
import mariaMagdalin from "@/assets/faculty/Maria-Magdalin.jpg";
import meenal from "@/assets/faculty/Meenal.jpg";
import savithaHiremath from "@/assets/faculty/Savitha-Hiremath.jpg";
import nagaratnaAK from "@/assets/faculty/Nagaratna-AK.jpg";
import keertana from "@/assets/faculty/keertana.jpg";
import lakkannaChigadinni from "@/assets/faculty/LAKKANNA-CHIGADINNI.jpg";
import alphonza from "@/assets/faculty/Alphonza.jpg";
import vimalan from "@/assets/faculty/vimalan.jpg";
import vijaykumar from "@/assets/faculty/vijaykumar.jpg";
import vanaja from "@/assets/faculty/vanaja.jpg";
import chandana from "@/assets/faculty/chandana.jpg";

export interface Teacher {
  name: string;
  designation: string;
  subject: string;
  qualification: string;
  experience: string;
  image: string;
  isFeatured?: boolean;
  source?: "frontend" | "database";
  adminId?: string;
  isVisible?: boolean;
  displayOrder?: number;
}

export const teachers: Teacher[] = [
  { name: "Mrs Jyothi Shashidhar", designation: "Principal", subject: "Science (Physics)", qualification: "M.Sc M.Ed", experience: "21.8 Years", image: jyothiShashidhar },
  { name: "Mrs Lily Roy", designation: "Senior Secondary Co-Ordinator", subject: "Science", qualification: "M.Sc B.Ed", experience: "22.6 Years", image: lilyRoy },
  { name: "Mrs Menaka B", designation: "PGT Mathematics", subject: "Mathematics", qualification: "BSc MSc", experience: "21 Year", image: menakaB },
  { name: "Mrs Vijayalakshmi Hampannvar", designation: "PGT CS/IT", subject: "Computer Science", qualification: "B.Sc, MCA, B.Ed", experience: "15.9 Years", image: vijayalakshmiHampannvar },
  { name: "Mrs Kumudhini S.R.", designation: "PGT English", subject: "English", qualification: "MA, M.Ed", experience: "15.2 Years", image: kumudhini },
  { name: "Mrs Maya M", designation: "PGT Mathematics/Science", subject: "Mathematics/Science", qualification: "M.Sc B.Ed", experience: "14.3 Years", image: mayaM },
  { name: "Mrs Pooja Rakesh Patil", designation: "PGT Biology", subject: "Biology", qualification: "B.Sc, M.Sc (Botany)", experience: "11.2 Year", image: poojaRakesh },
  { name: "Mrs B Veena", designation: "PGT Accountancy", subject: "Accountancy", qualification: "M.Com B.Ed", experience: "11.1 Year", image: bVeena },
  { name: "Mrs Kavitha Krishnakumar", designation: "PGT CS/IT", subject: "Computer Science", qualification: "BSc CT, MCA, MPhil", experience: "11 Years", image: kavithaKrishnakumar },
  { name: "Mrs Saishree Hallad", designation: "PGT Chemistry", subject: "Chemistry", qualification: "M.Sc, B.Ed", experience: "10.1 Years", image: saishree },
  { name: "Mrs Akhila A V", designation: "PGT Chemistry", subject: "Chemistry", qualification: "MSc B.Ed", experience: "8 Year", image: akhilaAV },
  { name: "Mrs Rajani D", designation: "PGT Physics", subject: "Physics", qualification: "MSc B.Ed", experience: "4.1 Year", image: rajaniD },
  { name: "Mrs Shwetha G", designation: "PGT Economics", subject: "Economics", qualification: "MA B.Ed", experience: "5.5 Years", image: shwethaG },
  { name: "Mrs Nirmala Nelson", designation: "Secondary Co-Ordinator", subject: "English", qualification: "NTT, BA, B.Ed", experience: "16.1 Years", image: nirmalaNelson },
  { name: "Mr Prakash H S", designation: "TGT Kannada", subject: "Kannada", qualification: "MA B.Ed", experience: "25 Years", image: prakashHS },
  { name: "Mr A Ravindra", designation: "TGT Mathematics & Science", subject: "Mathematics & Science", qualification: "B.Sc B.Ed", experience: "21.1 Years", image: ravindra },
  { name: "Mrs Laly George", designation: "TGT Social Science", subject: "Social Science", qualification: "MA B.Ed", experience: "21 Years", image: lalyGeorge },
  { name: "Mrs Lisy Varghese", designation: "TGT English", subject: "English", qualification: "MA B.Ed", experience: "21 Years", image: lisyVarghese },
  { name: "Mrs Mini Jomy", designation: "TGT Social Science", subject: "Social Science", qualification: "MA B.Ed", experience: "20 Years", image: miniJomy },
  { name: "Jagadeesha Y T", designation: "TGT Kannada", subject: "Kannada", qualification: "BA, B.Ed, MA, LLB", experience: "20 Years", image: jagadeeshaYT },
  { name: "Mr Muruga M", designation: "TGT Physical Education", subject: "Physical Education", qualification: "BA, BPED, MPED", experience: "18 Years", image: murugaM },
  { name: "Mr Sampath Kumar", designation: "TGT Physical Education", subject: "Physical Education", qualification: "Bachelors", experience: "18 Years", image: sampathKumar },
  { name: "Mrs Jamal Rabia Bee", designation: "TGT Mathematics/Science", subject: "Mathematics & Science", qualification: "MSc B.Ed", experience: "17 Years", image: jamalRabia },
  { name: "Mrs Rubi Kumari", designation: "TGT Hindi", subject: "Hindi", qualification: "BA, MA (Political Science), MA (Hindi), B.Ed, M.Ed", experience: "15.7 Years", image: rubiKumari },
  { name: "Mrs Nandini V N", designation: "TGT Mathematics", subject: "Mathematics", qualification: "MSc, BSc, B.Ed", experience: "14 Years", image: nandiniVN },
  { name: "Mrs Vijaya H T", designation: "TGT Science", subject: "Science", qualification: "B.Sc, M.Sc, B.Ed", experience: "12 Years", image: vijayaHT },
  { name: "Mrs Jyothi S", designation: "TGT Hindi", subject: "Hindi", qualification: "BA, B.Ed, MA", experience: "12 Years", image: jyothiS },
  { name: "Mrs Madhusree Paul Biswas", designation: "TGT English", subject: "English", qualification: "MA in English, B.Ed", experience: "11 Years", image: madhusreePaul },
  { name: "Mr Kalappa V Madabal", designation: "TGT Art Teacher", subject: "Art", qualification: "Art Master Diploma", experience: "9 Years", image: kalappa },
  { name: "Mr Sharath Kumar J S", designation: "TGT Kannada", subject: "Kannada", qualification: "BA, B.Ed", experience: "7.2 Years", image: sharathKumar },
  { name: "Mrs Sangeetha S", designation: "TGT Mathematics", subject: "Mathematics", qualification: "M.Sc B.Ed", experience: "6.1 Year", image: sangeethaS },
  { name: "Mrs C S Vani", designation: "TGT Student Counselor", subject: "Student Counselor", qualification: "MSc Psychology", experience: "4.1 Year", image: csVani },
  { name: "Mrs Ipsita Ranjit", designation: "TGT English", subject: "English", qualification: "M. A. in English", experience: "2.1 Years", image: ipsitaRanjit },
  { name: "Mrs D Sri Vidhya", designation: "Primary Coordinator", subject: "EVS", qualification: "BA Bed NTT", experience: "15.1 Years", image: sriVidhya },
  { name: "Mrs Pallavi M N", designation: "Primary Co-Ordinator", subject: "Social Science", qualification: "B.Com, M.Com, B.Ed", experience: "12.1 Years", image: pallaviMN },
  { name: "Mrs Jaya Bai C L", designation: "PRT English", subject: "English", qualification: "BA.BEd", experience: "21 Years", image: jayaBai },
  { name: "Mrs Aisha Parveen", designation: "PRT Social Science", subject: "Social Science", qualification: "MA BEd", experience: "20 Years", image: aishaParveen },
  { name: "Mrs JYOTI M GURAV", designation: "PRT Hindi", subject: "Hindi", qualification: "B.A", experience: "19 Years", image: jyotiGurav },
  { name: "Mrs Shashikala K", designation: "PRT Science", subject: "Science", qualification: "MSc BEd", experience: "18.1 Years", image: shashikala },
  { name: "Mrs Revati S Dixit", designation: "PRT Librarian", subject: "Librarian", qualification: "BSC and MLISC", experience: "16.1 Years", image: revatiDixit },
  { name: "Mrs Nethravathi S", designation: "PRT Kannada", subject: "Kannada", qualification: "MA, B.Ed", experience: "16.1 Years", image: nethravathi },
  { name: "Mrs Diana Precilla", designation: "PRT English", subject: "English", qualification: "MA BEd", experience: "15.1 Years", image: dianaPrecilla },
  { name: "Mrs Rashmi H R", designation: "PRT Mathematics", subject: "Mathematics", qualification: "B.E B.Ed", experience: "13.8 Years", image: rashmiHR },
  { name: "Mrs Geraldine Nancy", designation: "PRT Mathematics", subject: "Mathematics", qualification: "BA DEd", experience: "12.1 Years", image: geraldineNancy },
  { name: "Mrs Nagaratna C", designation: "PRT Kannada", subject: "Kannada", qualification: "B.A B.Ed", experience: "12 Years", image: nagaratnaC },
  { name: "Mrs Amita Chaurasia", designation: "PRT Hindi", subject: "Hindi", qualification: "BA MBA", experience: "9.9 Years", image: amitaChaurasia },
  { name: "Mrs Dipika Pandey", designation: "PRT Mathematics", subject: "Mathematics", qualification: "B.Sc. & M.A Pursuing B.Ed", experience: "9.1 Year", image: dipikaPandey },
  { name: "Mrs Meenakshi Gupta", designation: "PRT Hindi", subject: "Hindi", qualification: "MA BEd", experience: "6.9 Year", image: meenakshiGupta },
  { name: "Mrs Sharavva B T", designation: "PRT Physical Education", subject: "Physical Education", qualification: "B.A BPEd NCC", experience: "7 Years", image: sharavvaBT },
  { name: "Mrs Latha M", designation: "PRT EVS", subject: "EVS", qualification: "BCom IMTC Course", experience: "6 Years", image: lathaM },
  { name: "Mrs Anusha J", designation: "PRT CS/IT", subject: "Computer Science", qualification: "B.E", experience: "6 Year", image: anushaJ },
  { name: "Mrs Rashmi Bhat", designation: "PRT Mathematics", subject: "Mathematics", qualification: "B.E", experience: "5.6 Years", image: rashmiBhat },
  { name: "Mrs. Priyanka V", designation: "PRT Science", subject: "Science", qualification: "B.Sc, B.Ed", experience: "5.2 Years", image: priyankaV },
  { name: "Mrs. Veda S Grampurohit", designation: "PRT Kannada & Art", subject: "Kannada & Art", qualification: "Diploma in Fine Art", experience: "5 Years", image: vedaGrampurohit },
  { name: "Mrs. Kiran S Sharma", designation: "PRT Hindi", subject: "Hindi", qualification: "B.A.", experience: "5 Year", image: kiranSharma },
  { name: "Mrs Shwetha Vijay", designation: "PRT English", subject: "English", qualification: "MBA BBM B.Ed", experience: "4 Years", image: shwethaVijay },
  { name: "Mrs. T. Sandhya", designation: "PRT Science", subject: "Science", qualification: "B.Sc, B.Ed", experience: "3 Years", image: sandhya },
  { name: "Mr Kumarshekhar", designation: "PRT Music Teacher", subject: "Music Teacher", qualification: "B.Music", experience: "3 Years", image: kumarshekhar },
  { name: "Mrs Shalini Priyanka S", designation: "PRT CS/IT", subject: "Computer Science", qualification: "B.Sc M.Sc B.Ed.", experience: "2.1 Years", image: shaliniPriyanka },
  { name: "Ms. Kushboo S", designation: "PRT Kannada", subject: "Kannada", qualification: "BA, B.Ed", experience: "1.2 Years", image: kushboo },
  { name: "Mrs Maria Magdalin D", designation: "Pre Primary Cooridnator", subject: "All Subjects", qualification: "B.A M.A NTT", experience: "27.4 Years", image: mariaMagdalin },
  { name: "Mrs R.M. Meenal", designation: "Pre-Primary Teacher", subject: "All Subjects", qualification: "BBA", experience: "10.2 Years", image: meenal },
  { name: "Mrs Savitha Hiremath", designation: "Pre-Primary Teacher", subject: "All Subjects", qualification: "DECE", experience: "8 Years", image: savithaHiremath },
  { name: "Mrs Nagaratna A K", designation: "Pre-Primary Teacher", subject: "All Subjects", qualification: "B.H.Sc", experience: "4.5 Years", image: nagaratnaAK },
  { name: "Ms. Keerthana C", designation: "Pre-Primary Teacher", subject: "All Subjects", qualification: "B.Com", experience: "1.2 Years", image: keertana },
  { name: "Mr. Lakkanna Chigadinni", designation: "Yoga Teacher", subject: "Yoga", qualification: "M.Sc in Yoga", experience: "12.1 Years", image: lakkannaChigadinni },
  { name: "Mrs Alphonza", designation: "Receptionist", subject: "Admin Dept", qualification: "B.Com", experience: "29.1 Years", image: alphonza },
  { name: "Mrs. Vimala Nicholas", designation: "CBSE Co-Ordinator", subject: "Admin Dept", qualification: "BE", experience: "19.9 Years", image: vimalan },
  { name: "Mr Vijaya Kumara S", designation: "Accountant", subject: "Admin Dept", qualification: "B.A", experience: "19.7 Years", image: vijaykumar },
  { name: "Ms Vanajakshi H C", designation: "Admin Staff", subject: "Admin Dept", qualification: "B.A, M.A", experience: "17.1 Years", image: vanaja },
  { name: "Mr Chandanaradhya H L", designation: "Senior Office Assistant", subject: "Admin Dept", qualification: "B.Com, M.B.A", experience: "1.8 Years", image: chandana },
];

const TeacherPhoto = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      onError={() => setImgSrc(dummy)}
    />
  );
};

const Teachers = () => {
  const [adminTeachers, setAdminTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    getPublicContent("teacher")
      .then((result) => setAdminTeachers(result.items.map((item) => ({
        name: item.title,
        designation: item.subtitle || "",
        subject: item.category || String(item.fields?.subject || ""),
        qualification: item.body || String(item.fields?.qualification || ""),
        experience: String(item.fields?.experience || ""),
        image: item.image_url || dummy,
        isFeatured: item.fields?.featured === true,
        source: "database" as const,
        adminId: item.id,
        isVisible: item.is_visible,
        displayOrder: item.display_order,
      }))))
      .catch(() => setAdminTeachers([]));
  }, []);

  const displayTeachers = (() => {
    const byName = new Map<string, Teacher>();
    teachers.forEach((teacher, index) => byName.set(teacher.name.toLowerCase(), { ...teacher, source: "frontend", isVisible: true, displayOrder: index + 1 }));
    adminTeachers.forEach((teacher) => byName.set(teacher.name.toLowerCase(), teacher));
    return Array.from(byName.values()).sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
  })();

  return (
  <Layout>
    <PageHero
      title="Our Teachers"
      breadcrumbs={[{ label: "About", path: "/about/overview" }, { label: "Our Teachers" }]}
    />

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indian-green mb-3">Faculty</p>
          <h2 className="text-3xl md:text-4xl font-bold text-logo-navy" style={{ fontFamily: "Poppins, sans-serif" }}>
            Meet Our Teachers
          </h2>
          <p className="text-muted-foreground mt-3">
            A dedicated team of educators committed to nurturing every child's potential.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayTeachers.map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              className="rounded-2xl border-none shadow-[0_8px_25px_rgba(0,0,0,0.10)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full w-full max-w-[325px] mx-auto"
            >
              <div className="w-[325px] max-w-full h-[400px] mx-auto overflow-hidden bg-muted">
                <TeacherPhoto src={t.image} alt={t.name} />
              </div>
              <CardContent className="p-5 flex flex-col flex-1 text-center">
                <h3 className="text-lg font-bold text-logo-navy leading-tight">{t.name}</h3>
                <p className="text-sm font-bold text-indian-green mt-1">{t.designation}</p>

                <div className="mt-4 pt-4 border-t space-y-2 text-sm text-foreground/80 text-left">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-indian-green flex-shrink-0" />
                    <span>{t.subject}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-indian-green flex-shrink-0" />
                    <span>{t.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-indian-green flex-shrink-0" />
                    <span>{t.experience}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  </Layout>
  );
};

export default Teachers;
