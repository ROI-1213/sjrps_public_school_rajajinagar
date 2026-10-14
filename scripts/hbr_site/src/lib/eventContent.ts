import { formatNewsDate } from "/src/lib/newsContent.ts";
const homepageEvents = [
    {
        key: "homepage-parent-teacher-meeting",
        source: "homepage",
        title: "Parent-Teacher Meeting",
        date: "April 20, 2026",
        dateValue: "2026-04-20",
        isVisible: true,
        displayOrder: 1
    },
    {
        key: "homepage-inter-house-quiz-competition",
        source: "homepage",
        title: "Inter-House Quiz Competition",
        date: "April 25, 2026",
        dateValue: "2026-04-25",
        isVisible: true,
        displayOrder: 2
    },
    {
        key: "homepage-yoga-meditation-workshop",
        source: "homepage",
        title: "Yoga & Meditation Workshop",
        date: "May 5, 2026",
        dateValue: "2026-05-05",
        isVisible: true,
        displayOrder: 3
    },
    {
        key: "homepage-annual-day-celebrations",
        source: "homepage",
        title: "Annual Day Celebrations",
        date: "May 15, 2026",
        dateValue: "2026-05-15",
        isVisible: true,
        displayOrder: 4
    },
    {
        key: "homepage-science-olympiad-finals",
        source: "homepage",
        title: "Science Olympiad Finals",
        date: "May 22, 2026",
        dateValue: "2026-05-22",
        isVisible: true,
        displayOrder: 5
    },
    {
        key: "homepage-summer-reading-program",
        source: "homepage",
        title: "Summer Reading Program",
        date: "June 1, 2026",
        dateValue: "2026-06-01",
        isVisible: true,
        displayOrder: 6
    },
    {
        key: "homepage-new-academic-session-begins",
        source: "homepage",
        title: "New Academic Session Begins",
        date: "June 10, 2026",
        dateValue: "2026-06-10",
        isVisible: true,
        displayOrder: 7
    },
    {
        key: "homepage-investiture-ceremony",
        source: "homepage",
        title: "Investiture Ceremony",
        date: "June 18, 2026",
        dateValue: "2026-06-18",
        isVisible: true,
        displayOrder: 8
    }
];
const monthNumbers = {
    jan: "01",
    january: "01",
    feb: "02",
    february: "02",
    mar: "03",
    march: "03",
    apr: "04",
    april: "04",
    may: "05",
    jun: "06",
    june: "06",
    jul: "07",
    july: "07",
    aug: "08",
    august: "08",
    sep: "09",
    sept: "09",
    september: "09",
    oct: "10",
    october: "10",
    nov: "11",
    november: "11",
    dec: "12",
    december: "12"
};
export const eventDateLabelToISO = (label)=>{
    const clean = label.trim().replace(/[–—]/g, "-").replace(/,/g, "");
    const rangeMatch = clean.match(/(?:\d{1,2}\s*-\s*)?(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
    if (rangeMatch) {
        const [, day, month, year] = rangeMatch;
        const monthNumber = monthNumbers[month.toLowerCase()];
        if (monthNumber) return `${year}-${monthNumber}-${day.padStart(2, "0")}`;
    }
    const parsed = new Date(clean);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
    return "";
};
const databaseEventToDisplay = (item)=>({
        key: `database-${item.id}`,
        source: "database",
        adminItem: item,
        title: item.title,
        date: typeof item.fields?.dateLabel === "string" && item.fields.dateLabel ? item.fields.dateLabel : formatNewsDate(item.published_at),
        dateValue: item.published_at || item.created_at,
        isVisible: item.is_visible,
        displayOrder: item.display_order || 0
    });
export const mergeEventItems = (adminEvents = [])=>{
    const byTitle = new Map();
    homepageEvents.forEach((item)=>byTitle.set(item.title.toLowerCase(), item));
    adminEvents.forEach((item)=>{
        const displayItem = databaseEventToDisplay(item);
        byTitle.set(displayItem.title.toLowerCase(), displayItem);
    });
    return Array.from(byTitle.values()).sort((a, b)=>new Date(b.dateValue).getTime() - new Date(a.dateValue).getTime());
};
export const eventDisplayToPayload = (item)=>({
        title: item.title,
        subtitle: "",
        body: "",
        image_url: "",
        category: "",
        published_at: item.dateValue,
        is_visible: item.isVisible,
        display_order: item.displayOrder,
        fields: {
            ...item.adminItem?.fields || {},
            dateLabel: item.date
        }
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50Q29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFkbWluQ29udGVudEl0ZW0sIEFkbWluQ29udGVudFBheWxvYWQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBmb3JtYXROZXdzRGF0ZSB9IGZyb20gXCJAL2xpYi9uZXdzQ29udGVudFwiO1xuXG5leHBvcnQgdHlwZSBFdmVudERpc3BsYXlJdGVtID0ge1xuICBrZXk6IHN0cmluZztcbiAgc291cmNlOiBcImRhdGFiYXNlXCIgfCBcImhvbWVwYWdlXCI7XG4gIGFkbWluSXRlbT86IEFkbWluQ29udGVudEl0ZW07XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbiAgZGF0ZVZhbHVlOiBzdHJpbmc7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59O1xuXG5jb25zdCBob21lcGFnZUV2ZW50czogRXZlbnREaXNwbGF5SXRlbVtdID0gW1xuICB7IGtleTogXCJob21lcGFnZS1wYXJlbnQtdGVhY2hlci1tZWV0aW5nXCIsIHNvdXJjZTogXCJob21lcGFnZVwiLCB0aXRsZTogXCJQYXJlbnQtVGVhY2hlciBNZWV0aW5nXCIsIGRhdGU6IFwiQXByaWwgMjAsIDIwMjZcIiwgZGF0ZVZhbHVlOiBcIjIwMjYtMDQtMjBcIiwgaXNWaXNpYmxlOiB0cnVlLCBkaXNwbGF5T3JkZXI6IDEgfSxcbiAgeyBrZXk6IFwiaG9tZXBhZ2UtaW50ZXItaG91c2UtcXVpei1jb21wZXRpdGlvblwiLCBzb3VyY2U6IFwiaG9tZXBhZ2VcIiwgdGl0bGU6IFwiSW50ZXItSG91c2UgUXVpeiBDb21wZXRpdGlvblwiLCBkYXRlOiBcIkFwcmlsIDI1LCAyMDI2XCIsIGRhdGVWYWx1ZTogXCIyMDI2LTA0LTI1XCIsIGlzVmlzaWJsZTogdHJ1ZSwgZGlzcGxheU9yZGVyOiAyIH0sXG4gIHsga2V5OiBcImhvbWVwYWdlLXlvZ2EtbWVkaXRhdGlvbi13b3Jrc2hvcFwiLCBzb3VyY2U6IFwiaG9tZXBhZ2VcIiwgdGl0bGU6IFwiWW9nYSAmIE1lZGl0YXRpb24gV29ya3Nob3BcIiwgZGF0ZTogXCJNYXkgNSwgMjAyNlwiLCBkYXRlVmFsdWU6IFwiMjAyNi0wNS0wNVwiLCBpc1Zpc2libGU6IHRydWUsIGRpc3BsYXlPcmRlcjogMyB9LFxuICB7IGtleTogXCJob21lcGFnZS1hbm51YWwtZGF5LWNlbGVicmF0aW9uc1wiLCBzb3VyY2U6IFwiaG9tZXBhZ2VcIiwgdGl0bGU6IFwiQW5udWFsIERheSBDZWxlYnJhdGlvbnNcIiwgZGF0ZTogXCJNYXkgMTUsIDIwMjZcIiwgZGF0ZVZhbHVlOiBcIjIwMjYtMDUtMTVcIiwgaXNWaXNpYmxlOiB0cnVlLCBkaXNwbGF5T3JkZXI6IDQgfSxcbiAgeyBrZXk6IFwiaG9tZXBhZ2Utc2NpZW5jZS1vbHltcGlhZC1maW5hbHNcIiwgc291cmNlOiBcImhvbWVwYWdlXCIsIHRpdGxlOiBcIlNjaWVuY2UgT2x5bXBpYWQgRmluYWxzXCIsIGRhdGU6IFwiTWF5IDIyLCAyMDI2XCIsIGRhdGVWYWx1ZTogXCIyMDI2LTA1LTIyXCIsIGlzVmlzaWJsZTogdHJ1ZSwgZGlzcGxheU9yZGVyOiA1IH0sXG4gIHsga2V5OiBcImhvbWVwYWdlLXN1bW1lci1yZWFkaW5nLXByb2dyYW1cIiwgc291cmNlOiBcImhvbWVwYWdlXCIsIHRpdGxlOiBcIlN1bW1lciBSZWFkaW5nIFByb2dyYW1cIiwgZGF0ZTogXCJKdW5lIDEsIDIwMjZcIiwgZGF0ZVZhbHVlOiBcIjIwMjYtMDYtMDFcIiwgaXNWaXNpYmxlOiB0cnVlLCBkaXNwbGF5T3JkZXI6IDYgfSxcbiAgeyBrZXk6IFwiaG9tZXBhZ2UtbmV3LWFjYWRlbWljLXNlc3Npb24tYmVnaW5zXCIsIHNvdXJjZTogXCJob21lcGFnZVwiLCB0aXRsZTogXCJOZXcgQWNhZGVtaWMgU2Vzc2lvbiBCZWdpbnNcIiwgZGF0ZTogXCJKdW5lIDEwLCAyMDI2XCIsIGRhdGVWYWx1ZTogXCIyMDI2LTA2LTEwXCIsIGlzVmlzaWJsZTogdHJ1ZSwgZGlzcGxheU9yZGVyOiA3IH0sXG4gIHsga2V5OiBcImhvbWVwYWdlLWludmVzdGl0dXJlLWNlcmVtb255XCIsIHNvdXJjZTogXCJob21lcGFnZVwiLCB0aXRsZTogXCJJbnZlc3RpdHVyZSBDZXJlbW9ueVwiLCBkYXRlOiBcIkp1bmUgMTgsIDIwMjZcIiwgZGF0ZVZhbHVlOiBcIjIwMjYtMDYtMThcIiwgaXNWaXNpYmxlOiB0cnVlLCBkaXNwbGF5T3JkZXI6IDggfSxcbl07XG5cbmNvbnN0IG1vbnRoTnVtYmVyczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgamFuOiBcIjAxXCIsXG4gIGphbnVhcnk6IFwiMDFcIixcbiAgZmViOiBcIjAyXCIsXG4gIGZlYnJ1YXJ5OiBcIjAyXCIsXG4gIG1hcjogXCIwM1wiLFxuICBtYXJjaDogXCIwM1wiLFxuICBhcHI6IFwiMDRcIixcbiAgYXByaWw6IFwiMDRcIixcbiAgbWF5OiBcIjA1XCIsXG4gIGp1bjogXCIwNlwiLFxuICBqdW5lOiBcIjA2XCIsXG4gIGp1bDogXCIwN1wiLFxuICBqdWx5OiBcIjA3XCIsXG4gIGF1ZzogXCIwOFwiLFxuICBhdWd1c3Q6IFwiMDhcIixcbiAgc2VwOiBcIjA5XCIsXG4gIHNlcHQ6IFwiMDlcIixcbiAgc2VwdGVtYmVyOiBcIjA5XCIsXG4gIG9jdDogXCIxMFwiLFxuICBvY3RvYmVyOiBcIjEwXCIsXG4gIG5vdjogXCIxMVwiLFxuICBub3ZlbWJlcjogXCIxMVwiLFxuICBkZWM6IFwiMTJcIixcbiAgZGVjZW1iZXI6IFwiMTJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBldmVudERhdGVMYWJlbFRvSVNPID0gKGxhYmVsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgY2xlYW4gPSBsYWJlbC50cmltKCkucmVwbGFjZSgvW+KAk+KAlF0vZywgXCItXCIpLnJlcGxhY2UoLywvZywgXCJcIik7XG4gIGNvbnN0IHJhbmdlTWF0Y2ggPSBjbGVhbi5tYXRjaCgvKD86XFxkezEsMn1cXHMqLVxccyopPyhcXGR7MSwyfSlcXHMrKFtBLVphLXpdKylcXHMrKFxcZHs0fSkvKTtcbiAgaWYgKHJhbmdlTWF0Y2gpIHtcbiAgICBjb25zdCBbLCBkYXksIG1vbnRoLCB5ZWFyXSA9IHJhbmdlTWF0Y2g7XG4gICAgY29uc3QgbW9udGhOdW1iZXIgPSBtb250aE51bWJlcnNbbW9udGgudG9Mb3dlckNhc2UoKV07XG4gICAgaWYgKG1vbnRoTnVtYmVyKSByZXR1cm4gYCR7eWVhcn0tJHttb250aE51bWJlcn0tJHtkYXkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cblxuICBjb25zdCBwYXJzZWQgPSBuZXcgRGF0ZShjbGVhbik7XG4gIGlmICghTnVtYmVyLmlzTmFOKHBhcnNlZC5nZXRUaW1lKCkpKSByZXR1cm4gcGFyc2VkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICByZXR1cm4gXCJcIjtcbn07XG5cbmNvbnN0IGRhdGFiYXNlRXZlbnRUb0Rpc3BsYXkgPSAoaXRlbTogQWRtaW5Db250ZW50SXRlbSk6IEV2ZW50RGlzcGxheUl0ZW0gPT4gKHtcbiAga2V5OiBgZGF0YWJhc2UtJHtpdGVtLmlkfWAsXG4gIHNvdXJjZTogXCJkYXRhYmFzZVwiLFxuICBhZG1pbkl0ZW06IGl0ZW0sXG4gIHRpdGxlOiBpdGVtLnRpdGxlLFxuICBkYXRlOiB0eXBlb2YgaXRlbS5maWVsZHM/LmRhdGVMYWJlbCA9PT0gXCJzdHJpbmdcIiAmJiBpdGVtLmZpZWxkcy5kYXRlTGFiZWwgPyBpdGVtLmZpZWxkcy5kYXRlTGFiZWwgOiBmb3JtYXROZXdzRGF0ZShpdGVtLnB1Ymxpc2hlZF9hdCksXG4gIGRhdGVWYWx1ZTogaXRlbS5wdWJsaXNoZWRfYXQgfHwgaXRlbS5jcmVhdGVkX2F0LFxuICBpc1Zpc2libGU6IGl0ZW0uaXNfdmlzaWJsZSxcbiAgZGlzcGxheU9yZGVyOiBpdGVtLmRpc3BsYXlfb3JkZXIgfHwgMCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWVyZ2VFdmVudEl0ZW1zID0gKGFkbWluRXZlbnRzOiBBZG1pbkNvbnRlbnRJdGVtW10gPSBbXSkgPT4ge1xuICBjb25zdCBieVRpdGxlID0gbmV3IE1hcDxzdHJpbmcsIEV2ZW50RGlzcGxheUl0ZW0+KCk7XG4gIGhvbWVwYWdlRXZlbnRzLmZvckVhY2goKGl0ZW0pID0+IGJ5VGl0bGUuc2V0KGl0ZW0udGl0bGUudG9Mb3dlckNhc2UoKSwgaXRlbSkpO1xuICBhZG1pbkV2ZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheUl0ZW0gPSBkYXRhYmFzZUV2ZW50VG9EaXNwbGF5KGl0ZW0pO1xuICAgIGJ5VGl0bGUuc2V0KGRpc3BsYXlJdGVtLnRpdGxlLnRvTG93ZXJDYXNlKCksIGRpc3BsYXlJdGVtKTtcbiAgfSk7XG4gIHJldHVybiBBcnJheS5mcm9tKGJ5VGl0bGUudmFsdWVzKCkpLnNvcnQoXG4gICAgKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZVZhbHVlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShhLmRhdGVWYWx1ZSkuZ2V0VGltZSgpXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZXZlbnREaXNwbGF5VG9QYXlsb2FkID0gKGl0ZW06IEV2ZW50RGlzcGxheUl0ZW0pOiBBZG1pbkNvbnRlbnRQYXlsb2FkID0+ICh7XG4gIHRpdGxlOiBpdGVtLnRpdGxlLFxuICBzdWJ0aXRsZTogXCJcIixcbiAgYm9keTogXCJcIixcbiAgaW1hZ2VfdXJsOiBcIlwiLFxuICBjYXRlZ29yeTogXCJcIixcbiAgcHVibGlzaGVkX2F0OiBpdGVtLmRhdGVWYWx1ZSxcbiAgaXNfdmlzaWJsZTogaXRlbS5pc1Zpc2libGUsXG4gIGRpc3BsYXlfb3JkZXI6IGl0ZW0uZGlzcGxheU9yZGVyLFxuICBmaWVsZHM6IHtcbiAgICAuLi4oaXRlbS5hZG1pbkl0ZW0/LmZpZWxkcyB8fCB7fSksXG4gICAgZGF0ZUxhYmVsOiBpdGVtLmRhdGUsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJmb3JtYXROZXdzRGF0ZSIsImhvbWVwYWdlRXZlbnRzIiwia2V5Iiwic291cmNlIiwidGl0bGUiLCJkYXRlIiwiZGF0ZVZhbHVlIiwiaXNWaXNpYmxlIiwiZGlzcGxheU9yZGVyIiwibW9udGhOdW1iZXJzIiwiamFuIiwiamFudWFyeSIsImZlYiIsImZlYnJ1YXJ5IiwibWFyIiwibWFyY2giLCJhcHIiLCJhcHJpbCIsIm1heSIsImp1biIsImp1bmUiLCJqdWwiLCJqdWx5IiwiYXVnIiwiYXVndXN0Iiwic2VwIiwic2VwdCIsInNlcHRlbWJlciIsIm9jdCIsIm9jdG9iZXIiLCJub3YiLCJub3ZlbWJlciIsImRlYyIsImRlY2VtYmVyIiwiZXZlbnREYXRlTGFiZWxUb0lTTyIsImxhYmVsIiwiY2xlYW4iLCJ0cmltIiwicmVwbGFjZSIsInJhbmdlTWF0Y2giLCJtYXRjaCIsImRheSIsIm1vbnRoIiwieWVhciIsIm1vbnRoTnVtYmVyIiwidG9Mb3dlckNhc2UiLCJwYWRTdGFydCIsInBhcnNlZCIsIkRhdGUiLCJOdW1iZXIiLCJpc05hTiIsImdldFRpbWUiLCJ0b0lTT1N0cmluZyIsInNsaWNlIiwiZGF0YWJhc2VFdmVudFRvRGlzcGxheSIsIml0ZW0iLCJpZCIsImFkbWluSXRlbSIsImZpZWxkcyIsImRhdGVMYWJlbCIsInB1Ymxpc2hlZF9hdCIsImNyZWF0ZWRfYXQiLCJpc192aXNpYmxlIiwiZGlzcGxheV9vcmRlciIsIm1lcmdlRXZlbnRJdGVtcyIsImFkbWluRXZlbnRzIiwiYnlUaXRsZSIsIk1hcCIsImZvckVhY2giLCJzZXQiLCJkaXNwbGF5SXRlbSIsIkFycmF5IiwiZnJvbSIsInZhbHVlcyIsInNvcnQiLCJhIiwiYiIsImV2ZW50RGlzcGxheVRvUGF5bG9hZCIsInN1YnRpdGxlIiwiYm9keSIsImltYWdlX3VybCIsImNhdGVnb3J5Il0sIm1hcHBpbmdzIjoiQUFDQSxTQUFTQSxjQUFjLFFBQVEsb0JBQW9CO0FBYW5ELE1BQU1DLGlCQUFxQztJQUN6QztRQUFFQyxLQUFLO1FBQW1DQyxRQUFRO1FBQVlDLE9BQU87UUFBMEJDLE1BQU07UUFBa0JDLFdBQVc7UUFBY0Ms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