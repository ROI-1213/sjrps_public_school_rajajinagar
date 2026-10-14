import sangeetha from "/src/assets/Sangeetha.jpg?import";
import deepa from "/src/assets/Deepa.jpg?import";
import ameena from "/src/assets/AMEENA.jpg?import";
import arvind from "/src/assets/ARVIND.jpg?import";
import ira from "/src/assets/Ira.jpg?import";
const frontendTestimonials = [
    {
        key: "frontend-sangeetha-ganesh",
        source: "frontend",
        name: "Sangeetha Ganesh",
        role: "Parent of Grade 7 Student - Darshith",
        category: "Parent",
        image: sangeetha,
        quote: "SJR Public School provides quality education with supportive teachers and a safe, value-based environment. My son has grown academically and developed leadership skills during his time here.",
        isVisible: true,
        displayOrder: 1
    },
    {
        key: "frontend-deepa-chandramouli",
        source: "frontend",
        name: "Mrs Deepa Chandramouli",
        role: "Parent of Grade 7 Student - Vaidoorya Kashyap",
        category: "Parent",
        image: deepa,
        quote: "Truly appreciate the importance given to co-curricular activities at SJR Public School, HBR Branch. The school provides many opportunities for children to explore their talents beyond academics. These activities have helped my daughter become more confident, active, and happy. I am grateful to the school for supporting the overall development of the students.",
        isVisible: true,
        displayOrder: 2
    },
    {
        key: "frontend-ameena-bano",
        source: "frontend",
        name: "Ameena Bano",
        role: "Parent of Grade 7 Student - Ayesha",
        category: "Parent",
        image: ameena,
        quote: "We are very happy to see the improvement in Ayesha's academic performance and overall personality development. The teachers are incredibly supportive and dedicated. Choosing this school was the best decision for our child.",
        isVisible: true,
        displayOrder: 3
    },
    {
        key: "frontend-arvind-miriyala",
        source: "frontend",
        name: "Arvind Miriyala",
        role: "Parent of Grade 7 Student - Ujwal Miriyala",
        category: "Parent",
        image: arvind,
        quote: "SJR Public School provides an environment that promotes overall development through activities such as debate competitions, science exhibitions, Vedic Maths, Scouts & Guides, and Taekwondo. Combined with inspiring teachers, the school continues to provide an excellent platform for my children to learn, grow, and excel.",
        isVisible: true,
        displayOrder: 4
    },
    {
        key: "frontend-shruti-manisha",
        source: "frontend",
        name: "Shruti Manisha",
        role: "Parent of Grade 7 - Ira Sreenith",
        category: "Parent",
        image: ira,
        quote: "We are extremely happy with our experience at SJR Public School, HBR Layout. Our ward studies in Class 7, and the school provides a nurturing, disciplined, and inspiring learning environment. The Principal's dynamic leadership and commitment to excellence are clearly reflected in the school's strong values and academic standards. A special thanks to all the teachers, their engaging teaching methods, clarity of concepts, and encouragement make learning enjoyable and effective. The school beautifully balances academics, discipline, and overall personality development. We truly appreciate the passion and dedication of the Principal and all the teachers in shaping confident and responsible students.",
        isVisible: true,
        displayOrder: 5
    }
];
const databaseTestimonialToDisplay = (item)=>({
        key: `database-${item.id}`,
        source: "database",
        adminItem: item,
        name: item.title,
        role: item.subtitle || "",
        category: item.category || "Parent",
        quote: item.body || "",
        image: item.image_url || "/placeholder.svg",
        isVisible: item.is_visible,
        displayOrder: item.display_order || 0
    });
