import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Calendar,
  CalendarDays,
  BookOpen,
  ClipboardList,
  Trophy,
  Sparkles,
  Download,
  Eye,
  GraduationCap,
  PartyPopper,
  Flag,
  Users,
  FlaskConical,
  Gift,
} from "lucide-react";

const highlights = [
  { icon: CalendarDays, title: "Academic Year Overview", desc: "A clearly structured 2026–27 session with defined terms, holidays, and assessment windows." },
  { icon: BookOpen, title: "Term Structure", desc: "Balanced instructional days across periodic tests, mid-terms, pre-finals, and final examinations." },
  { icon: ClipboardList, title: "Examination Schedule", desc: "PT-1, PT-2, PT-3, mid-terms, pre-boards, and annual exams planned across the year." },
  { icon: Sparkles, title: "Co-Curricular Activities", desc: "Workshops, orientations, sports days, science exhibitions and cultural celebrations." },
  { icon: Trophy, title: "Signature School Events", desc: "Annual Day, Investiture, Sports Day, Farewell, Science Exhibition and Founder Jayanthi." },
];

type EventType = "exam" | "holiday" | "event" | "celebration" | "orientation";

interface Ev {
  date: string;
  title: string;
  type: EventType;
}

interface MonthGroup {
  month: string;
  events: Ev[];
}

const calendar: MonthGroup[] = [
  {
    month: "February 2026",
    events: [
      { date: "09 Feb", title: "Last exam – Class 8th & 9th", type: "exam" },
      { date: "13–14 Feb", title: "Teachers Workshop", type: "event" },
      { date: "16 Feb", title: "Annual Exam PTM – Class 8th, 9th & 11th", type: "event" },
      { date: "18 Feb", title: "New Session – Class 9th, 10th & 12th", type: "event" },
      { date: "21 Feb", title: "Orientation Class 9th & 10th | UKG Graduation", type: "orientation" },
      { date: "28 Feb", title: "Science Day – Exhibition", type: "celebration" },
    ],
  },
  {
    month: "March 2026",
    events: [
      { date: "02 Mar", title: "IT Annual Exams – Class 1st to 7th", type: "exam" },
      { date: "07 Mar", title: "Annual Exam starts – Class 3rd to 7th", type: "exam" },
      { date: "09 Mar", title: "Annual Exam starts – Class 1st & 2nd", type: "exam" },
      { date: "12 Mar", title: "Sri Jagadguru Renukacharya Jayanthi", type: "celebration" },
      { date: "18 Mar", title: "Annual Exam concludes for all classes", type: "exam" },
      { date: "19 Mar", title: "Ugadi", type: "holiday" },
      { date: "21 Mar", title: "Ramzan", type: "holiday" },
      { date: "27 Mar", title: "Annual Exam PTM / Book Sale – Pre-Primary to Class 2nd", type: "event" },
      { date: "28 Mar", title: "Annual Exam PTM / Book Sale – Class 3rd to 7th", type: "event" },
      { date: "30 Mar", title: "PT-1 – Class 9th, 10th & 12th", type: "exam" },
      { date: "31 Mar", title: "Mahavir Jayanthi", type: "holiday" },
    ],
  },
  {
    month: "April 2026",
    events: [
      { date: "01 Apr", title: "School reopens – Class 1st to 8th", type: "event" },
      { date: "03 Apr", title: "Good Friday", type: "holiday" },
      { date: "10 Apr", title: "Last working day & PTM – Class 9th, 10th & 12th", type: "event" },
      { date: "11 Apr", title: "Summer Vacation begins – Pre-Primary to Class X", type: "holiday" },
      { date: "14 Apr", title: "Ambedkar Jayanthi", type: "holiday" },
      { date: "20 Apr", title: "Basava Jayanthi", type: "holiday" },
      { date: "24 Apr", title: "Closing date for Grade 12th", type: "event" },
    ],
  },
  {
    month: "May 2026",
    events: [
      { date: "01 May", title: "Labour Day", type: "holiday" },
      { date: "11 May", title: "School reopens – Class 11, 12 & Teachers", type: "event" },
      { date: "16 May", title: "Orientation – Class 8th, 9th & 10th", type: "orientation" },
      { date: "18 May", title: "School reopens – Class 8th to 10th", type: "event" },
      { date: "21 May", title: "Orientation – Class 6th & 7th", type: "orientation" },
      { date: "23 May", title: "Orientation – Class 1st to 5th", type: "orientation" },
      { date: "25 May", title: "School reopens – Class 1st to 7th", type: "event" },
      { date: "28 May", title: "Bakrid", type: "holiday" },
      { date: "30 May", title: "Orientation – Pre-Primary", type: "orientation" },
    ],
  },
  {
    month: "June 2026",
    events: [
      { date: "01 Jun", title: "School reopens – Nursery, LKG, UKG", type: "event" },
      { date: "03 Jun", title: "World Bicycle Day", type: "celebration" },
      { date: "05 Jun", title: "Environment Day Celebration", type: "celebration" },
      { date: "06 Jun", title: "Orientation – Class 11th", type: "orientation" },
      { date: "11 Jun", title: "Investiture Ceremony", type: "event" },
      { date: "20 Jun", title: "Yoga Day", type: "celebration" },
      { date: "26 Jun", title: "Moharam", type: "holiday" },
      { date: "27 Jun", title: "Fresher's Day – Class 11th", type: "celebration" },
      { date: "29 Jun", title: "PT-1 – Class 1st to 10th", type: "exam" },
    ],
  },
  {
    month: "July 2026",
    events: [
      { date: "11 Jul", title: "PTM – Class 1st to 8th", type: "event" },
      { date: "26 Jul", title: "Kargil Vijay Diwas", type: "celebration" },
      { date: "29 Jul", title: "Guru Purnima", type: "celebration" },
    ],
  },
  {
    month: "August 2026",
    events: [
      { date: "01 Aug", title: "Periodic Test-2 – Class 1st to 10th", type: "exam" },
      { date: "15 Aug", title: "Independence Day", type: "celebration" },
      { date: "21 Aug", title: "Varamahalakshmi", type: "holiday" },
      { date: "26 Aug", title: "Eid-Milad", type: "holiday" },
      { date: "28–29 Aug", title: "Sports Day", type: "event" },
    ],
  },
  {
    month: "September 2026",
    events: [
      { date: "04 Sep", title: "Teacher's Day Celebration", type: "celebration" },
      { date: "05 Sep", title: "Teacher's Trip", type: "event" },
      { date: "14 Sep", title: "Ganesha Chaturthi", type: "holiday" },
      { date: "28 Sep", title: "IT Mid-Term Exam – Class 1st to 10th", type: "exam" },
    ],
  },
  {
    month: "October 2026",
    events: [
      { date: "01 Oct", title: "Mid-Term Test / Pre-Board", type: "exam" },
      { date: "02 Oct", title: "Gandhi Jayanthi", type: "holiday" },
      { date: "12 Oct", title: "Mid-Term Last Exam", type: "exam" },
      { date: "13 Oct", title: "Dussehra Celebration for Teachers", type: "celebration" },
      { date: "14–15 Oct", title: "Workshop", type: "event" },
      { date: "16 Oct", title: "Class 9th, 10th & 11th Trip", type: "event" },
      { date: "20 Oct", title: "Ayudha Pooje", type: "holiday" },
      { date: "21 Oct", title: "Vijayadashami", type: "holiday" },
      { date: "26 Oct", title: "Valmiki Jayanthi", type: "holiday" },
      { date: "27 Oct", title: "School Re-opens", type: "event" },
      { date: "31 Oct", title: "PTM – Class Nursery to 10th", type: "event" },
    ],
  },
  {
    month: "November 2026",
    events: [
      { date: "01 Nov", title: "Kannada Rajyothsava", type: "celebration" },
      { date: "06 Nov", title: "Kannada Rajyothsava Celebration in School", type: "celebration" },
      { date: "09 Nov", title: "Amavasye", type: "holiday" },
      { date: "10 Nov", title: "Balipadyami", type: "holiday" },
      { date: "13 Nov", title: "Children's Day Celebration", type: "celebration" },
      { date: "25 Nov", title: "Annual Day – Pre-Primary & Primary", type: "event" },
      { date: "26 Nov", title: "Annual Day – Secondary & Senior Secondary", type: "event" },
      { date: "27 Nov", title: "Kanakadasa Jayanthi", type: "holiday" },
    ],
  },
  {
    month: "December 2026",
    events: [
      { date: "07 Dec", title: "Sahodaya Pre-Finals – Class 9th & 11th", type: "exam" },
      { date: "23 Dec", title: "Christmas Celebration", type: "celebration" },
      { date: "24 Dec", title: "Christmas Vacation", type: "holiday" },
    ],
  },
  {
    month: "January 2027",
    events: [
      { date: "01 Jan", title: "School reopens – Pre-Primary to Class 12", type: "event" },
      { date: "06 Jan", title: "PT-3 – Class 1st to 7th / Pre-Finals – Class 8th", type: "exam" },
      { date: "13 Jan", title: "PT-3 Concludes", type: "exam" },
      { date: "14 Jan", title: "Sankranthi", type: "holiday" },
      { date: "18 Jan", title: "Pre-Finals Conclude – Class 8th", type: "exam" },
      { date: "23 Jan", title: "Class X & XII Farewell", type: "celebration" },
      { date: "26 Jan", title: "Republic Day Celebration", type: "celebration" },
    ],
  },
  {
    month: "February 2027",
    events: [
      { date: "01 Feb", title: "Final Exam – Class 8th, 9th & 11th", type: "exam" },
      { date: "12 Feb", title: "Final Exam Concludes – Class 8th, 9th & 11th", type: "exam" },
      { date: "20 Feb", title: "PTM – Class 8th, 9th & 11th", type: "event" },
      { date: "22 Feb", title: "New Session – Class 9th, 10th & 12th", type: "event" },
      { date: "27 Feb", title: "Science Exhibition", type: "celebration" },
    ],
  },
  {
    month: "March 2027",
    events: [
      { date: "06 Mar", title: "Shivarathri", type: "holiday" },
      { date: "10 Mar", title: "Ramzan", type: "holiday" },
      { date: "12 Mar", title: "Sri Jagadguru Renukacharya Jayanthi", type: "celebration" },
      { date: "15 Mar", title: "Annual Exam – Class 3rd to 7th", type: "exam" },
      { date: "17 Mar", title: "Annual Exam – Class 1st & 2nd", type: "exam" },
      { date: "26 Mar", title: "Good Friday", type: "holiday" },
      { date: "30 Mar", title: "PTM / Book Sales – Pre-Primary to Class 2nd", type: "event" },
      { date: "31 Mar", title: "PTM / Book Sales – Class 3rd to 7th", type: "event" },
    ],
  },
];