export const mergeTestimonialItems = (adminTestimonials = [])=>{
    const byName = new Map();
    frontendTestimonials.forEach((item)=>byName.set(item.name.toLowerCase(), item));
    adminTestimonials.forEach((item)=>{
        const displayItem = databaseTestimonialToDisplay(item);
        byName.set(displayItem.name.toLowerCase(), displayItem);
    });
    return Array.from(byName.values()).sort((a, b)=>(a.displayOrder || 0) - (b.displayOrder || 0));
};
export const testimonialDisplayToPayload = (item)=>({
        title: item.name,
        subtitle: item.role,
        body: item.quote,
        image_url: item.image === "/placeholder.svg" ? "" : item.image,
        category: item.category,
        published_at: "",
        is_visible: item.isVisible,
        display_order: item.displayOrder,
        fields: item.adminItem?.fields || {}
    });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RpbW9uaWFsQ29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFkbWluQ29udGVudEl0ZW0sIEFkbWluQ29udGVudFBheWxvYWQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5cbmltcG9ydCBzYW5nZWV0aGEgZnJvbSBcIkAvYXNzZXRzL1NhbmdlZXRoYS5qcGdcIjtcbmltcG9ydCBkZWVwYSBmcm9tIFwiQC9hc3NldHMvRGVlcGEuanBnXCI7XG5pbXBvcnQgYW1lZW5hIGZyb20gXCJAL2Fzc2V0cy9BTUVFTkEuanBnXCI7XG5pbXBvcnQgYXJ2aW5kIGZyb20gXCJAL2Fzc2V0cy9BUlZJTkQuanBnXCI7XG5pbXBvcnQgaXJhIGZyb20gXCJAL2Fzc2V0cy9JcmEuanBnXCI7XG5cbmV4cG9ydCB0eXBlIFRlc3RpbW9uaWFsRGlzcGxheUl0ZW0gPSB7XG4gIGtleTogc3RyaW5nO1xuICBzb3VyY2U6IFwiZGF0YWJhc2VcIiB8IFwiZnJvbnRlbmRcIjtcbiAgYWRtaW5JdGVtPzogQWRtaW5Db250ZW50SXRlbTtcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHF1b3RlOiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbiAgZGlzcGxheU9yZGVyOiBudW1iZXI7XG59O1xuXG5jb25zdCBmcm9udGVuZFRlc3RpbW9uaWFsczogVGVzdGltb25pYWxEaXNwbGF5SXRlbVtdID0gW1xuICB7XG4gICAga2V5OiBcImZyb250ZW5kLXNhbmdlZXRoYS1nYW5lc2hcIixcbiAgICBzb3VyY2U6IFwiZnJvbnRlbmRcIixcbiAgICBuYW1lOiBcIlNhbmdlZXRoYSBHYW5lc2hcIixcbiAgICByb2xlOiBcIlBhcmVudCBvZiBHcmFkZSA3IFN0dWRlbnQgLSBEYXJzaGl0aFwiLFxuICAgIGNhdGVnb3J5OiBcIlBhcmVudFwiLFxuICAgIGltYWdlOiBzYW5nZWV0aGEsXG4gICAgcXVvdGU6IFwiU0pSIFB1YmxpYyBTY2hvb2wgcHJvdmlkZXMgcXVhbGl0eSBlZHVjYXRpb24gd2l0aCBzdXBwb3J0aXZlIHRlYWNoZXJzIGFuZCBhIHNhZmUsIHZhbHVlLWJhc2VkIGVudmlyb25tZW50LiBNeSBzb24gaGFzIGdyb3duIGFjYWRlbWljYWxseSBhbmQgZGV2ZWxvcGVkIGxlYWRlcnNoaXAgc2tpbGxzIGR1cmluZyBoaXMgdGltZSBoZXJlLlwiLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBkaXNwbGF5T3JkZXI6IDEsXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiZnJvbnRlbmQtZGVlcGEtY2hhbmRyYW1vdWxpXCIsXG4gICAgc291cmNlOiBcImZyb250ZW5kXCIsXG4gICAgbmFtZTogXCJNcnMgRGVlcGEgQ2hhbmRyYW1vdWxpXCIsXG4gICAgcm9sZTogXCJQYXJlbnQgb2YgR3JhZGUgNyBTdHVkZW50IC0gVmFpZG9vcnlhIEthc2h5YXBcIixcbiAgICBjYXRlZ29yeTogXCJQYXJlbnRcIixcbiAgICBpbWFnZTogZGVlcGEsXG4gICAgcXVvdGU6IFwiVHJ1bHkgYXBwcmVjaWF0ZSB0aGUgaW1wb3J0YW5jZSBnaXZlbiB0byBjby1jdXJyaWN1bGFyIGFjdGl2aXRpZXMgYXQgU0pSIFB1YmxpYyBTY2hvb2wsIEhCUiBCcmFuY2guIFRoZSBzY2hvb2wgcHJvdmlkZXMgbWFueSBvcHBvcnR1bml0aWVzIGZvciBjaGlsZHJlbiB0byBleHBsb3JlIHRoZWlyIHRhbGVudHMgYmV5b25kIGFjYWRlbWljcy4gVGhlc2UgYWN0aXZpdGllcyBoYXZlIGhlbHBlZCBteSBkYXVnaHRlciBiZWNvbWUgbW9yZSBjb25maWRlbnQsIGFjdGl2ZSwgYW5kIGhhcHB5LiBJIGFtIGdyYXRlZnVsIHRvIHRoZSBzY2hvb2wgZm9yIHN1cHBvcnRpbmcgdGhlIG92ZXJhbGwgZGV2ZWxvcG1lbnQgb2YgdGhlIHN0dWRlbnRzLlwiLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBkaXNwbGF5T3JkZXI6IDIsXG4gIH0sXG4gIHtcbiAgICBrZXk6IFwiZnJvbnRlbmQtYW1lZW5hLWJhbm9cIixcbiAgICBzb3VyY2U6IFwiZnJvbnRlbmRcIixcbiAgICBuYW1lOiBcIkFtZWVuYSBCYW5vXCIsXG4gICAgcm9sZTogXCJQYXJlbnQgb2YgR3JhZGUgNyBTdHVkZW50IC0gQXllc2hhXCIsXG4gICAgY2F0ZWdvcnk6IFwiUGFyZW50XCIsXG4gICAgaW1hZ2U6IGFtZWVuYSxcbiAgICBxdW90ZTogXCJXZSBhcmUgdmVyeSBoYXBweSB0byBzZWUgdGhlIGltcHJvdmVtZW50IGluIEF5ZXNoYSdzIGFjYWRlbWljIHBlcmZvcm1hbmNlIGFuZCBvdmVyYWxsIHBlcnNvbmFsaXR5IGRldmVsb3BtZW50LiBUaGUgdGVhY2hlcnMgYXJlIGluY3JlZGlibHkgc3VwcG9ydGl2ZSBhbmQgZGVkaWNhdGVkLiBDaG9vc2luZyB0aGlzIHNjaG9vbCB3YXMgdGhlIGJlc3QgZGVjaXNpb24gZm9yIG91ciBjaGlsZC5cIixcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgZGlzcGxheU9yZGVyOiAzLFxuICB9LFxuICB7XG4gICAga2V5OiBcImZyb250ZW5kLWFydmluZC1taXJpeWFsYVwiLFxuICAgIHNvdXJjZTogXCJmcm9udGVuZFwiLFxuICAgIG5hbWU6IFwiQXJ2aW5kIE1pcml5YWxhXCIsXG4gICAgcm9sZTogXCJQYXJlbnQgb2YgR3JhZGUgNyBTdHVkZW50IC0gVWp3YWwgTWlyaXlhbGFcIixcbiAgICBjYXRlZ29yeTogXCJQYXJlbnRcIixcbiAgICBpbWFnZTogYXJ2aW5kLFxuICAgIHF1b3RlOiBcIlNKUiBQdWJsaWMgU2Nob29sIHByb3ZpZGVzIGFuIGVudmlyb25tZW50IHRoYXQgcHJvbW90ZXMgb3ZlcmFsbCBkZXZlbG9wbWVudCB0aHJvdWdoIGFjdGl2aXRpZXMgc3VjaCBhcyBkZWJhdGUgY29tcGV0aXRpb25zLCBzY2llbmNlIGV4aGliaXRpb25zLCBWZWRpYyBNYXRocywgU2NvdXRzICYgR3VpZGVzLCBhbmQgVGFla3dvbmRvLiBDb21iaW5lZCB3aXRoIGluc3BpcmluZyB0ZWFjaGVycywgdGhlIHNjaG9vbCBjb250aW51ZXMgdG8gcHJvdmlkZSBhbiBleGNlbGxlbnQgcGxhdGZvcm0gZm9yIG15IGNoaWxkcmVuIHRvIGxlYXJuLCBncm93LCBhbmQgZXhjZWwuXCIsXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGRpc3BsYXlPcmRlcjogNCxcbiAgfSxcbiAge1xuICAgIGtleTogXCJmcm9udGVuZC1zaHJ1dGktbWFuaXNoYVwiLFxuICAgIHNvdXJjZTogXCJmcm9udGVuZFwiLFxuICAgIG5hbWU6IFwiU2hydXRpIE1hbmlzaGFcIixcbiAgICByb2xlOiBcIlBhcmVudCBvZiBHcmFkZSA3IC0gSXJhIFNyZWVuaXRoXCIsXG4gICAgY2F0ZWdvcnk6IFwiUGFyZW50XCIsXG4gICAgaW1hZ2U6IGlyYSxcbiAgICBxdW90ZTogXCJXZSBhcmUgZXh0cmVtZWx5IGhhcHB5IHdpdGggb3VyIGV4cGVyaWVuY2UgYXQgU0pSIFB1YmxpYyBTY2hvb2wsIEhCUiBMYXlvdXQuIE91ciB3YXJkIHN0dWRpZXMgaW4gQ2xhc3MgNywgYW5kIHRoZSBzY2hvb2wgcHJvdmlkZXMgYSBudXJ0dXJpbmcsIGRpc2NpcGxpbmVkLCBhbmQgaW5zcGlyaW5nIGxlYXJuaW5nIGVudmlyb25tZW50LiBUaGUgUHJpbmNpcGFsJ3MgZHluYW1pYyBsZWFkZXJzaGlwIGFuZCBjb21taXRtZW50IHRvIGV4Y2VsbGVuY2UgYXJlIGNsZWFybHkgcmVmbGVjdGVkIGluIHRoZSBzY2hvb2wncyBzdHJvbmcgdmFsdWVzIGFuZCBhY2FkZW1pYyBzdGFuZGFyZHMuIEEgc3BlY2lhbCB0aGFua3MgdG8gYWxsIHRoZSB0ZWFjaGVycywgdGhlaXIgZW5nYWdpbmcgdGVhY2hpbmcgbWV0aG9kcywgY2xhcml0eSBvZiBjb25jZXB0cywgYW5kIGVuY291cmFnZW1lbnQgbWFrZSBsZWFybmluZyBlbmpveWFibGUgYW5kIGVmZmVjdGl2ZS4gVGhlIHNjaG9vbCBiZWF1dGlmdWxseSBiYWxhbmNlcyBhY2FkZW1pY3MsIGRpc2NpcGxpbmUsIGFuZCBvdmVyYWxsIHBlcnNvbmFsaXR5IGRldmVsb3BtZW50LiBXZSB0cnVseSBhcHByZWNpYXRlIHRoZSBwYXNzaW9uIGFuZCBkZWRpY2F0aW9uIG9mIHRoZSBQcmluY2lwYWwgYW5kIGFsbCB0aGUgdGVhY2hlcnMgaW4gc2hhcGluZyBjb25maWRlbnQgYW5kIHJlc3BvbnNpYmxlIHN0dWRlbnRzLlwiLFxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICBkaXNwbGF5T3JkZXI6IDUsXG4gIH0sXG5dO1xuXG5jb25zdCBkYXRhYmFzZVRlc3RpbW9uaWFsVG9EaXNwbGF5ID0gKGl0ZW06IEFkbWluQ29udGVudEl0ZW0pOiBUZXN0aW1vbmlhbERpc3BsYXlJdGVtID0+ICh7XG4gIGtleTogYGRhdGFiYXNlLSR7aXRlbS5pZH1gLFxuICBzb3VyY2U6IFwiZGF0YWJhc2VcIixcbiAgYWRtaW5JdGVtOiBpdGVtLFxuICBuYW1lOiBpdGVtLnRpdGxlLFxuICByb2xlOiBpdGVtLnN1YnRpdGxlIHx8IFwiXCIsXG4gIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5IHx8IFwiUGFyZW50XCIsXG4gIHF1b3RlOiBpdGVtLmJvZHkgfHwgXCJcIixcbiAgaW1hZ2U6IGl0ZW0uaW1hZ2VfdXJsIHx8IFwiL3BsYWNlaG9sZGVyLnN2Z1wiLFxuICBpc1Zpc2libGU6IGl0ZW0uaXNfdmlzaWJsZSxcbiAgZGlzcGxheU9yZGVyOiBpdGVtLmRpc3BsYXlfb3JkZXIgfHwgMCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWVyZ2VUZXN0aW1vbmlhbEl0ZW1zID0gKGFkbWluVGVzdGltb25pYWxzOiBBZG1pbkNvbnRlbnRJdGVtW10gPSBbXSkgPT4ge1xuICBjb25zdCBieU5hbWUgPSBuZXcgTWFwPHN0cmluZywgVGVzdGltb25pYWxEaXNwbGF5SXRlbT4oKTtcbiAgZnJvbnRlbmRUZXN0aW1vbmlhbHMuZm9yRWFjaCgoaXRlbSkgPT4gYnlOYW1lLnNldChpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSwgaXRlbSkpO1xuICBhZG1pblRlc3RpbW9uaWFscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgZGlzcGxheUl0ZW0gPSBkYXRhYmFzZVRlc3RpbW9uaWFsVG9EaXNwbGF5KGl0ZW0pO1xuICAgIGJ5TmFtZS5zZXQoZGlzcGxheUl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLCBkaXNwbGF5SXRlbSk7XG4gIH0pO1xuICByZXR1cm4gQXJyYXkuZnJvbShieU5hbWUudmFsdWVzKCkpLnNvcnQoKGEsIGIpID0+IChhLmRpc3BsYXlPcmRlciB8fCAwKSAtIChiLmRpc3BsYXlPcmRlciB8fCAwKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdGVzdGltb25pYWxEaXNwbGF5VG9QYXlsb2FkID0gKGl0ZW06IFRlc3RpbW9uaWFsRGlzcGxheUl0ZW0pOiBBZG1pbkNvbnRlbnRQYXlsb2FkID0+ICh7XG4gIHRpdGxlOiBpdGVtLm5hbWUsXG4gIHN1YnRpdGxlOiBpdGVtLnJvbGUsXG4gIGJvZHk6IGl0ZW0ucXVvdGUsXG4gIGltYWdlX3VybDogaXRlbS5pbWFnZSA9PT0gXCIvcGxhY2Vob2xkZXIuc3ZnXCIgPyBcIlwiIDogaXRlbS5pbWFnZSxcbiAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksXG4gIHB1Ymxpc2hlZF9hdDogXCJcIixcbiAgaXNfdmlzaWJsZTogaXRlbS5pc1Zpc2libGUsXG4gIGRpc3BsYXlfb3JkZXI6IGl0ZW0uZGlzcGxheU9yZGVyLFxuICBmaWVsZHM6IGl0ZW0uYWRtaW5JdGVtPy5maWVsZHMgfHwge30sXG59KTtcbiJdLCJuYW1lcyI6WyJzYW5nZWV0aGEiLCJkZWVwYSIsImFtZWVuYSIsImFydmluZCIsImlyYSIsImZyb250ZW5kVGVzdGltb25pYWxzIiwia2V5Iiwic291cmNlIiwibmFtZSIsInJvbGUiLCJjYXRlZ29yeSIsImltYWdlIiwicXVvdGUiLCJpc1Zpc2libGUiLCJkaXNwbGF5T3JkZXIiLCJkYXRhYmFzZVRlc3RpbW9uaWFsVG9EaXNwbGF5IiwiaXRlbSIsImlkIiwiYWRtaW5JdGVtIiwidGl0bGUiLCJzdWJ0aXRsZSIsImJvZHkiLCJpbWFnZV91cmwiLCJpc192aXNpYmxlIiwiZGlzcGxheV9vcmRlciIsIm1lcmdlVGVzdGltb25pYWxJdGVtcyIsImFkbWluVGVzdGltb25pYWxzIiwiYnlOYW1lIiwiTWFwIiwiZm9yRWFjaCIsInNldCIsInRvTG93ZXJDYXNlIiwiZGlzcGxheUl0ZW0iLCJBcnJheSIsImZyb20iLCJ2YWx1ZXMiLCJzb3J0IiwiYSIsImIiLCJ0ZXN0aW1vbmlhbERpc3BsYXlUb1BheWxvYWQiLCJwdWJsaXNoZWRfYXQiLCJmaWVsZHMiXSwibWFwcGluZ3MiOiJBQUVBLE9BQU9BLGVBQWUseUJBQXlCO0FBQy9DLE9BQU9DLFdBQVcscUJBQXFCO0FBQ3ZDLE9BQU9DLFlBQVksc0JBQXNCO0FBQ3pDLE9BQU9DLFlBQVksc0JBQXNCO0FBQ3pDLE9BQU9DLFNBQVMsbUJBQW1CO0FBZW5DLE1BQU1DLHVCQUFpRDtJQUNyRDtRQUNFQyxLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBT1g7UUFDUFksT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGNBQWM7SUFDaEI7SUFDQTtRQUNFUixLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBT1Y7UUFDUFcsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGNBQWM7SUFDaEI7SUFDQTtRQUNFUixLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBT1Q7UUFDUFUsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGNBQWM7SUFDaEI7SUFDQTtRQUNFUixLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBT1I7UUFDUFMsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGNBQWM7SUFDaEI7SUFDQTtRQUNFUixLQUFLO1FBQ0xDLFFBQVE7UUFDUkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsT0FBT1A7UUFDUFEsT0FBTztRQUNQQyxXQUFXO1FBQ1hDLGNBQWM7SUFDaEI7Q0FDRDtBQUVELE1BQU1DLCtCQUErQixDQUFDQyxPQUFvRCxDQUFBO1FBQ3hGVixLQUFLLENBQUMsU0FBUyxFQUFFVSxLQUFLQyxFQUFFLEVBQUU7UUFDMUJWLFFBQVE7UUFDUlcsV0FBV0Y7UUFDWFIsTUFBTVEsS0FBS0csS0FBSztRQUNoQlYsTUFBTU8sS0FBS0ksUUFBUSxJQUFJO1FBQ3ZCVixVQUFVTSxLQUFLTixRQUFRLElBQUk7UUFDM0JFLE9BQU9JLEtBQUtLLElBQUksSUFBSTtRQUNwQlYsT0FBT0ssS0FBS00sU0FBUyxJQUFJO1FBQ3pCVCxXQUFXRyxLQUFLTyxVQUFVO1FBQzFCVCxjQUFjRSxLQUFLUSxhQUFhLElBQUk7SUFDdEMsQ0FBQTtBQUVBLE9BQU8sTUFBTUMsd0JBQXdCLENBQUNDLG9CQUF3QyxFQUFFO0lBQzlFLE1BQU1DLFNBQVMsSUFBSUM7SUFDbkJ2QixxQkFBcUJ3QixPQUFPLENBQUMsQ0FBQ2IsT0FBU1csT0FBT0csR0FBRyxDQUFDZCxLQUFLUixJQUFJLENBQUN1QixXQUFXLElBQUlmO0lBQzNFVSxrQkFBa0JHLE9BQU8sQ0FBQyxDQUFDYjtRQUN6QixNQUFNZ0IsY0FBY2pCLDZCQUE2QkM7UUFDakRXLE9BQU9HLEdBQUcsQ0FBQ0UsWUFBWXhCLElBQUksQ0FBQ3VCLFdBQVcsSUFBSUM7SUFDN0M7SUFDQSxPQUFPQyxNQUFNQyxJQUFJLENBQUNQLE9BQU9RLE1BQU0sSUFBSUMsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU0sQUFBQ0QsQ0FBQUEsRUFBRXZCLFlBQVksSUFBSSxDQUFBLElBQU13QixDQUFBQSxFQUFFeEIsWUFBWSxJQUFJLENBQUE7QUFDL0YsRUFBRTtBQUVGLE9BQU8sTUFBTXlCLDhCQUE4QixDQUFDdkIsT0FBdUQsQ0FBQTtRQUNqR0csT0FBT0gsS0FBS1IsSUFBSTtRQUNoQlksVUFBVUosS0FBS1AsSUFBSTtRQUNuQlksTUFBTUwsS0FBS0osS0FBSztRQUNoQlUsV0FBV04sS0FBS0wsS0FBSyxLQUFLLHFCQUFxQixLQUFLSyxLQUFLTCxLQUFLO1FBQzlERCxVQUFVTSxLQUFLTixRQUFRO1FBQ3ZCOEIsY0FBYztRQUNkakIsWUFBWVAsS0FBS0gsU0FBUztRQUMxQlcsZUFBZVIsS0FBS0YsWUFBWTtRQUNoQzJCLFFBQVF6QixLQUFLRSxTQUFTLEVBQUV1QixVQUFVLENBQUM7SUFDckMsQ0FBQSxFQUFHIn0=