const typeStyles: Record<EventType, { badge: string; icon: React.ComponentType<{ className?: string }>; label: string }> = {
  exam: { badge: "bg-saffron-orange/15 text-saffron-orange border-saffron-orange/30", icon: ClipboardList, label: "Exam" },
  holiday: { badge: "bg-logo-maroon/10 text-logo-maroon border-logo-maroon/30", icon: Flag, label: "Holiday" },
  event: { badge: "bg-indian-green/10 text-indian-green border-indian-green/30", icon: Calendar, label: "Event" },
  celebration: { badge: "bg-golden-yellow/20 text-school-brown border-golden-yellow/40", icon: PartyPopper, label: "Celebration" },
  orientation: { badge: "bg-logo-navy/10 text-logo-navy border-logo-navy/30", icon: GraduationCap, label: "Orientation" },
};

const CalendarEvents = () => {
  return (
    <Layout>
      <PageHero
        title="Academic Calendar"
        breadcrumbs={[
          { label: "Academics", path: "/academics" },
          { label: "Calendar" },
        ]}
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">A Year of Learning & Celebration</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-lg text-foreground/80 leading-relaxed">
            Calendar of Events for the academic session <span className="font-semibold text-indian-green">2026–27</span>.
            A clear roadmap of teaching days, assessments, holidays, and signature events to help students,
            parents, and staff plan and participate fully in school life.
          </p>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Calendar Highlights</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-12" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((it, i) => (
              <Card key={i} className="border-indian-green/20 hover:shadow-lg hover:-translate-y-1 transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-indian-green flex items-center justify-center mb-4">
                    <it.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{it.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{it.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Highlights – Month-wise Accordion Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-3">Annual Highlights</h2>
          <div className="mx-auto h-1 w-20 bg-indian-green rounded-full mb-6" />
          <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
            Month-wise breakdown of all important events, examinations, holidays and celebrations for 2026–27.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {(Object.keys(typeStyles) as EventType[]).map((k) => {
              const s = typeStyles[k];
              const Icon = s.icon;
              return (
                <span key={k} className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${s.badge}`}>
                  <Icon className="h-3.5 w-3.5" />
                  {s.label}
                </span>
              );
            })}
          </div>

          <Accordion type="multiple" defaultValue={[calendar[0].month]} className="space-y-4">
            {calendar.map((group) => (
              <AccordionItem
                key={group.month}
                value={group.month}
                className="border border-indian-green/20 rounded-xl bg-card overflow-hidden data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-indian-green/5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-xl bg-indian-green/10 text-indian-green flex items-center justify-center flex-shrink-0">
                      <CalendarDays className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-black">{group.month}</h3>
                      <p className="text-xs md:text-sm text-foreground/60">{group.events.length} event{group.events.length !== 1 ? "s" : ""}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5">
                  <div className="relative pl-6 md:pl-8 border-l-2 border-indian-green/20 space-y-4">
                    {group.events.map((ev, i) => {
                      const style = typeStyles[ev.type];
                      const Icon = style.icon;
                      return (
                        <div key={i} className="relative">
                          <span className="absolute -left-[29px] md:-left-[37px] top-1.5 w-4 h-4 rounded-full bg-indian-green ring-4 ring-background" />
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 bg-muted/30 hover:bg-muted/60 transition-colors rounded-lg px-4 py-3">
                            <div className="flex items-start gap-3">
                              <div className="w-9 h-9 rounded-lg bg-background flex items-center justify-center flex-shrink-0 border border-border">
                                <Icon className="h-4.5 w-4.5 text-indian-green" />
                              </div>
                              <div>
                                <p className="font-semibold text-black leading-tight">{ev.title}</p>
                                <p className="text-xs text-foreground/60 mt-0.5">{ev.date}</p>
                              </div>
                            </div>
                            <span className={`self-start sm:self-center text-xs px-2.5 py-1 rounded-full border ${style.badge} whitespace-nowrap`}>
                              {style.label}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Download */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="border-indian-green/20 bg-indian-green/5">
            <CardContent className="p-10 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indian-green flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Academic Calendar Download</h2>
              <p className="text-foreground/75 mb-6">
                Access the complete Calendar of Events 2026–27 with all important dates, events and assessments.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild className="bg-indian-green hover:bg-indian-green/90 text-white">
                  <a href="/COE-2026.pdf" download="COE-2026.pdf">
                    <Download className="h-4 w-4 mr-2" /> Download PDF
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-indian-green text-indian-green hover:bg-indian-green hover:text-white">
                  <a href="/COE-2026.pdf" target="_blank" rel="noopener noreferrer">
                    <Eye className="h-4 w-4 mr-2" /> View PDF
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default CalendarEvents;
